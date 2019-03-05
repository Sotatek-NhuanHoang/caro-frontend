import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import CaroBoard from './CaroBoard';

import './MatchScreen.scss';


class MatchScreen extends PureComponent {

    render() {
        return (
            <div id="match-screen">
                <CaroBoard />

                {/* Users info */}
                <div className="user-container">

                </div>
            </div>
        );
    }
}


const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
 
});

export default connect(mapStateToProps, mapDispatchToProps)(MatchScreen);
