import React, {Component} from 'react';

import './card.scss';


export default class Card extends Component {

    render(){
        const {item} = this.props;
        // console.log(item);

        return(
            <div className='card'>
                <div className='card-fav-btn'></div>
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
}
