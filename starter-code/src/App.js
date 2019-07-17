import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css"; // Ani added this.
import foodItems from "./foods.json";
import Foodbox from "./Components/Foodbox";
import Foodform from "./Components/Foodform";
import SearchBar from "./Components/SearchBar";

class App extends Component {
  // Food pulled from JSON into the Display.
  state = {
    foodItems: foodItems,
    show: false
  };

  // Pushing the same number of elements as in the valirable Foods. It#2

  pushFoods = newfood => {
    let foodItems = [...this.state.foodItems];
    foodItems.push(newfood);

    this.setState({ foodItems: foodItems });
  };

  // // Adding all the food.

  // pushFoods = newfood => {
  //   let foodItems = [...this.state.foodItems];
  //   foodItems.push(newfood);

  //   this.setState({ foodItems: foodItems });
  // };

  // Display related stuff

  showform = () => {
    this.setState({ show: !this.state.show });
  };

searchFood =(ho) => {
let temp = foodItems.indexOf[ho];
this.setState({ foodItems: temp })}

this.setState ({ foodItems[]: foodSearched });,
};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ani and Luisa</h1>
        </header>

        <button onClick={this.showform}>Add Food</button>

        {this.state.show && <Foodform pushFoods={this.pushFoods} />}
        <SearchBar className="search-bar" searchFood = {this.searchFood} />
        <Foodbox list={this.state.foodItems} />
        {/* </p> */}
      </div>
    );
  }
}

export default App;
