import React, {Component} from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'
const styles = {
  card: {
    minWidth: 275,
    margin: 20,
    padding: 50,
  },
};
class Admin extends Component {
  componentDidMount() {
    this.props.dispatch({type: 'FETCH_CUSTOMER'});
  }

    render(){
      return(
        <div>
          <Card>
     <div>
       <h1>Customers</h1>
       </div>   {/* {JSON.stringify(this.props.reduxStore.addCust)} */}
  <Paper>
      <Table className="">
        <TableHead>
          <TableRow>
            <TableCell>Customer Name</TableCell>
            <TableCell align="right">Pronouns</TableCell>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">Phone Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

              {this.props.reduxStore.addCust.map((client, i) =>{
                return(<TableRow key={i}>
                <TableCell>{client.customers_full_name}</TableCell>
                <TableCell>{client.pro_nouns}</TableCell>
                <TableCell>{client.email}</TableCell>
                <TableCell>{client.phone_number}</TableCell>
                </TableRow>)
              })}
              
            
        </TableBody>
      </Table>
    </Paper>
    </Card>
    </div>
    
    )
    }

}
const mapStateToProps = reduxStore => {
  return { reduxStore: reduxStore };
}
// this allows us to use <App /> in index.js
export default withStyles(styles)(connect(mapStateToProps)(Admin));

