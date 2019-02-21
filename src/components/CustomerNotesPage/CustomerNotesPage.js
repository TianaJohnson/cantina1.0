import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import axios from 'axios';
// import Button from '@material-ui/core/Button';

class CustomerNotesPage extends Component {
    constructor(props){
        super(props);
        this.state= {
            customer_notes: '',
        }
    }

    custNotes = () => {
        console.log('Get axios ');
        axios({
            method: 'GET',
            url: `/intake/${this.props.match.params.id}`
        }).then((response) => {
            console.log('Get', response);
            this.setState({
                customer_notes: response.data.customer_notes,
            });
        });
    }
    //may not need this page..
    render() {
        return (
            <div className="notes_main">
            <Card className="notes_card">
                <div className="notes_text">
                <h1>Notes from Build:</h1>
                </div>
                <Card className="notes_notes">
                <p>Customer intake notes:{this.state.customer_notes}</p>
                </Card>
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