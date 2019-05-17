/*
  Be sure to import in all of the action types from `../actions`
*/
import {GET_SMURFS,POST_SMURFS,DELETE_SMURFS,PUT_SMURFS, SUCCESS,FAILURE} from '../actions'
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


/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
