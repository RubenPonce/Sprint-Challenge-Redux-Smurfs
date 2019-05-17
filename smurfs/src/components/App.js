import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {getSmurfs} from '../actions'

import  AddSmurf  from './AddSmurf';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount(){
    console.log(this.props)
    this.props.getSmurfs();
  }
  render() {
    
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div className="smurf-container">
          <AddSmurf />
     
          {this.props.smurfs.map(smurf=>(
            <div className="smurf-card">
            <h1> name: {smurf.name}</h1>
            <h3>
              age: {smurf.age}
            </h3>
            <h3>
              height: {smurf.height}
            </h3>
            </div>
            ))}
            </div>
     
        <div>Have fun!</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state)

  return {
    smurfs: state.smurfs
  }
}
export default connect(mapStateToProps,{getSmurfs})(App);
