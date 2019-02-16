import React, {Component} from 'react';
import { connect } from 'react-redux';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';


class AdminRow extends Component {
    editCust = () => {
        this.props.history.push(`updatecustomer/${this.props.client.id}`);
      }

   
// breakdown of customer info in the table from admin page
render() {
    return(
        <TableRow>
                <TableCell>{this.props.client.customers_full_name}</TableCell>
                <TableCell>{this.props.client.pro_nouns}</TableCell>
                <TableCell>{this.props.client.email}</TableCell>
                <TableCell>{this.props.client.phone_number}</TableCell>
                <TableCell> <Button variant="contained" 
                onClick={this.editCust}
                color="primary">
                Edit
                </Button>
            </TableCell>
        </TableRow>
    )
}
}   

const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
  }
  // this allows us to use <App /> in index.js
  export default connect(mapStateToProps)(AdminRow);