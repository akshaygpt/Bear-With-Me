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
                getBeersList={(filter) => this.getBeersList(filter)}
                beersList={beersList}
            />
        );
    }

    getBeersList(filter){
        this.props.dispatch(getBeersThunk(filter));
    }
}

const select = state => ({
    beersList: beersSelector(state)
});

export default connect(
    select
)(HomePageContainer);
