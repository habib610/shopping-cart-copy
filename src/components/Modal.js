import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';

class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    (value)=>{
                        const {modalOpen, closeModal} = value;
                        const {img, title, price} = value.modalProduct;
                        
                        if(!modalOpen) {
                            return null;
                        }
                        else{
                          return ( <div  className="container-fluid modalContainer">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-6 text-center text-capitalize p-5">
                                        <h5>item added to the card</h5>
                                        <img src={img}  className="img-fluid" alt=""/>
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">Price ${price}</h5>
                                        <Link to="/">
                                            <button className="btn btn-outline-primary mx-2" onClick={()=> closeModal()}>Continue Shopping</button>
                                        </Link>
                                        <Link to="/cart">
                                            <button className="btn btn-outline-warning mx-2" onClick={()=> closeModal()}>Go to cart</button>
                                        </Link>
                                    </div>
                                </div>
                          </div>)
                        }
                    }
                }
            </ProductConsumer>
        );
    }
}

export default Modal;