import React, {Component} from 'react';

export default class Search extends Component {
    render(){
        return(
            <div className='search'>
                <input
                    placeholder='Search...'
                    className='searchInput'
                    onKeyUp={() => {}}
                />
            </div>
        )
    }
}
