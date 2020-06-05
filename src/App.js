import React, { Component } from "react";
import ZipSearch from "./component/ZipSearch"
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { zipCodes: [] };
  }

  componentDidMount() {
    const city = this.props.cityName;
    const url = `http://ctp-zip-api.herokuapp.com/city/${city}`;

    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        console.log(data);
        const zipCodes = data;
        this.setState({ city, zipCodes });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="City">
        <>current number: {this.props.city}</>
        <ZipSearch zip={zipList}></ZipSearch>
      </div>
    );
  }
}