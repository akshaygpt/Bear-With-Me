import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';
import classnames from 'classnames';

import {hideBeerDetailsModal} from '../../redux/actions';

import './detailModal.scss';

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
                    <span className='icon icon-cross' onClick={e => this.onHideHandler(e)}></span>
                </Modal.Header>
                <Modal.Body>
                    <div className={classnames('beer-details-content', 'row')}>
                        <div className={classnames('beer-details-image', 'col-sm-3')}>
                            <img src={data.image_url} />
                        </div>
                        <div className={classnames('beer-details-text', 'col-sm-9')}>
                            <div className={classnames('beer-details-name')}>
                                {data.name}
                            </div>
                            <div className={classnames('beer-details-tagline')}>
                                {data.tagline}
                            </div>
                            <div className='dark-line' />
                            <div className={classnames('beer-details-extras')}>
                                <div className='extras-section'>
                                    <span className='extras-name'>IBU:</span>
                                    <span className='extras-value'>{data.ibu}</span>
                                </div>
                                <div className='extras-section'>
                                    <span className='extras-name'>ABV:</span>
                                    <span className='extras-value'>{data.abv}</span>
                                </div>
                                <div className='extras-section'>
                                    <span className='extras-name'>EBC:</span>
                                    <span className='extras-value'>{data.ebc}</span>
                                </div>
                            </div>
                            <div className={classnames('beer-details-desc')}>
                                {data.description}
                            </div>
                            <div className={classnames('beer-details-pairings')}>
                                <div className='pairings-text'>Best served with:</div>
                                <ul>{this.renderBestServedWith(food_pairing)}</ul>
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
                return <li key={index} className='pairings-item'>{item}</li>;
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
