import React, { Component } from 'react';
import Fruit from './fruit';
import { BrowserRouter, Redirect, NavLink, Route } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super(); 
    this.state = {
      fruits : ['apple', 'banana', 'tomato'] 
    };
  }

  renderFruit(fruit) {
    return (<li key={fruit}><NavLink to={ fruit }>{ fruit }</NavLink></li>);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="fruit-app-with-streams">
          <h2>Fruit</h2>
          <ul>
            { this.state.fruits.map(this.renderFruit) }         
          </ul>
          <h2>Fruit Detail</h2>
          <Route path="/:fruit" component={Fruit}/>
        </div>
      </BrowserRouter> 
    );
  }
}
