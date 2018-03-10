import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import App from './app-component'
import reducer from './reducer';

const initialState = {};

const store = createStore(reducer, 
  initialState, 
  applyMiddleware(
    thunkMiddleware
  ));

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./app-component', () => { 
    render(App) 
  })
}
