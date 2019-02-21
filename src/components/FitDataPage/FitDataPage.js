import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
// import Button from '@material-ui/core/Button';

class FitDataPage extends Component {


    //may not need this page..
    render() {
        return (
            <div className="fit_main">
                <Card className="fit_card">
                    <div className="fit_text">
                    <h1>Fit Data:</h1>
                    </div>
                    <div className="fit_card_img">
                    <img src="/images/bikecadd.png" alt="bikecadd"/>
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
export default connect(mapStateToProps)(FitDataPage);