import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';

class Details extends Component {

    render() {
        return (
            <div>
                <h1>Hello from Details</h1>
                <ProductConsumer>
                    {value => {
                        const { id, img, price, company, info, title, inCart } = value.detailProduct;
                        return (
                            <div className="container py-5">
                                <div className="row">
                                    <div className="col-10 mx-auto text-center text-blue my-5">
                                        <h1>{title}</h1>
                                    </div>
                                </div>
                                {/* tittle || */}
                                <div className="row">
                                    {/* product img  */}
                                    <div className="col-10 mx-auto col-md-6 my-3"><img src={img} alt="" /></div>
                                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                        {/* product text  */}
                                        <h2>model: {title}</h2>
                                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                            made by: <span className="text-uppercase">{company}</span>
                                        </h4>
                                        <h4 className="text-blue"><strong><span>$</span>{price}</strong></h4>
                                        <p className="text-capitalize mb-0 mt-3">Some About Product</p>
                                        <p className="text-muted">{info}</p>

                                        <Link to="/"> <button className="btn btn-outline-primary mr-4">Back to Home</button></Link>

                                        <button className="btn btn-outline-warning" disabled={inCart ? true : false}  onClick={() => {
                                value.addToCart(id);
                                value.openModal(id);
                            }} >{inCart ? "inCart" : "Add to Cart"}</button>
                                        
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    }

                </ProductConsumer>
            </div>
        );
    }
}

export default Details;