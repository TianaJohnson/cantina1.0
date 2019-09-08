import React, {Component} from 'react';
import { Button, Input, TextField} from '@material-ui/core';
import axios from 'axios';

import './App.css';
import { TextField } from '@material-ui/core';
// import { async } from 'q';

class NodeMailer extends Component {
  constructor() {
    super()
    this.state = {
      name:'',
      email:'',
      message:'',
    }
    this.handelChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleChange = e  => {
    this.setState({[e.target.name]: e.target.value})

  }

  async handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    // ^This resets the form!!!

    const { name, email, message} = this.state

    const form = await axios.post('/api/form', {
      name,
      email,
      message,
    })
  }

  

  render (){
  return (
    <div className="App">
      <header className="App-header">
        <h2>Nodemailer Spike 2.0</h2>
        <br/>
        <form onSubmit={this.handleSubmit} style={{ width: '500px'}}>
          <TextField>
            <Label>Name: </Label>
            <Input
            type="text"
            name="name"
            onChange={this.handleChange}
            />
          </TextField>
          <TextField>
            <Label>Email: </Label>
            <Input
            type="text"
            name="email"
            onChange={this.handleChange}
            />
          </TextField>
          <TextField>
            <Label>message: </Label>
            <Input
            type="text"
            name="message"
            onChange={this.handleChange}
            />
          </TextField>
          <Button>Submit!</Button>

        </form>
        
        
      </header>
    </div>
  );
}
}

export default NodeMailer;