import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomerToolBar from './../CustomerToolBar/CustomerToolBar';

import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

class customerFile extends Component {

  projectPage = () => {
    this.props.history.push('/project');
  }

    render () {
        return(
        <div>
          <CustomerToolBar/>
          <Card>
          <Button onClick={this.projectPage}
          variant="contained" 
          color="secondary" 
          className="newProjectBtn" >
          Project  
      </Button>
      <Button variant="contained" color="secondary" className="fitDataBtn">
        Fit Data
      </Button>
      <Button variant="contained" color="secondary" className="buildStatusBtn">
        Build Status
      </Button>
      <Button variant="contained" color="secondary" className="custNotesBtn">
        Notes
      </Button>
      <Button variant="contained" color="secondary" className="custInfoBtn">
        Customer Contact
      </Button>
          </Card>          
        </div>
        );
        
    }



}

const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
  }
export default connect(mapStateToProps)(customerFile);