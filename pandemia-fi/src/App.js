import React, { Component } from "react";
import Layout from "./components/layout";
import LandingPage from "./pages/landing";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      statData: {
        numsConfirmed: 0,
        numsConfirmedToday: 0,
        numsDeaths: 0,
        numsRecovered: 0,
      },
    };

    this.today = new Date();
    this.today.setDate(this.today.getDate());
  }

  async componentDidMount() {
    const response = await fetch('https://w3qa5ydb4l.execute-api.eu-west-1.amazonaws.com/prod/finnishCoronaData');
    const responseJson = await response.json();

    this.setState({
      statData: {
        numsConfirmed: responseJson.confirmed.length,
        numsConfirmedToday: responseJson.confirmed.filter(entry => {
          const d = new Date(entry.date);
          return d.getFullYear() === this.today.getFullYear()
                 && d.getMonth() === this.today.getMonth()
                 && d.getDate() === this.today.getDate();
        }).length,
        numsDeaths: responseJson.deaths.length,
        numsRecovered: responseJson.recovered.length,
      }
    });
  }


  render() {

    return (
      <Layout>
        <LandingPage
          numsConfirmed={this.state.statData.numsConfirmed}
          numsConfirmedToday={this.state.statData.numsConfirmedToday}
          numsRecovered={this.state.statData.numsRecovered}
          numsDeaths={this.state.statData.numsDeaths}
        />
      </Layout>
    );
  }
};

export default App;
