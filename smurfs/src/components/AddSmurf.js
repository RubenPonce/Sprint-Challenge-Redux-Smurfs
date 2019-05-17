import React, { Component } from 'react'
import {connect} from 'react-redux';
import {addSmurf} from '../actions'
export class AddSmurf extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          age: "",
          height: "",
        };

      }


      handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };
    
      formSubmit = e => {
        e.preventDefault();
        console.log(this.props)
        const obj = { ...this.state };
        this.props.addSmurf(obj)
        console.log(this.props)
      };
    
      
      render() {
        // console.log(this.props)
        return (
          <form onSubmit={this.formSubmit}>
            <label htmlFor="name">Name</label>
            <input
              required
              value={this.state.name}
              onChange={this.handleChange}
              type="text"
              placeholder=".."
              name={"name"}
            />
    
            <label htmlFor="age">Age</label>
            <input
              required
              value={this.state.age}
              onChange={this.handleChange}
              type="text"
              placeholder=".."
              name={"age"}
            />
    
            <label htmlFor="email">email</label>
            <input
              required
              value={this.state.email}
              onChange={this.handleChange}
              type="text"
              placeholder=".."
              name={"height"}
            />
    
            <button>ADD NEW Smurf!!!!</button>
          </form>
        );
      }
}
const mapStateToProps = state => {
  
  return {
    smurfs: state.smurfs,
  };
};



export default connect(
  mapStateToProps,/* mapStateToProps replaces null here */
    { addSmurf }/* action creators go here */
  
)(AddSmurf);