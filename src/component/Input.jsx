import React, { Component } from "react";

export class Input extends Component {
  render() {
    const handleChange = (e) => {
      if (e.target.value === "" || e.target.value.toString().length !== 5) {
        this.props.setState({ searching: true });
      } else {
        this.props.setState({ search: e.target.value, searching: true });
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
      </div>
    );
  }
}

export default Input;
