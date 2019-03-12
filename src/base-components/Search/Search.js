import React, {Component} from 'react';

import './search.scss';

export default class Search extends Component {
    state = {
        value: ''
    }

    render(){
        return(
            <div className='search'>
                <input
                    placeholder='Search for beer name'
                    className='searchInput'
                    onKeyUp={() => {this.searchBeers()}}
                    onChange={(e) => this.updateInput(e)}
                />
            </div>
        )
    }

    searchBeers(){
        const {value} = this.state;
        this.props.getBeersList(value);
    }

    updateInput(e){
        this.setState({value: e.target.value});
    }
}
