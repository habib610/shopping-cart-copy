import React from 'react';
import { Link } from 'react-router-dom';

const CartTotal = ({value}) => {
    const {cartTotal, cartTax, cartSubtotal, clearCart} = value;
    return (
        <div>
            <div className="container ">
                <div className="row d-flex align-items-center">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right ">
                        <Link to="/">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={()=> clearCart()}>Clear cart</button>
                        </Link>
                        <h5>
                            <span className="text-title">sub-total: </span> 
                            <strong>{cartSubtotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">Tax: </span> 
                            <strong>{cartTax}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">Total: </span> 
                            <strong>{cartTotal}</strong>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartTotal;