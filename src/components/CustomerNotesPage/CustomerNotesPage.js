import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
import NodeMailer from './../NodeMailer/NodeMailer';


class CustomerNotesPage extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_PROJECT', payload: { id: this.props.match.params.id } });
    }
    addCustNotesBtn = () => {
        alert('Sent!');
        this.props.history.push('/home');
    }

    
    render() {
        const project = this.props.reduxStore.project.projectReducer;
        return (
            <div className="notes_main">
                <Card className="notes_card">
                    <NodeMailer/>
                    <br />
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