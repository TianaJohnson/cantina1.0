import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ProjectRow from './ProjectPageRows';
// import Select from '@material-ui/core/Select';
// import OutlinedInput from '@material-ui/core/OutlinedInput';

class ProjectPage extends Component {

    //client_id: this.props.match.params.id,


    componentDidMount() {
        // clear any previously selected project
        this.props.dispatch({ type: 'CLEAR_PROJECT' });
        // get the project we want
        this.props.dispatch({ type: 'FETCH_PROJECT', payload: {id: this.props.match.params.id} });
        this.custName();
    }
    //Send project info to saga
    projectIn = (event) => {
        console.log('project In');
        const action = {
            type: 'ADD_PROJECT',
            payload: this.props.reduxStore.project.projectReducer,
        };
        console.log('sending to project saga')
        this.props.dispatch(action);
        this.setState({
            customer_name: '',
            project_name: '',
            brand: '',
            deep_custom: false,
            project_desc: '',
            cust_height: '',
            cust_inseam: '',
            cust_torso: '',
            cust_flex: 0,
            cust_reach: '',
            head_tube: '',
            steerer_tube: '',
            down_tube: '',
            seat_tube: '',
            bottom_bracket: '',
            seat_stays: '',
            chain_stays: '',
            drop_outs: '',
            brake_type: '',
            wheel_size: '',
            tire_clearance: '',
            progress_status: '',
            date_created: new Date(),
            projected_due_date: '',
            client_id: this.props.match.params.id,
        })
        this.props.history.push('/home');
    }



    // make axios request to /intake/${this.props.match.params.id}
    //To display customers name on the file attached to them
    custName = () => {
        console.log('Get axios ');
        axios({
            method: 'GET',
            url: `/intake/${this.props.match.params.id}`
        }).then((response) => {
            console.log('Get', response);
            // this.setState({
            //     customer_name: response.data.customers_full_name,
            // });
        });
    }

    handleChange = (key) => (event) => {
        const action = {
            type: 'SET_PROJECT_PROPERTY',
            payload: {key: key, value: event.target.value},
        };
        console.log('sending to project saga')
        this.props.dispatch(action);
    }

    // input onChange handles
    handleChangeProjectName = (event) => {
        console.log('name')
        this.setState({
            project_name: event.target.value,
        })
    }
    handleChangeBrand = (event) => {
        console.log('brand')
        this.setState({
            brand: event.target.value,
        })
    }
    // this may not work..
    // boolean state set
    handleChangeDeepCustom = (event) => {
        this.setState({
            deep_custom: event.target.value,
        });
    }
    handleChangeDueDate = (event) => {
        this.setState({
            projected_due_date: event.target.value,
        });
    }
    handleChangeProjectStatus = (event) => {
        this.setState({
            progress_status: event.target.value,
        });
    }
    handleChangeProjectDesc = (event) => {
        this.setState({
            project_desc: event.target.value,
        });
    }
    handleChangeCustHeight = (event) => {
        this.setState({
            cust_height: event.target.value,
        });
    }
    handleChangeCustInseam = (event) => {
        this.setState({
            cust_inseam: event.target.value,
        });
    }
    handleChangeCustTorso = (event) => {
        this.setState({
            cust_torso: event.target.value,
        });
    }
    handleChangeCustFelx = (event) => {
        this.setState({
            cust_flex: event.target.value,
        });
    }
    handleChangeCustReach = (event) => {
        this.setState({
            cust_reach: event.target.value,
        });
    }
    handleChangeHeadTube = (event) => {
        this.setState({
            head_tube: event.target.value,
        });
    }
    handleChangeSteererTube = (event) => {
        this.setState({
            steerer_tube: event.target.value,
        });
    }
    handleChangeTopTube = (event) => {
        this.setState({
            top_tube: event.target.value,
        });
    }
    handleChangeDownTube = (event) => {
        this.setState({
            down_tube: event.target.value,
        });
    }
    handleChangeSeatTube = (event) => {
        this.setState({
            seat_tube: event.target.value,
        });
    }
    handleChangeBottomBracket = (event) => {
        this.setState({
            bottom_bracket: event.target.value,
        });
    }
    handleChangeSeatStays = (event) => {
        this.setState({
            seat_stays: event.target.value,
        });
    }
    handleChangeChainStays = (event) => {
        this.setState({
            chain_stays: event.target.value,
        });
    }
    handleChangeDropOuts = (event) => {
        this.setState({
            drop_outs: event.target.value,
        });
    }
    handleChangeBrakeType = (event) => {
        this.setState({
            brake_type: event.target.value,
        });
    }
    handleChangeWheelSize = (event) => {
        this.setState({
            wheel_size: event.target.value,
        });
    }
    handleChangeTireClear = (event) => {
        this.setState({
            tire_clearance: event.target.value,
        });
    }




