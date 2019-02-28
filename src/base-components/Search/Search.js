import React, {Component} from 'react';

export default class Search extends Component {
    state = {
        value: ''
    }

    render(){
        return(
            <div className='search'>
                <input
                    placeholder='Search...'
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
