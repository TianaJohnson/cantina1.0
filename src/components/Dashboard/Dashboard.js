import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';


class Dashboard extends Component {

    // on click of btn, sends user to new customer page
    addNew = () => {
        this.props.history.push('/newcustomer');
    }
    // on click of btn sends user to customer file page
    custFile = () => {
        this.props.history.push('/file');
    }

    render() {
        return (
            <div className="dashboard_main">
                <h1>Dashboard</h1>
                <Button variant="outlined" 
                color="primary" 
                onClick={this.addNew}
                style={{ margin: 10 }}>
                    Add New Customer
                </Button>
                <Button variant="outlined" 
                color="secondary" 
                onClick={this.custFile}
                style={{ margin: 10 }}>
                    Customer File
                </Button>
            </div>
        )
    }

}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Dashboard);