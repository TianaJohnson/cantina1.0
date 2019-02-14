import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {

    addNew = () => {
        this.props.history.push('/newcustomer');
    }

    render(){
        return(
            <div className="dashboard_main">
            <h1>Dashboard</h1>
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