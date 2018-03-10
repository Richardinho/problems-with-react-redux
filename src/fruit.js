import React, { Component } from 'react';
import { connect } from 'react-redux';
import FruitService from './fruit-service';
import Spinner from './spinner';
const fruitService = new FruitService(); 

class Fruit extends Component {

  render() {
    return (
      <div>
        { this.props.fetching && <Spinner/>  }
        { !this.props.fetching && this.props.description }
      </div>
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.fruit !== this.props.match.params.fruit) {
      this.hydrate(nextProps.match.params.fruit);
    }
  }

  componentDidMount() {
    this.hydrate(this.props.match.params.fruit);
  }

  hydrate(fruitId) {
    this.props.fetchFruit(fruitId);
  }
}

function requestFruitAction(fruitId) {
  return function(dispatch) {
    dispatch({
      type: 'FETCHING',
      fetching: true
    });
    fruitService.fetch(fruitId).then(data => {
      dispatch({
        type: 'REQUEST_FOR_FRUIT',
        description: data.description 
      });
      dispatch({
        type: 'FETCHING',
        fetching: false 
      });
    });
  }
}

const mapStateToProps = ({ description, fetching}) => {
  return {
    description,
    fetching
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFruit : (fruitId) => {
      const rv = dispatch(requestFruitAction(fruitId));
      console.log('fetchFruit return value', rv);
    } 
  };
};

let FruitComponent = connect(mapStateToProps, mapDispatchToProps)(Fruit);

export default FruitComponent;
