import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab'

class CustomerToolBar extends Component {

    projectPage = () => {
        this.props.history.push('/project');
    }

    render() {
        return (
            <Paper square>
                <Tabs
                     value={0}
                    // indicatorColor="primary"
                    // textColor="primary"
                     centered
                    // onChange={this.handleChange}
                >
                    <Tab label="Project"
                    onChange="this.projectPage"
                    />
                    <Tab label="Fit Data"
                    // onClick="this.fitDataPage"
                    />
                    <Tab label="Build Status"
                    // onClick="this.buildStatusPage"
                    />
                    <Tab label="Notes"
                    // onClick="this.notesPage"
                    />
                    <Tab label="Contact Information"
                    // onClick="this.contactInfoPage" 
                    />
                </Tabs>
            </Paper>
        )
    }  

}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
}
export default connect(mapStateToProps)(CustomerToolBar);