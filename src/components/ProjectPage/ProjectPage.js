import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';



class ProjectPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customer_name: '',
            
            custome: false,
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
                                id="outlined-height"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Project Name"
                            />
                            <TextField
                                id="outlined-height"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Brand"
                            />
                            <TextField
                                id="outlined-height"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Deep Custom?"
                            />
                            <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                placeholder="   This field's intended use is to quickly take in the customers personal vision and description of the bike the with to have built. Such info would include paint color themes or desired use of bike, "
                                multiline rows="10"
                                fullWidth
                            />
                            <div className="file_text">
                                <h3>Customer Information</h3>
                            </div>
                            <TextField
                                id="outlined-height"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Height"
                            />
                            <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Inseam"
                            />
                            <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Torso"
                            />
                            <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Preceived Flexability"
                                placeholder="1-10"
                            />
                            <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Reach"
                            />
                            <div className="file_text">
                                <h3>Frame information</h3>

                            </div>
                            <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Head Tube Angle/Size"
                            />
                             <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Steerer Tube"
                            />
                            <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Top Tube Angle/Length"
                            />
                             <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Down Tube Angle/Length"
                            />
                             <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Seat Tube Angle/Length"
                            />
                             <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Botom Bracket"
                            />
                             <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Seat Stays"
                            />
                             <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Chain Stays"
                            />
                             <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Dropout"
                            />
                             <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Brake Type"
                            />
                             <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Wheel Size"
                            />
                             <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Tire Clearance"
                            />
                            
                        </form>
                        <Button variant="outlined"
                            color="secondary"
                            style={{ margin: 20, marginTop: 10 }}
                            onClick={this.projectIn}>
                            Add New Project
                        </Button>
                    </div>
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