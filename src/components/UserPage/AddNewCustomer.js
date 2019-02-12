import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
// import { withStyles } from '@material-ui/core/styles';
// import LogOutButton from '../LogOutButton/LogOutButton';


// using this as a template //

class AddNewCustomer extends Component {

  constructor(props){
    // cutsomer info to add
    super(props);
      this.state = {
        fullName: '',
      // prefPro: '',
      // eMail: '',
      // phoneNum: '',
      // Notes: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      fullName: event.target.value,
    })
  }




  render() {

    return (
      <form >
        New Customer:
        <TextField
          id="outlined-name"
          label="Name"
          placeholder="Full Name"
          value={this.state.name}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
          type="text"
        />
        <TextField
        id="outline-pronouns"
        label="pronouns"
        placeholder="pronouns"
        variant="outlined"
        margin="normal"
        />
        <TextField
        id="outline-email"
        label="email"
        placeholder="email address"
        variant="outlined"
        margin="normal"
        />
        <TextField
        id="outline-phonenumber"
        label="Phone Number"
        placeholder="pronouns"
        variant="outlined"
        margin="normal"
        />
      </form>// end material ui intake form for new customer
    )
  }

}
// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default (connect(mapStateToProps)(AddNewCustomer));