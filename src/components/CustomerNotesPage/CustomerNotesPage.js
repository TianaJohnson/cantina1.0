import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import axios from 'axios';
// import Button from '@material-ui/core/Button';

class CustomerNotesPage extends Component {
    
    //may not need this page..
    render() {
        return (
            <div className="notes_main">
            <Card className="notes_card">
                <div className="notes_text">
                <h1>Notes from Build:</h1>
                <br/>
                </div>
                <br/>
            </Card>
            </div>
        )
    }

}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(CustomerNotesPage);