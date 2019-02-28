import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

import Card from '../../components/Card/Card';

class HomePage extends Component {

    componentDidMount(){

    }

    render(){
        const {getBeersList, beersList} = this.props;

        return(
            <div>
                <Button
                    onClick={() => getBeersList()}
                >
                    Fetch beers
                </Button>
                <div>
                    {this.renderBeerCards(beersList)}
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
