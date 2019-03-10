import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

import Card from '../Card';
import HomeButtons from '../../components/HomeButtons/HomeButtons';
import Search from '../../base-components/Search/Search';

import './homePage.scss';

class HomePage extends Component {

    componentDidMount(){

    }

    render(){
        const {getBeersList, beersList, favoritesList} = this.props;

        return(
            <div className='homePage'>
                <div>
                    <div className='homePage-menu'>
                        <HomeButtons getBeersList={getBeersList}/>
                    </div>
                    <div className='homePage-searchsection'>
                        <div className='homePage-title'>The Beer Bank</div>
                        <div className='homePage-subtitle'>Find your favourite beer here</div>
                        <Search getBeersList={getBeersList}/>
                    </div>
                    <div className='homePage-beers'>
                        {this.renderCards(beersList)}
                    </div>
                </div>
            </div>
        );
    }

    renderCards(list){
        const {favoritesList, beerId} = this.props;

        let beerCards = list.map(
            (item, index) => <Card item={item} key={index} beerId={beerId}/>
        );
        return beerCards;
    }
}

export default HomePage;
