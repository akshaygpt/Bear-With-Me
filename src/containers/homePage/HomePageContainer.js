import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
    getBeersThunk
} from '../../redux/actions';
import {beersSelector} from '../../redux/selectors';
import HomePage from './HomePage';


class HomePageContainer extends Component {

    render(){
        const {beersList} = this.props;

        return(
            <HomePage
                {...this.props}
                getBeersList={() => this.getBeersList()}
                beersList={beersList}
            />
        );
    }

    getBeersList(){
        this.props.dispatch(getBeersThunk());
    }

    // getBeerInfo(){
    //     console.log(123, this.props.beersList);
    // }
}

const select = state => ({
    beersList: beersSelector(state)
});

export default connect(
    select
)(HomePageContainer);
