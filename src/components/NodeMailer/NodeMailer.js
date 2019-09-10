import React, { Component } from 'react';
import { Button, Card, TextField } from '@material-ui/core';
import axios from 'axios';

import async from 'q';

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
    this.setState({ [e.target.name]: e.target.value })

  }
     //first attempt**

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


  //continued attempt, merged two ideas.
  //still doesnt work but at least I am getting any response 
 async handleSubmit(e) {
    e.preventDefault();

    const { name, email, message} = this.state

    const response = await axios.post('/api/form', {
      name,
      email,
      message,
    });
    console.log(response.data);
    this.setState({
      name: '',
      email:'',
      message: '',
    })
  };
  

  //second attempt****

  // handleSubmit = async (e) => {
  //   e.preventDefault();
  //   e.target.reset();
  //   const { name, email, message } = this.state;
  //   const response = await axios.post(
  //     '/api/form',
  //     {
  //       name,
  //       email,
  //       message,
  //     },
  //   );
  //   console.log(response.data);
  //   };



// catch(error) {
//   console.error(error.response.data);
//   if (error.response.data === 'email not in db') {
//     this.setState({
//       showError: true,
//       messageFromServer: '',
//       showNullError: false,
//     });
//   }
// }

  //third attempt***
// handleSubmit(e){
//   e.preventDefault();
//   const name = document.getElementById('name').value;
//   const email = document.getElementById('email').value;
//   const message = document.getElementById('message').value;
// axios({
//   method: "POST", 
//   url:"/api/form", 
//   data: {
//       name: name,   
//       email: email,  
//       messsage: message,
//   }
// }).then((response)=>{
//   if (response.data.msg === 'success'){
//       alert("Message Sent."); 
//       this.resetForm()
//   }else if(response.data.msg === 'fail'){
//       alert("Message failed to send.")
//   }
// })
// }

render(){
  return (
    <div className="App">
      <Card>
        {/* <header className="App-header"> */}
        <h2>Contact Us</h2>
        <br />
        <form 
           style={{ width: '500px' }}>
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
            size="large"
            onClick={this.handleSubmit} >
            Submit!
            </Button>

        </form>
      </Card>
    </div>
  );
}
}

export default NodeMailer;