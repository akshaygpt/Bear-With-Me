import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

import Card from '../../base-components/Card/Card';
import HomeButtons from '../../components/HomeButtons/HomeButtons';
import Search from '../../base-components/Search/Search';

import './homePage.scss';

class HomePage extends Component {

    componentDidMount(){

    }

    render(){
        const {getBeersList, beersList} = this.props;

        return(
            <div className='homePage'>
                <div>
                    <div className='homePage-menu'>
                        <HomeButtons getBeersList={getBeersList}/>
                    </div>
                    <div className='homePage-searchsection'>
                        <div className='homePage-title'>The Beer Bank</div>
                        <div className='homePage-subtitle'>Find your favourite beer here</div>
                        <Search />
                    </div>
                    <div className='homePage-beers'>
                        {this.renderBeerCards(beersList)}
                    </div>
                </div>
            </div>
        );
    }

    renderBeerCards(list){
        let beerCards = list.map(
            (item, index) => <Card item={item} key={index}/>
        );
        return beerCards;
    }
}

export default HomePage;
