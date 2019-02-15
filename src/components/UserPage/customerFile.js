import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomerToolBar from './../CustomerToolBar/CustomerToolBar';

import Card from '@material-ui/core/Card';
// import Button from '@material-ui/core/Button';

class customerFile extends Component {

  projectPage = () => {
    this.props.history.push('/project');
  }

    render () {
        return(
        <div>
          <CustomerToolBar/>
          <Card>
    
          </Card>          
        </div>
        );
        
    }



}

const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
  }
export default connect(mapStateToProps)(customerFile);