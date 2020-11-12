import React, { Component } from 'react';
import { ProductConsumer } from '../../context';
import Tittle from '../Tittle';
import CartColumn from './CartColumn';
import CartList from './CartList';
import CartTotal from './CartTotal';
import EmptyCart from './EmptyCart';

class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                {
                    value=>{
                        const {cart} = value;
                        if(cart.length > 0) {
                            return (
                                <>
                            <Tittle name = "your" title = "cart"/>
                            <CartColumn/>
                           <CartList value={value}/>
                           <CartTotal value={value} />
                            </>
                            )
                        }
                        else{
                            return  <EmptyCart/> 
                        }
                    }
                }
                </ProductConsumer>
                
            </section>
        );
    }
}

export default Cart;