import React, { Component } from "react";
import axios from "axios";

export default class ZipSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      zipCodes: {this.props.zip},
      cityInfo: null};
  }

  componentDidMount(eachZip) {
    let url = `http://ctp-zip-api.herokuapp.com/zip/${eachZip}`;

    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        console.log(data);
        const updateinfo = {
          name: data.LocationText,
          state: data.State,
          locationLat: data.Lat,
          locationLong: data.Long,
          population: data.EstimatedPopulation,
          total: data.TotalWages
        }
        this.setState({ cityInfo: updateinfo});
      }).catch((err) => console.log(err));
  }


  render() {
    let zipList;
    if (this.state.zipCodes.length === 0) {
      zipList = <></>;
    } else {
      zipList = (
        <ol>
          {this.state.zipCodes.map((eachZip) => (componentDidMount(eachZip)))}
        </ol>
      );
    }
    return (
      <div className="City">
        <h1>City</h1>
        <h3>{this.props.city}</h3>
        {zipList}
      </div>
    );
  }
}