import React, {Component} from 'react';
import classnames from 'classnames';

import {addToFavorites, removeFromFavorites, showBeerDetailsModal} from '../../redux/actions';
import DetailModal from '../DetailModal';

import './card.scss';

export default class Card extends Component {

    render(){
        const {item, isFavorite, toggleFavorite, beerId} = this.props;
        const id = item.id;

        return(
            <div className='beercard' onClick={() => this.onCardClick(item.id)}>
                <div className='card-fav-btn'>
                    <span
                        className={classnames('icon', isFavorite ? 'icon-star-full' : 'icon-star-empty')}
                        onClick={(e) => this.toggleFavorite(e, id, isFavorite)}
                    />
                </div>
                <div className='card-image'>
                    <img src={item.image_url} alt='beer'/>
                </div>
                <div className='card-name'>
                    {item.name}
                </div>
                <div className='card-tagline'>
                    {item.tagline}
                </div>
                {(id === beerId) && <DetailModal/>}
            </div>
        )
    }

    onCardClick(id){
        const {dispatch} = this.props;
        dispatch(showBeerDetailsModal(id));
    }

    toggleFavorite(e, id, isFavorite){
        const {dispatch} = this.props;
        e.stopPropagation();

        if(!isFavorite){
            dispatch(addToFavorites(id));
        } else {
            dispatch(removeFromFavorites(id));
        }
    }
}
