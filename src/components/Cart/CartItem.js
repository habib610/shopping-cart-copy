import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CartItem = ({ value, item }) => {
    const { id, price, title, img, total, count } = item;
    const { increment, decrement, removeItem } = value;
    return (
        <div className="row text-center my-2 text-capitalize">
            <div className="col-10 mx-auto mb-2 col-lg-2">
                <img src={img} style={{ width: '5rem', height: "5rem" }} alt="" className="img-fluid" />
            </div>
            <div className="col-10 mx-auto mb-2 col-lg-2">
                <span className="d-lg-none">Product:</span> {title}
            </div>
            <div className="col-10 mx-auto mb-2 col-lg-2">
                <span className="d-lg-none">Price:</span> {price}
            </div>
            <div className="col-10 mx-auto mb-2 col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <span className="btn btn-outline-dark mx-1" onClick={() => decrement(id)}> <FontAwesomeIcon icon = {faMinus}/> </span>
                    <span className="btn btn-outline-info mx-1">{count}</span>
                    <span className="btn btn-outline-success mx-1" onClick={() => increment(id)}><FontAwesomeIcon icon = {faPlus}/></span>
                </div>
            </div>
            <div className="col-10 mx-auto mb-2 col-lg-2">
                <button className="btn btn-outline-warning " onClick={()=> removeItem(id)}><FontAwesomeIcon icon = {faTrash} /></button>
            </div>
            <div className="col-10 mx-auto mb-2 col-lg-2">
                <span className="d-lg-none">Item total:</span>$ {total}
            </div>
        </div>
    );
};

export default CartItem;