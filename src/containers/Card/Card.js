import React, {Component} from 'react';
import classnames from 'classnames';

import {addToFavorites, removeFromFavorites} from '../../redux/actions';

import './card.scss';

export default class Card extends Component {

    render(){
        const {item, isFavorite, toggleFavorite} = this.props;
        const id = item.id;

        return(
            <div className='card'>
                <div className='card-fav-btn'>
                    <span
                        className={classnames('icon', isFavorite ? 'icon-star-full' : 'icon-star-empty')}
                        onClick={() => this.toggleFavorite(id, isFavorite)}
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
            </div>
        )
    }

    toggleFavorite(id, isFavorite){
        if(!isFavorite){
            this.props.dispatch(addToFavorites(id));
        } else {
            this.props.dispatch(removeFromFavorites(id));
        }
    }
}
