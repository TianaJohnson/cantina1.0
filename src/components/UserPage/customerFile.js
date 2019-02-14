import React, { Component } from 'react';
import { connect } from 'react-redux';

class customerFile extends Component {

    render () {
        return(
            <p>customer file</p>
        );
        
    }



}

const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
  }
export default connect(mapStateToProps)(customerFile);