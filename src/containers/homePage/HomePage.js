import React, {Component} from 'react';

import Card from '../Card';
import HomeButtons from '../../components/HomeButtons/HomeButtons';
import Search from '../../base-components/Search/Search';

import './homePage.scss';

class HomePage extends Component {

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
        const {beerId} = this.props;

        let beerCards = list.map(
            (item, index) => <Card item={item} key={index} beerId={beerId}/>
        );
        return beerCards;
    }
}

export default HomePage;
