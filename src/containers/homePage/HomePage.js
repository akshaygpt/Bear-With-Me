import React, {Component} from 'react';

import {Button} from 'react-bootstrap';

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
        let beerCards = '';
        list.map((item, index) => {
            return beerCards+=`<div>${item.name}</div>`;
        });
        return beerCards;
    }
}

export default HomePage;
