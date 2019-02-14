import React, {Component} from 'react';
import { connect } from 'react-redux';
import AddCustomerBtn from '../AddCustomerBtn/AddCustomerBtn';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
class UserPage extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div>
        <h1 id="welcome">
          {/* Welcome, {props.user.username}! */}
    </h1>
        {/* <p>Your ID is: {props.user.id}</p> */}
    <AddCustomerBtn className="add-customer" />
        {/* <button className="add-new-cust">Add New Customer</button> */}
        <p>Display open projects on page with cards, here.</p>
      </div>
    )
  }









}
// const UserPage = (props) => (
//   <div>
//     <h1 id="welcome">
//       Welcome, { props.user.username }!
//     </h1>
//     {/* <p>Your ID is: {props.user.id}</p>
//     <LogOutButton className="log-in" /> */}
//     <button className="add-new-cust">Add New Customer</button>
//     <p>Display open projects on page with cards, here.</p>
//   </div>
// );


// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
