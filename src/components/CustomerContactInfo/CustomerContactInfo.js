import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Button from '@material-ui/core/Button';
import axios from 'axios';

class CustomerContactInfo extends Component {

    constructor(props){
        super(props);
        this.state = {
            customer_id: '',
            customers_name: '',
            pro_nouns: '',
            email: '',
            phone_number: ''

        }
    }
    componentDidMount() {
        this.custOutPut();
    }

    custOutPut = () => {
        console.log('Get axios');
        axios({
            method: 'GET',
            url: `/intake/${this.props.match.params.id}`
        }).then((response) => {
            console.log('Get', response.data);
            this.setState({
                    customer_id: response.data.id,
                    customers_name: response.data.customers_full_name,
                    pro_nouns: response.data.pro_nouns,
                    email: response.data.email,
                    phone_number: response.data.phone_number,
                  })
        });
    }


    //may not need this page..
    render() {
        return (
            <div className="project_contact">
            <div className="project_contact_name">
                <h1>Contact Info</h1>
                <br/>
                </div>
                <h2>Customer id: {this.state.customer_id}</h2>
                <h2>Customer name: {this.state.customers_name}</h2>
                <h2>Prefered pronouns: {this.state.pro_nouns}</h2>
                <h2>Email address: {this.state.email}</h2>
                <h2>Phone number: {this.state.phone_number}</h2>
                <br/>            
            </div>
        )
    }

}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(CustomerContactInfo);