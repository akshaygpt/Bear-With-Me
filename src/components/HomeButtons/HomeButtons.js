import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import classnames from 'classnames';

import './homeButtons.scss';

export default class HomeButtons extends Component {
    render(){
        const {getBeersList} = this.props;

        return(
            <div className='homeButtons'>
                <Link to='/'>
                    <Button
                        onClick={() => getBeersList('')}
                        className={classnames('nav-btn', 'homeButtons-homebtn')}
                    >
                        Home
                    </Button>
                </Link>
                <Link to='/favorites'>
                    <Button
                        onClick={() => {}}
                        className={classnames('nav-btn', 'homeButtons-favbtn')}
                    >
                        Favourite
                    </Button>
                </Link>
            </div>
        )
    }
}
