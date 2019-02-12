import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
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
//   getAdminInfo = () => {
//     axios({
//         method: 'POST',
//         url: ''
//     }).then((response) => {
//         const action = {
//             type: 'SET_TAGS',
//             payload: response.data
//         };
//         this.props.dispatch(action);
//     }).catch((error) => {
//         console.log('error in get admin', error);
//     })
// }

  handleChange = (event) => {
    this.setState({
      fullName: event.target.value,
      // prefPro: 
    })
  }




  render() {

    return (
      <form
      className="form_newCust" >
        New Customer:
        <TextField
          className="new-cust-intake"
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
        className="new-cust-intake"
        id="outline-pronouns"
        label="pronouns"
        placeholder="pronouns"
        variant="outlined"
        margin="normal"
        />
        <TextField
        className="new-cust-intake"
        id="outline-email"
        label="email"
        placeholder="email address"
        variant="outlined"
        margin="normal"
        />
        <TextField
        className="new-cust-intake"
        id="outline-phonenumber"
        label="Phone Number"
        placeholder="pronouns"
        variant="outlined"
        margin="normal"
        />
      </form>
      // end material ui intake form for new customer
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