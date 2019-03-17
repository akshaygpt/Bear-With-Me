import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import {modalBeerIdSelector} from '../../redux/selectors';
import DetailModal from './DetailModal';

class DetailModalContainer extends Component {

    state = {
        data: {}
    }

    componentDidMount(){
        const {beerId} = this.props;

        //TODO: Make it a thunk
        axios.get(`https://api.punkapi.com/v2/beers/${beerId}`)
            .then(response => {
                this.setState({
                    data: response.data[0]
                });
            })
    }

    render(){
        const {beerId, dispatch} = this.props;
        const {data} = this.state;
        const show = !!beerId;

        return(
            <DetailModal
                {...this.props}
                show={show}
                data={data}
                dispatch={dispatch}
            />
        );
    }
}

const select = state => ({
    beerId: modalBeerIdSelector(state)
});

export default connect(
    select
)(DetailModalContainer);
