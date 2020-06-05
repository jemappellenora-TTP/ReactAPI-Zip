// import { useState, useEffect } from "react";
// import axios from "axios";

// const BASE_URL = "http://ctp-zip-api.herokuapp.com/zip";

// const useFetchCity = (zipCode) => {
//   const [cities, setCities] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     if (zipCode.toString().length === 5) {
//       axios
//         .get(`${BASE_URL}/${zipCode}`)
//         .then((response) => {
//           setCities(response.data);
//           setIsLoading(false);
//         })
//         .catch((error) => console.log(error));
//     }
//   }, [zipCode]);
//   return { cities, isLoading };
// };

// export default useFetchCity;

import React, { Component } from "react";
import axios from "axios";

export class FetchCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      search: "",
      prevousState: "",
      searching: true,
    };
  }

  componentDidMount() {
    const url = `http://ctp-zip-api.herokuapp.com/city/${this.state.search}`;
    const fetch = async () => {
      await axios
        .get(url)
        .then((response) => {
          this.setState({ cities: response.data });
        })
        .catch((err) => console.log(err));
    };
    fetch();
  }

  componentDidUpdate() {
    if (this.state.search !== this.state.prevousState) {
      const url = `http://ctp-zip-api.herokuapp.com/city/${this.state.search}`;

      const fetch = async () => {
        await axios
          .get(url)
          .then((response) => {
            this.setState({ cities: response.data });
          })
          .catch((err) => console.log(err));
      };
      fetch();
      this.setState({ prevousState: this.state.search });
    }
  }

  render() {
    const handleChange = (e) => {
      if (e.target.value === "") {
        this.setState({ searching: true });
      } else {
        this.setState({ search: e.target.value, searching: false });
      }
    };
    return (
      <div>
        <input
          className="input"
          type="text"
          placeholder="Search..."
          onChange={handleChange}
        />

        {this.state.cities.map((city) => {
          return (
            <>
              <div>{city}</div>
            </>
          );
        })}
      </div>
    );
  }
}

export default FetchCity;
