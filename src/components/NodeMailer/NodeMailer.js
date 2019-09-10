import React, { Component } from 'react';
import { Button, Card, TextField } from '@material-ui/core';
import axios from 'axios';
import './nm.css';

//import async from 'q';

class NodeMailer extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      message: '',
    }
    this.handelChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value })

  }

//finally figured out how to clear the form 
//and where/how to call the function
  clearForm = e => {
    this.setState({
      name:'',
      email:'',
      message:''
    })
  }

  //first attempt**

  async handleSubmit(e) {
    console.log(this.state)
    e.preventDefault();
    const { name, email, message } = this.state;
    this.clearForm();
    await axios.post('/api/form', {
      name,
      email,
      message,
    })
  }



  render() {
    return (
      <div className="App">
        {/* <Card classNmae="mail-card"> */}
          {/* <header className="App-header"> */}
          <h2 className="mail-text">Email </h2>
          <br />
          <form
            style={{ width: '500px' }}>
            <TextField
              id="inputName"
              style={{ margin: 10 }}
              label="Name"
              type="text"
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
              name="name"
              value={this.state.name}
            />
            <TextField
              id="inputEmail"
              style={{ margin: 10 }}
              label="Email Address"
              type="text"
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
              name="email"
              value={this.state.email}
            />
            <TextField
              id="inputMessage"
              style={{ margin: 10 }}
              label="Message"
              multiline
              rowsMax="20"
              type="text"
              multiline rows="8"
              fullWidth
              margin="normal"
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
              name="message"
              value={this.state.message}
            />
            <Button
              style={{ margin: 10 }}
              variant="contained"
              color="primary"
              size="large"
              onClick={this.handleSubmit}
            >
              Submit!
            </Button>

          </form>
        {/* </Card> */}
      </div>
    );
  }
}

export default NodeMailer;