import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

import Card from '../Card';
import HomeButtons from '../../components/HomeButtons/HomeButtons';
import Search from '../../base-components/Search/Search';

import './favoritesPage.scss';

class FavoritesPage extends Component {

    componentDidMount(){

    }

    render(){
        const {getBeersList, beersList, favoritesList, favoriteBeers} = this.props;

        return(
            <div className='favoritesPage'>
                <div>
                    <div className='favoritesPage-menu'>
                        <HomeButtons getBeersList={getBeersList}/>
                    </div>
                    <div className='favoritesPage-beers'>
                        {this.renderCards(favoriteBeers)}
                    </div>
                </div>
            </div>
        );
    }

    renderCards(list){
        const {favoritesList} = this.props;

        if(!list){
            this.noItemsMessage();
        } else {
            let beerCards = list.map(
                (item, index) => <Card item={item} key={index}/>
            );
            return beerCards;
        }
    }

    noItemsMessage(){
        return <div>{'No favorites'}</div>
    }
}

export default FavoritesPage;
