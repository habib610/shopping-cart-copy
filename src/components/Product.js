import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ProductConsumer } from '../context';

class Product extends Component {

    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <div className="col-9 mx-auto col-md-6 col-lg-4 my-3">
                <div className="card">
                    <ProductConsumer>
                        {(value)=>(<div className="img-container p-5" onClick={() => value.handleDetail(id)}>
                            <Link to="/details">
                                <img src={img} alt="product img" className="card-img-top" />
                            </Link>
                            <button className="cart-btn" disabled={inCart ? true : false} onClick={() => {
                                value.addToCart(id);
                                value.openModal(id);
                            }}>
                                {inCart ? <p className="text-capitalize mb-0"  >in cart</p> : <FontAwesomeIcon icon={faCartPlus} />}
                            </button>
                        </div>)}
                    </ProductConsumer>


                    <div className="card-footer d-flex justify-content-between">
                        <p className="mb-0"> {title} </p>
                        <h5 className="align-self-center text-blue mb-0">$ <span className="mr-1">{price}</span></h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        price: PropTypes.number,
        title: PropTypes.string,
        inCart: PropTypes.bool,
    }).isRequired
};