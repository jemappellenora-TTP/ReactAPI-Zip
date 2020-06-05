import React, { Component } from "react";

export default class Zipcard extends Component {
  render(){
      return(
          <div className="Zipcard col-6">
              <h3>{this.props.LocationText}</h3>
              <ul>{this.props.EstimatedPopulation}</ul>
              <ul>{this.props.TotalWages}</ul>
          </div>
      )
  }
  }