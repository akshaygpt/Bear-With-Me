import React, {Component} from 'react';
import {connect} from 'react-redux';
import {favoritesSelector} from '../../redux/selectors';

import Card from './Card';

class CardContainer extends Component {
    render(){
        const {favoritesList, item} = this.props;

        const isFavorite = true;

        return(
            <Card
                isFavourite={isFavorite}
                item={item}
                toggleFavorite={() => this.toggleFavorite()}
            />
        );
    }

    toggleFavorite(){
        console.log(123);
    }
}

const select = state => ({
    favoritesList: favoritesSelector(state)
});

export default connect(
    select
)(CardContainer);
