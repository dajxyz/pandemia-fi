import { parseFinnishDateString } from "./helpers";

interface LogisticsNewsFromSource {
  date: string;
  title: string;
  url: string;
  sourceName: string;
}

const buildNewsFeedItemFromSource = (
  sourceItem: LogisticsNewsFromSource
): NewsFeedItem => ({
  date: parseFinnishDateString(sourceItem.date),
  url: sourceItem.url,
  title: sourceItem.title,
  additionalInfo: sourceItem.sourceName
});

const fetchActionsByNations = async (): Promise<NewsFeedItem[]> => {
  const response = await fetch("/data-sources/logistiikkauutiset.json");
  const results: LogisticsNewsFromSource[] = await response.json();
  return results.map(buildNewsFeedItemFromSource);
};

export default fetchActionsByNations;
