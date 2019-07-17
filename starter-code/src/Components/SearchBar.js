import React, { Component } from "react";

export default class SearchBar extends React.Component {
  state = {
    foodSearched: "" //String input right?
  };

  handleChange = event => {
    this.setState({
      foodSearched: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { foodSearched } = this.state;
    this.props.searchFood(foodSearched);
    this.setState({
      foodSearched: ""
    });
  };

  render() {
    console.log(this.props.searchFood);
    return (
      <ul class="food-input">
        <li>
          <form onSubmit={this.handleSubmit}>
            <label>Search for food </label>
            <input onChange={this.handleChange} placeholder="Search food" />
          </form>
        </li>
      </ul>
    );
  }
}
