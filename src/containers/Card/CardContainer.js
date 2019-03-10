import React, {Component} from 'react';
import {connect} from 'react-redux';

import {favoritesSelector, modalBeerIdSelector} from '../../redux/selectors';
import {addToFavorites, removeFromFavorites} from '../../redux/actions';

import Card from './Card';

class CardContainer extends Component {
    render(){
        const {favoritesList, item, dispatch, beerId} = this.props;
        const isFavorite = !!favoritesList.includes(item.id);

        return(
            <Card
                isFavorite={isFavorite}
                item={item}
                dispatch={dispatch}
                beerId={beerId}
            />
        );
    }
}

const select = state => ({
    favoritesList: favoritesSelector(state),
    beerId: modalBeerIdSelector(state)
});

export default connect(
    select
)(CardContainer);
