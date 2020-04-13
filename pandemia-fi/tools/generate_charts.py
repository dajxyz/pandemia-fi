#
# A quickly made update script for current/legacy Pandemia.fi site
# Covid-19 charts in selected countries. Pulls data from ECDC and
# renders JSON and JavaScript files for the site.
#
# By Jussi Sainio <https://github.com/jsainio> 2020-04-06, 2020-04-14
#
# Licensed under CC-BY-SA 4.0 https://creativecommons.org/licenses/by-sa/4.0/
#
# Install Python 3.7+ and libraries, e.g. with Anaconda https://www.anaconda.com/distribution/.
#
# On command line:
#  $ conda create --name py37 python=3.7
#  $ conda activate py37
#  $ conda install requests pandas jinja2
#  $ python tools/generate_charts.py   # or $ yarn run generate-charts
#
# This should create JSON and JavaScript files under ./data/

import json
import requests
import datetime
import os
import sys
import pytz
import pandas as pd
from jinja2 import Environment, FileSystemLoader
from collections import OrderedDict
import argparse
import logging

script_path = os.path.dirname(sys.argv[0])


def main(args):
    #
    # fetch data from ECDC
    #

    ecdc_url = "https://opendata.ecdc.europa.eu/covid19/casedistribution/json/"
    logging.info("Fetching data from %s" % ecdc_url)
    r = requests.get(ecdc_url)

    # data structure example: 
    # {
    #    "records": [
    #    ...
    #    { 
    #      "dateRep": "06/04/2020",
    #      "day": "6",
    #      "month": "4",
    #      "year": "2020",
    #      "cases": "45",
    #      "deaths": "3",
    #      "countriesAndTerritories": "Finland",
    #      "geoId": "FI",
    #      "countryterritoryCode": "FIN",
    #      "popData2018": "5518050"
    #    }, 
    #    ...
    # ]}

    fetched_utc = pytz.utc.localize(datetime.datetime.utcnow())

    ecdc = r.json()


    #
    # create backups for the source data (just in case)
    #

    if args.save_backup:
        p = os.path.join("data_backup", "ecdc/", "ecdc-%s.json" % datetime.datetime.utcnow().isoformat())
        logging.info("Saving ECDC source data to %s" % p)
        with open(p, "w") as f:
            f.write(r.text)

    #
    # transform data
    #

    logging.info("Transforming ECDC data")

    # selected countries for the pandemia.fi frontpage charts

    selected_countries = ["Finland", "Sweden", "Norway", "Estonia", "Denmark", "Russia", "Italy", "Spain", "France", "Germany", "United_Kingdom", "United_States_of_America"]

    eu = set("Austria, Belgium, Bulgaria, Croatia, Cyprus, Czechia, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Ireland, Italy, Latvia, Lithuania, Luxembourg, Malta, Netherlands, Poland, Portugal, Romania, Slovakia, Slovenia, Spain, Sweden".split(", "))

    eea = set("Austria, Belgium, Czechia, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Italy, Latvia, Lithuania, Luxembourg, Malta, Netherlands, Poland, Portugal, Slovakia, Slovenia, Spain, Sweden, Norway, Iceland".split(", "))

    europe = eu | eea | set(["United_Kingdom"])

    #print("Europe", sorted(europe))

    world = set()
    for entry in ecdc["records"]:
        world.add(entry["countriesAndTerritories"])
    #print("World", sorted(world))

    timeshifts = {  # days substracted from original date, to adjust different outbreaks to 'same' starting point
        "Italy": 0,
        "Spain": 7,
        "France": 9,
        "Germany": 10,
        "Finland": 11,
    }



    # initialize a dict structure where selected countries will be processed to

    country_stats = {k: {
        "entries": [],
    } 
    for k in world}


    areas = {
        "Europe": europe,
        "World": world,
    }
    area_stats = {k : {
        "entries": {},
    }
    for k in areas.keys()}

    for entry in ecdc["records"]:
        if entry["countriesAndTerritories"] in world:
            country = entry["countriesAndTerritories"]
            year = int(entry["year"])
            month = int(entry["month"])
            day = int(entry["day"])
            cases = int(entry["cases"])
            deaths = int(entry["deaths"])
            try:
                popData2018 = int(entry["popData2018"])
            except ValueError as e:
                popData2018 = None
                logging.debug("Population data missing for country '%s'" % country)

            d = datetime.date(year, month, day)
            entry = {"date": d, "cases": cases, "deaths": deaths, "popData2018": popData2018}
            country_stats[country]["entries"].append(entry)


            # update areas
            for a in areas.keys():
                if country in areas[a]:
                    if d not in area_stats[a]["entries"].keys():
                        area_stats[a]["entries"][d] = {"date": d, "cases": cases, "deaths": deaths, "popData2018": popData2018}
                    else:
                        area_stats[a]["entries"][d]["cases"] += cases
                        area_stats[a]["entries"][d]["deaths"] += deaths
                        area_stats[a]["entries"][d]["popData2018"] += popData2018 if popData2018 != None else 0 

    # sort by date (ascending), calculate cumulative cases & deaths
    for c in world:
        country_stats[c]["entries"] = sorted(country_stats[c]["entries"], key=lambda x: x["date"])

        cum_cases = 0
        cum_deaths = 0
        for e in country_stats[c]["entries"]:
            cum_cases += e["cases"]
            cum_deaths += e["deaths"]
            e["cum_cases"] = cum_cases
            e["cum_deaths"] = cum_deaths
            #print(e)

    for a in areas.keys():
        cum_cases = 0
        cum_deaths = 0
        dates = list(sorted(area_stats[a]["entries"].keys()))

        for d in dates:
            e = area_stats[a]["entries"][d]
            cum_cases += e["cases"]
            cum_deaths += e["deaths"]
            e["cum_cases"] = cum_cases
            e["cum_deaths"] = cum_deaths


    #
    # render json
    #
    

    today_numbers_by_country = OrderedDict()
    today_numbers_by_area = OrderedDict()

    for c in selected_countries:
        e = country_stats[c]["entries"]
        today_numbers_by_country[c] = {
            "cumulative_confirmed_cases": e[-1]["cum_cases"],
            "cumulative_deaths": e[-1]["cum_deaths"],

            # compared to yesterday is a bit tricky, because last days' total cases may update with a delay
            "new_confirmed_compared_to_yesterday": e[-1]["cum_cases"] - e[-2]["cum_cases"],
            "new_confirmed_compared_to_yesterday_percentage": round((e[-1]["cum_cases"] - e[-2]["cum_cases"])/e[-2]["cum_cases"] * 100, 2),
            "new_deaths_compared_to_yesterday": e[-1]["cum_deaths"] - e[-2]["cum_deaths"],
            "new_deaths_compared_to_yesterday_percentage": round((e[-1]["cum_deaths"] - e[-2]["cum_deaths"])/e[-2]["cum_deaths"] * 100, 2),
            "last_date": e[-1]["date"].isoformat(),
            "source": "ECDC",
        }

    for a in areas.keys():
        e = area_stats[a]["entries"]
        d = list(sorted(e.keys()))
        today_numbers_by_area[a] = {
            "cumulative_confirmed_cases": e[d[-1]]["cum_cases"],
            "cumulative_deaths": e[d[-1]]["cum_deaths"],

            # compared to yesterday is a bit tricky, because last days' total cases may update with a delay
            "new_confirmed_compared_to_yesterday": e[d[-1]]["cum_cases"] - e[d[-2]]["cum_cases"],
            "new_confirmed_compared_to_yesterday_percentage": round((e[d[-1]]["cum_cases"] - e[d[-2]]["cum_cases"])/e[d[-2]]["cum_cases"] * 100, 2),
            "new_deaths_compared_to_yesterday": e[d[-1]]["cum_deaths"] - e[d[-2]]["cum_deaths"],
            "new_deaths_compared_to_yesterday_percentage": round((e[d[-1]]["cum_deaths"] - e[d[-2]]["cum_deaths"])/e[d[-2]]["cum_deaths"] * 100, 2),
            "last_date": e[d[-1]]["date"].isoformat(),
            "source": "ECDC",
        }



    out = OrderedDict([
        ("data_format", "pandemia-fi-today-numbers-v1"),
        ("sources", OrderedDict([
            ("ECDC", OrderedDict([
                ("source_link", ecdc_url),
                ("source_data_fecthed_UTC", fetched_utc.isoformat()),
            ])),
        ])),
        ("today_numbers_by_country", today_numbers_by_country),
        ("today_numbers_by_area", today_numbers_by_area),
        ])

    p = os.path.join("data", "covid19-today-stats.json")
    logging.info("Rendering 'pandemia-fi-today-numbers-v1' JSON to %s" % p)
    with open(p, "w") as f:
        json.dump(out, f, indent=4)



    #
    # render data to chart javascript format
    #

    # close-by scandinavian+ countries charts (finland, estonia, sweden, denmark, norway)

    for c in selected_countries:
        s = ""
        for e in country_stats[c]["entries"]:
            if e["date"] >= datetime.date(2020, 2, 21):
                # 50000: daniel jyllinkoski's apexcharts scaling hack
                if e["cum_cases"] > 0:
                    s += "{x: '%s GMT', y: %f}, " % (e["date"].strftime("%-m-%-d-%Y"), (e["cum_cases"] / e["popData2018"]) * 50000 * 100)
                else:
                    s += "{x: '%s GMT', y: null}, " % (e["date"].strftime("%-m-%-d-%Y"),)

        country_stats[c]["s"] = s


    # timeshifted results for selected eu countries (finland, france, spain, germany, italy)

    for c in timeshifts.keys():
        s = ""
        for e in country_stats[c]["entries"]:
            if e["date"] >= datetime.date(2020, 2, 21):
                # 50000: daniel jyllinkoski's apexcharts scaling hack
                tdate = e["date"] - datetime.timedelta(days=timeshifts[c])
                if e["cum_cases"] > 0:
                    s += "{x: '%s GMT', y: %f}, " % (tdate.strftime("%-m-%-d-%Y"), (e["cum_cases"] / e["popData2018"]) * 50000 * 100)
                else:
                    s += "{x: '%s GMT', y: null}, " % (tdate.strftime("%-m-%-d-%Y"),)

        country_stats[c]["t"] = s



    # combine into a dict for feeding into jinja2 template

    v = {
        "cases_percentage_finland": country_stats["Finland"]["s"],
        "cases_percentage_denmark": country_stats["Denmark"]["s"],
        "cases_percentage_sweden": country_stats["Sweden"]["s"],
        "cases_percentage_norway": country_stats["Norway"]["s"],
        "cases_percentage_estonia": country_stats["Estonia"]["s"],
        "cases_percentage_timeshifted_finland": country_stats["Finland"]["t"],
        "cases_percentage_timeshifted_spain": country_stats["Spain"]["t"],
        "cases_percentage_timeshifted_italy": country_stats["Italy"]["t"],
        "cases_percentage_timeshifted_germany": country_stats["Germany"]["t"],
        "cases_percentage_timeshifted_france": country_stats["France"]["t"],
        "update_date": "%s, lähde ECDC" % datetime.datetime.now().strftime("%-d.%-m.%Y klo %H.%M"),
    }






    # load and render a jinja2 template into final apexcharts javascript file

    env = Environment(
        loader=FileSystemLoader(script_path),
    )

    template = env.get_template("legacy-apex-charts.js.j2")
    p = os.path.join("data", "legacy-apex-charts.js")
    logging.info("Rendering legacy apex charts JavaScript to %s" % p)
    with open(p, "w+") as f:
        f.write(template.render(v, blocks=v))

    #with open("snapshot/www.pandemia.fi/assets/js/pages/demo.apex-area.js", "w+") as f:
    #    f.write(template.render(v, blocks=v))


    logging.info("Done")

if __name__ == "__main__":
    FORMAT = '%(asctime)-15s %(message)s'
    logging.basicConfig(format=FORMAT, stream=sys.stdout, level=logging.INFO)

    parser = argparse.ArgumentParser(description='Generate charts for pandemia.fi site.')
    parser.add_argument('--save_backup', type=bool, default=False,
                    help='Save source data backups')

    args = parser.parse_args()
    main(args)
