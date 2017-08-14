// redux-promise unwraps the promise for us so we only have to work with data in our reducers

import { FETCH_WEATHER } from '../actions/index';
// we dont mutate state in a reducer (or in general), we return a new instance of state
export default function(state = [], action){
  // console.log('Action Received', action);

  switch (action.type) {
    case FETCH_WEATHER:
      // concat doesnt mutate the original array, it creates a new array
      return state.concat([action.payload.data]);
      // return [ action.payload.data, ...state ]; destructing, by flattening then creating a new one

      // state.push(action.payload.data) mutates the original array **DONT DO THIS!
  }

  return state;
}