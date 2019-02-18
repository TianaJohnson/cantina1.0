import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Button from '@material-ui/core/Button';

class CustomerNotesPage extends Component {


    //may not need this page..
    render() {
        return (
            <div className="project_main">
                <h1>Notes from Build</h1>
                
            </div>
        )
    }

}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(CustomerNotesPage);