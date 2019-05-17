
import {GET_SMURFS, SUCCESS} from '../actions'
const initialState = {
  smurfs: [],
}

export default (state = initialState,  action ) => {
  switch (action.type) {
  case GET_SMURFS:
    return { 
      ...state,
      
    }
    case SUCCESS:
    return{
      ...state,
      smurfs:action.payload
    }
  default:
    return state
  }
}

