import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import Product from './Product';
import Tittle from './Tittle';

class ProductList extends Component {

    render() {

        return (
            <div className="py-5">
                <div className="container">
                    <Tittle name="Our" title="Products" />
                    <div className="row">
                        <ProductConsumer>
                            {
                                value=>{
                               return value.products.map(product=>{
                                   return <Product product={product} key={product.id}></Product>
                               })
                                }
                            }
                        </ProductConsumer>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductList;