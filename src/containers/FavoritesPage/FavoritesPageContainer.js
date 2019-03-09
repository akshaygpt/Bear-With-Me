import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
    getBeersThunk
} from '../../redux/actions';
import {beersSelector, favoritesSelector} from '../../redux/selectors';
import FavoritesPage from './FavoritesPage';

class FavoritesPageContainer extends Component {

    componentDidMount(){
        this.props.dispatch(getBeersThunk());
    }

    render(){
        const {favoritesList, beersList} = this.props;
        const favoriteBeers = beersList.filter(
            beer => !!favoritesList.includes(beer.id)
        );

        return(
            <FavoritesPage
                {...this.props}
                getBeersList={(filter) => this.getBeersList(filter)}
                favoriteBeers={favoriteBeers}
            />
        );
    }

    getBeersList(filter){
        this.props.dispatch(getBeersThunk(filter));
    }
}

const select = state => ({
    beersList: beersSelector(state),
    favoritesList: favoritesSelector(state)
});

export default connect(
    select
)(FavoritesPageContainer);
