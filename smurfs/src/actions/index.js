/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const GET_SMURFS = 'GET_SMURFS'
export const POST_SMURFS = 'POST_SMURFS'
export const PUT_SMURFS = 'PUT_SMURFS'
export const DELETE_SMURFS = 'DELETE_SMURFS'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

export const getSmurfs = () =>(dispatch)=>{
dispatch({type: GET_SMURFS});
axios.get('http://localhost:3333/smurfs')
.then(res=>{
  console.log(res.data)
  dispatch({type: SUCCESS, payload: res.data})
})
.catch(err=>console.log(err)/*dispatch type: FAILURE goes here */)

}

export const addSmurf = (smurfs) => dispatch=> {
  dispatch({type: GET_SMURFS});
  axios.post('http://localhost:3333/smurfs',smurfs)
  .then(res=>{
    console.log(res.data)
    dispatch({type: SUCCESS, payload: res.data})
  })
}