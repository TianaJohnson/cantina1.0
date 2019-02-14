import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProjectPage extends Component {

    render(){
        return(
            <div className="project_main">
            <h1>Project Page</h1>
            </div>
        )
    }

}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
  }
  
  // this allows us to use <App /> in index.js
  export default connect(mapStateToProps)(ProjectPage);