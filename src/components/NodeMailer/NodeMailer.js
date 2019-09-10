import React, {Component} from 'react';
import { Button, Card, TextField} from '@material-ui/core';
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
    // this.handelChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleChange = e  => {
    this.setState({[e.target.name]: e.target.value})

  }

  // async handleSubmit(e) {
  //   e.preventDefault();
  //   e.target.reset();
  //   // ^This resets the form!!!

  //   const { name, email, message} = this.state

  //   const form = await axios.post('/api/form', {
  //     name,
  //     email,
  //     message,
  //   })
  // }

  sendEmail = async (e) => {
    e.preventDefault();
    const { email } = this.state;
    const response = await axios.post(
          '/api/form',
          {
            name,
            email,
            message,
          },
        );
        console.log(response.data);
        if (response.data === 'recovery email sent') {
          this.setState({
            showError: false,
            messageFromServer: 'recovery email sent',
            showNullError: false,
          });
        }
      } catch (error) {
        console.error(error.response.data);
        if (error.response.data === 'email not in db') {
          this.setState({
            showError: true,
            messageFromServer: '',
            showNullError: false,
          });
        }
      }
    }
  };

  render (){
  return (
    <div className="App">
      <Card>
      {/* <header className="App-header"> */}
        <h2>Contact Us</h2>
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
        </Card>
    </div>
  );
}
}

export default NodeMailer;