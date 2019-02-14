import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {

    addNew = () => {
        this.props.history.push('/newcustomer');
    }

    render(){
        return(
            <div>
            <p>Dashboard</p>
            <button onClick={this.addNew}>Add New Customer</button>
            </div>
        )
    }

}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
  }
  
  // this allows us to use <App /> in index.js
  export default connect(mapStateToProps)(Dashboard);