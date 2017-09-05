import { FETCH_WEATHER } from '../actions/index';

export default function (state=[],action){
  switch(action.type){
  case FETCH_WEATHER:
  //concat : returning new instance of state, old + new ,concat different with push
    return state.concat([action.payload.data]);
    // return [action.payload.data, ...state]; take data and take all state put it together
  }
  return state;
}
