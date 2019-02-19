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
                <Card className="file_card">
                    <div className="cust_info">
                    <h1>Project Page</h1>
                    <h2>Customer: {this.state.customer_name}'s</h2>
                    <h3>Build Information</h3>
                    </div>
                    <div className="file_text">
                    <form>
                        <TextField
                            id="outlined-name"
                            margin="normal"
                            variant="outlined"
                            placeholder="   This field's intended use is to quickly take in the customers personal vision and description of the bike the with to have built. Such info would be paint color themes or desired use of bike, "
                            multiline rows="10"
                            fullWidth
                        />
                    </form>
                    </div>
                    <Button variant="outlined"
                        color="secondary"
                        style={{ margin: 20, marginTop: 10 }}
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