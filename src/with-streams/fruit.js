import React, { Component } from 'react';
import FruitService from '../fruit-service';
import Spinner from '../spinner';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import Rx from 'rxjs/Rx';

const fruitService = new FruitService(); 

export default class Fruit extends Component {

  constructor(props) {
    super(props);

    this.state = {
      description: 'placeholder',
      fetching: false
    }
  }

  render() {
    return (
      <div>
        { this.state.fetching && <Spinner/>  }
        { !this.state.fetching && this.state.description }
      </div>
    );
  }

  componentDidMount() {
    this.match = new Rx.BehaviorSubject(this.props.match);

    this.subscription = this.match
      .map(match => match.params.fruit) 
      .switchMap(id => {
        this.setState({ fetching: true });
        return Rx.Observable.fromPromise(fruitService.fetch(id)); 
      })
      .subscribe(fruit => {
        this.setState({ fetching: false, description: fruit.description });
      });
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.match.url !== this.props.match.url) {
      this.match.next(nextProps.match);
    }
  }
}

