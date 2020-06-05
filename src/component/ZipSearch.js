import React, { Component } from "react";
import axios from "axios";
import ZipCard from "./ZipCard";

export default class ZipSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      zipCodes: props.zip,
      cityInfo: null};
  }

  componentDidMount=(eachZip)=> {
    let url = `http://ctp-zip-api.herokuapp.com/zip/${eachZip}`;

    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        console.log(data);
        const updateinfo = {
          name: data.LocationText,
          state: data.State,
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
          {this.state.zipCodes.map((eachZip) => (eachZip.componentDidMount()))}
        </ol>
      );
    }
    const result=()=>
      this.state.zipCodes.map((each) =>{
        return(
          <ZipCard 
            location= {each.LocationText}
            population= {each.EstimatedPopulation}
            totalwage= {each.TotalWages}
            />
        );
      })
    return (
      <>
        <div className="Result">
        <p>{result}</p>
        {zipList}
        </div>
      </>
    );
}
}