    //Project main page
    render() {
        const project = this.props.reduxStore.project.projectReducer;
        return (
            <div className="project_page">
                <Card className="file_card">
                    <div className="cust_info">
                        <h1>Project Page</h1>
                        <h2>Customer: {project.customers_full_name}'s</h2>
                        {JSON.stringify(project)}
                        
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
                                value={project.project_name}
                                onChange={this.handleChange('project_name')}
                            />
                            <TextField
                                id="outlined-height"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Brand"
                                value={project.brand}
                                onChange={this.handleChangeBrand}
                            />
                            <TextField
                                style={{ margin: 10 }}
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                placeholder="false"
                                label="Deep Custom"
                                value={project.deep_custome}
                                onChange={this.handleChangeDeepCustom}
                            />
                            <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Date Due"
                                value={project.projected_due_date}
                                onChange={this.handleChangeDueDate}
                            />
                            <TextField
                                id="outlined-height"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Status"
                                value={project.progress_status}
                                onChange={this.handleChangeProgressStatus}
                            />
                            {/* <Select
                                native
                                value={project.deep_custom}
                                style={{ margin: 10 }}
                                onChange={this.handleChangeDeepCustome}
                                input={
                                    <OutlinedInput
                                        name="Deep Custom"
                                        labelWidth="normal"
                                        id="outlined-age-native-simple"
                                    />
                                }
                            >
                                <option>False</option>
                                <option>True</option>

                            </Select> */}

                            <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                placeholder="   This field's intended use is to quickly take in the customers personal vision and description of the bike the with to have built. Such info would include paint color themes or desired use of bike, "
                                multiline rows="10"
                                fullWidth
                                value={project.project_desc}
                                onChange={this.handleChangeProjectDesc}
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
                                value={project.cust_height}
                                onChange={this.handleChangeCustHeight}
                            />
                            <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Inseam"
                                value={project.cust_inseam}
                                onChange={this.handleChangeCustInseam}
                            />
                            <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Torso"
                                value={project.cust_torso}
                                onChange={this.handleChangeCustTorso}
                            />
                            <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Preceived Flexability"
                                placeholder="1-10"
                                value={project.cust_flex}
                                onChange={this.handleChangeCustFelx}
                            />
                            <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Reach"
                                value={project.cust_reach}
                                onChange={this.handleChangeCustReach}
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
                                value={project.head_tube}
                                onChange={this.handleChangeHeadTube}
                            />
                            <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Steerer Tube"
                                value={project.steerer_tube}
                                onChange={this.handleChangeSteererTube}
                            />
                            <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Top Tube Angle/Length"
                                value={project.top_tube}
                                onChange={this.handleChangeTopTube}
                            />
                            <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Down Tube Angle/Length"
                                value={project.down_tube}
                                onChange={this.handleChangeDownTube}
                            />
                            <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Seat Tube Angle/Length"
                                value={project.seat_tube}
                                onChange={this.handleChangeSeatTube}
                            />
                            <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Botom Bracket"
                                value={project.bottom_bracket}
                                onChange={this.handleChangeBottomBracket}
                            />
                            <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Seat Stays"
                                value={project.seat_stays}
                                onChange={this.handleChangeSeatStays}
                            />
                            <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Chain Stays"
                                value={project.chain_stays}
                                onChange={this.handleChangeChainStays}
                            />
                            <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Dropout"
                                value={project.drop_outs}
                                onChange={this.handleChangeDropOuts}
                            />
                            <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Brake Type"
                                value={project.brake_type}
                                onChange={this.handleChangeBrakeType}
                            />
                            <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Wheel Size"
                                value={project.wheel_size}
                                onChange={this.handleChangeWheelSize}
                            />
                            <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Tire Clearance"
                                value={project.tire_clearance}
                                onChange={this.handleChangeTireClear}
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
            </div >
        )
    }

}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ProjectPage);