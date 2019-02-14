import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function LinkTab(props) {
    return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
  }

class customerFile extends Component {

    render () {
        return(
            <div >
          <AppBar position="static">
            <Tabs variant="fullWidth">
              <LinkTab label="Page One" href="page1" />
              <LinkTab label="Page Two" href="page2" />
              <LinkTab label="Page Three" href="page3" />
            </Tabs>
          </AppBar>
          {/* {value === 0 && <TabContainer>Page One</TabContainer>}
          {value === 1 && <TabContainer>Page Two</TabContainer>}
          {value === 2 && <TabContainer>Page Three</TabContainer>} */}
        </div>
        );
        
    }



}

const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
  }
export default connect(mapStateToProps)(customerFile);