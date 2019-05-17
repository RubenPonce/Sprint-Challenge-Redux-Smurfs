import React, { Component } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";
export class AddSmurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  formSubmit = e => {
    e.preventDefault();
    const obj = { ...this.state };
    this.props.addSmurf(obj);
    console.log(e.target.target)
    this.setState({
      name: '',
      age: '',
      height: '',
    })
  };

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <label htmlFor="name">Name</label>
        <input
          required
          value={this.state.name}
          onChange={this.handleChange}
          type="text"
          name={"name"}
        />

        <label htmlFor="age">Age</label>
        <input
          required
          value={this.state.age}
          onChange={this.handleChange}
          type="text"
          name={"age"}
        />

        <label htmlFor="email">height</label>
        <input
          required
          value={this.state.height}
          onChange={this.handleChange}
          type="text"
          name={"height"}
        />

        <button>Add Smurf</button>
      </form>
    );
  }
}
const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  { addSmurf } /* action creators go here */
)(AddSmurf);
