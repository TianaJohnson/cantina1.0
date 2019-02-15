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
// import Button from '@material-ui/core/Button';
import AdminRow from './AdminRow';

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
            <TableCell>Pronouns</TableCell>
            <TableCell>email</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
              {this.props.reduxStore.addCust.customerReducer.map(client =>
                <AdminRow key={client.id} history={this.props.history} client={client}/>
              )}
              
            
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

