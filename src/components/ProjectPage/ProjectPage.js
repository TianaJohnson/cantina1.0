import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import Card from '@material-ui/core/Card';



class ProjectPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customer_name: '',
        }
    }
    componentDidMount() {
        this.custName();
    }


    projectIn = () => {
        this.props.history.push('/addproject');
    }

    // make axios request to /intake/${this.props.match.params.id}
    custName = () => {
        console.log('Get axios');
        axios({
            method: 'GET',
            url: `/intake/${this.props.match.params.id}`
        }).then((response) => {
            console.log('Get', response);
            this.setState({
                customer_name: response.data.customers_full_name,
            });
        });
    }



    //Project main page
    render() {
        return (
            <div className="project_page">
                <h1>Project Page</h1>
                <h2>Customer: {this.state.customer_name}'s</h2>
                <h3>Build Information</h3>
                <Card>
                <form>
                    <TextField
                        id="outlined-name"
                        label="Name"
                        margin="normal"
                        variant="outlined"
                    />
                </form>
                <Button variant="outlined"
                        color="secondary"
                        style={{ margin: 10 }}
                        onClick={this.projectIn}>
                        Add New Project
                        </Button>
                </Card>
            </div>
        )
    }

}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ProjectPage);