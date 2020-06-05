import React, { Component } from "react";
import ZipSearch from "./component/ZipSearch";
import axios from "axios";
import FetchCity from "./component/FetchCity";
import Input from "./component/Input";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      searching: true,
    };
  }
  render() {
    return (
      <div className="City">
        <FetchCity />
      </div>
    );
  }
}
