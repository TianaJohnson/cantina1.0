import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class NewProjectIntake extends Component {


    //may not need this page..
    render() {
        return (
            <div className="project_intake">
                <form>
                    <TextField
                        style={{ margin: 10 }}
                        className="new-cust-intake"
                        id="outlined-name"
                        label="Wheel Size"
                        placeholder="Full Name"
                        margin="normal"
                        variant="outlined"
                        type="text"
                    />

                </form>
            </div>
        )
    }

}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(NewProjectIntake);