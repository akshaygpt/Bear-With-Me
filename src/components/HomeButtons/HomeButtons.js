import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

import './homeButtons.scss';

export default class HomeButtons extends Component {
    render(){
        const {getBeersList} = this.props;

        return(
            <div className='homeButtons'>
                <Button
                    onClick={getBeersList}
                    className='homeButtons-homebtn'
                >
                    Home
                </Button>
                <Button
                    onClick={() => {}}
                    className='homeButtons-favbtn'
                >
                    Fav
                </Button>
            </div>
        )
    }
}
