import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class ProjectPage extends Component {


    //may not need this page..
    render() {
        return (
            <div className="project_main">
                <h1>Project Page</h1>
                <Button variant="outlined" 
                        color="secondary"
                        style={{ margin: 10 }} >
                        Add New Project
                </Button>
                <Button variant="outlined" 
                        color="secondary" >
                        Past Projects
                </Button>
            </div>
        )
    }

}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ProjectPage);