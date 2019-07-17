import React, { Component } from "react";

export default class Foodform extends Component {
  // We define the state and inout for contact form here
  state = {
    name: "",
    calories: 0,
    pictureUrl: ""
  };

  // Handle just prevents the form from refreshing.

  handleSubmit = event => {
    event.preventDefault();

    // We make the variable for new collection.

    const newFood = {
      name: this.state.name,
      pictureUrl: this.state.pictureUrl,
      calories: Number(this.state.calories)
    };

    // Need to understand what props do exactly, but it seems to push new food.
    this.props.pushFoods(newFood);

    this.setState({
      name: "",
      pictureUrl: "",
      calories: 0
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          onChange={this.handleChange}
          type="text"
          name="name"
          id="name"
          value={this.state.name}
        />

        <label htmlFor="calories">Calories: </label>
        <input
          onChange={this.handleChange}
          type="number"
          name="calories"
          id="calories"
          value={this.state.calories}
        />

        <label htmlFor="pictureUrl">Picture URL: </label>
        <input
          onChange={this.handleChange}
          type="text"
          name="pictureUrl"
          id="pictureUrl"
          value={this.state.pictureUrl}
        />

        <button type="submit">Add a Food Item</button>
      </form>
    );
  }
}
