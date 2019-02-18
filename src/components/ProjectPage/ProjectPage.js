import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';


class ProjectPage extends Component {

    projectIn = () => {
        this.props.history.push('/addproject');
    }

    // make axios request to /intake/${this.props.match.params.id}

    //Project main page
    render() {
        return (
            <div className="project_page">
                <h1>Project Page</h1>
                HERE: {JSON.stringify(this.props.match.params.id)}
                <Button variant="outlined"
                    color="secondary"
                    style={{ margin: 10 }}
                    onClick={this.projectIn}>
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