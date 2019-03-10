import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';
import classnames from 'classnames';

import {hideBeerDetailsModal} from '../../redux/actions';

class DetailModal extends Component {
    render(){
        const {show, data} = this.props;
        const food_pairing = data && data.food_pairing;

        return(
            <Modal
                show={show}
                size='lg'
                className='beer-details-modal'
            >
                <Modal.Header>
                    <div onClick={e => this.onHideHandler(e)}>x</div>
                </Modal.Header>
                <Modal.Body>
                    <div className={classnames('beer-details-content', 'row')}>
                        <div className={classnames('beer-details-image', 'col-sm-3')}>
                            <img src={data.image_url} />
                        </div>
                        <div className={classnames('beer-details-image', 'col-sm-9')}>
                            <div className={classnames('beer-details-image')}>
                                {data.name}
                            </div>
                            <div className={classnames('beer-details-image')}>
                                {data.tagline}
                            </div>
                            <div className={classnames('beer-details-image')}>
                                {data.ibu}
                                {data.abv}
                                {data.ebc}
                            </div>
                            <div className={classnames('beer-details-image')}>
                                {data.description}
                            </div>
                            <div className={classnames('beer-details-image')}>
                                {this.renderBestServedWith(food_pairing)}
                            </div>
                        </div>
                    </div>
                    <div className={classnames('you-might-like', 'row')}></div>
                </Modal.Body>
            </Modal>
        );
    }

    renderBestServedWith(arr){
        if(Array.isArray(arr)){
            const length = arr.length;
            const servedWith = arr.map((item, index) => {
                return <div key={index}>{item}</div>;
            })
            console.log(servedWith);
            return servedWith;
        }
    }

    onHideHandler(e){
        const {dispatch} = this.props;
        e.stopPropagation();
        dispatch(hideBeerDetailsModal());
    }
}

export default DetailModal;
