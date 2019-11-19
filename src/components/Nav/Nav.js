import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

const Nav = (props) => (
  <div className="nav">
    <Link to="/home">
      <h1 className="nav-title">Bike Show</h1>
    </Link>
    <div className="nav-right">
      <Link className="nav-link" to="/home">
        {props.user.id ? 'Home' : 'Login / Register'}
      </Link>
      {props.user.id && (
        <>
          <LogOutButton className="nav-link"/>
        </>
      )}
    </div>
  </div>
);

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
