export default (state = { }, action) => {
  console.log('reducer', action.type);
  switch(action.type) {
    case 'REQUEST_FOR_FRUIT':
      return Object.assign({}, state, { 
        description:  action.description, 
      });
    case 'FETCHING':
      return Object.assign({}, state, {
        fetching: action.fetching 
      })
    default:
      return state;
  }
};
