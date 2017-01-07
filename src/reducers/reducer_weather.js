import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
   // the action is the resulting object now, and not a promise
   // thanks to reduxpromise, which looks at the payload property.
   // if the payload is a promise, reduxpromise stops action and dispatches
   // a new action of same type but with resolved request as payload
   switch (action.type) {
     case FETCH_WEATHER:
      return [ action.payload.data, ...state ]; //destructuring an array
      // creates a new array with the prescribed values
      //return state.concat([action.payload.data]);
      // never mutate state, return a completely new instance of state
      // concat creates a new array that contains all the old stuff n new stuff
   }
  return state;
}
