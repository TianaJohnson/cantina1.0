import React, {Component} from 'react';
import { Button, Input, TextField} from '@material-ui/core';
import axios from 'axios';

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
        <TextField
          id="outlined-name"
          style={{ margin: 10 }}
          label="Name"
          type="text"
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
      />
          <TextField
          id="outlined-name"
          style={{ margin: 10 }}
          label="E-mail Address"
          type="text"
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
      />
          <TextField
          id="outlined-multiline-flexible"
          style={{ margin: 10 }}
          label="Message"
          multiline
          rowsMax="20"
          type="text"
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
      />
          <Button
          style={{ margin: 10 }}
          variant="contained"
          color="primary"
          size="large">
            Submit!
            </Button>

        </form>
        
        
      </header>
    </div>
  );
}
}

export default NodeMailer;