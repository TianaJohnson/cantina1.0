import React, { Component } from 'react';
import { connect } from 'react-redux';
//import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
// import LogOutButton from '../LogOutButton/LogOutButton';


// using this as a template //
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});


class AddNewCustomer extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    if(id){
      const action = { type: 'FETCH_FOCUS_CUSTOMER', payload: id };
      this.props.dispatch(action);
    }
  }
  
  componentDidUpdate (prevProps, prevState) {
    const prevCust = prevProps.reduxStore.addCust.customerFocusReducer;
    const upCust = this.props.reduxStore.addCust.customerFocusReducer;
    if( upCust !== prevCust){
      this.setState({
        ...upCust
      })
      console.log('did mount', upCust);
      // this.loadState(upCust);
    }
  }

  //  loadState = (upCust) =>{
  //   this.setState({
  //     ...upCust
  //   })
  // }

  constructor(props) {
    // cutsomer info to add
    super(props);
    this.state = {
      customers_full_name: '',
      pro_nouns: '',
      email: '',
      phone_number: '',
      customer_notes: '',
    }
  }
 
  //Send to saga
  updateCust = (event) => {
    console.log('update cust');
    const action = {
      type: 'ADD_CUSTOMER',
      payload: this.state,      
    };
    this.props.dispatch(action);
    this.setState({
      customers_full_name: '',
      pro_nouns: '',
      email: '',
      phone_number: '',
      customer_notes: '',
    })
  this.props.history.push('/file');
  }

  // // input state update
  handleChangeName = (event) => {
    console.log('name')
    this.setState({
      customers_full_name: event.target.value,     
    })
   }
   handleChangePro = (event) => {
    console.log('pronouns')
    this.setState({
      pro_nouns: event.target.value,     
    })
   }
   handleChangeEmail = (event) => {
    console.log('email')
    this.setState({
      email: event.target.value,     
    })
   }
   handleChangePhone = (event) => {
    console.log('phone')
    this.setState({
      phone_number: event.target.value,     
    })
   }
   handleChangeNotes = (event) => {
    console.log('notes')
    this.setState({
      customer_notes: event.target.value,     
    })
   }

   
  render() {

    return (
      <form 
        className="form_newCust" >
        New Customer:
        <br/>
        <TextField
          style={{ margin: 10 }}
          className="new-cust-intake"
          id="outlined-name"
          label="Name"
          placeholder="Full Name"
          margin="normal"
          variant="outlined"
          type="text"
          value={this.state.customers_full_name}
          onChange={this.handleChangeName}
        />
        <TextField
          style={{ margin: 10 }}
          className="new-cust-intake"
          id="outline-pronouns"
          label="pronouns"
          variant="outlined"
          margin="normal"
          value={this.state.pro_nouns}
          onChange={this.handleChangePro}
        />
        <TextField
          style={{ margin: 10 }}
          className="new-cust-intake"
          id="outline-email"
          label="email"
          placeholder="email address"
          variant="outlined"
          margin="normal"
          value={this.state.email}
          onChange={this.handleChangeEmail}
        />
        <TextField
          style={{ margin: 10 }}
          className="new-cust-intake"
          id="outline-phonenumber"
          label="Phone Number"
          variant="outlined"
          margin="normal"
          value={this.state.phone_number}
          onChange={this.handleChangePhone}
        />
        <TextField
          style={{ margin: 10 }}
          className="new-cust-intake"
          id="outline-notes"
          label="notes"
          variant="outlined"
          margin="normal"
          multiline rows="8"
          value={this.state.customer_notes}
          onChange={this.handleChangeNotes}
        />
        <Button onClick={this.updateCust}
        style={{ margin: 10 }}
          variant="contained"
          color="primary"
          className="addCustBtn">
          Add
       </Button>
      </form>
      // end material ui intake form for new customer
    )
  }

}
// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = reduxStore => {
  return { reduxStore: reduxStore };
}

// this allows us to use <App /> in index.js
export default withStyles(styles)(connect(mapStateToProps)(AddNewCustomer));