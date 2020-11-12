import React, { Component, createContext } from 'react';
import { detailProduct, storeProducts } from './data';

const ProductContext = createContext();
// provider
//consumer

class ProductProvider extends Component {
    // for all the products started
    state = {
        products: [], /// 1.> use state er motoi kicui thakbo na. khali array.  
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubtotal: 0,
        cartTax: 0,
        cartTotal: 0,

    };

    componentDidMount = () => {
        this.setProducts(); // 2. use state er second function
    }

    setProducts = () => {
        let tempProducts = [];  // 3. copy kormu tai khali array rakhlam. 
        storeProducts.forEach(item => {  /// 4. prottek ta item er jonno akta akta kore item nie single item e rakhlam
            const singleItem = { ...item }; // 5.  cope object item to single item
            tempProducts = [...tempProducts, singleItem]; // 6.  single item er sob + ager temporary product copy korlam
        });

        this.setState(() => {
            return { products: tempProducts }; // 7. set state e sob set korlam 
        })
    }
 // for all the product list ended 

 /// getting individual items to another page
    getItem = (id) =>{
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(()=>{
            return {detailProduct: product}
        })
    }
// getting individual items to another page ended 

// adding items to the cart 
    addToCart = (id) => {
        const tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() => {
            return {
              products: [...tempProducts],
              cart: [...this.state.cart, product],
              detailProduct: { ...product }
            };
          }, this.addTotals);
        };

    /// for modal  oppugning
    openModal = id =>{
        const product = this.getItem(id);
        this.setState(()=>{
            return {modalProduct: product, modalOpen: true}
        })
    }

    // closing modal
    closeModal = () =>{
        this.setState(()=>{
            return{modalOpen:false}
        })
    }

    //string cart:>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 
    // increment 
    increment = (id) =>{
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count + 1;
        product.total = product.total * product.price;

        this.setState(()=>{return {cart: [...tempCart]}},()=>{this.addTotals()})
    }

    // decrement 
    decrement = (id) =>{
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count - 1;

        if(product.count === 0){
            this.removeItem(id);
        }
        else{
            product.total = product.count * product.price;
            this.setState(()=>{return {cart: [...tempCart]}},()=>{this.addTotals()})
        }
    }
    // remove item
    removeItem = (id) => {
       let tempProducts = [...this.state.products];
       let tempCart = [...this.state.cart];

       tempCart = tempCart.filter(item => item.id !== id);
       let index = tempProducts.indexOf(this.getItem(id));
       let removeProduct = tempProducts[index];
       removeProduct.inCart = false;
       removeProduct.count = 0;
       removeProduct.total = 0;

       this.setState(()=>{
           return {
               cart: [...tempCart],
               product: [tempProducts]
           };
       },
       ()=>{
           this.addTotals();
       }
       )
    };
 // clear cart 
 clearCart = () => {
     this.setState(
         ()=>{
         return {cart: []};
         },
         ()=>{
             this.setProducts();
             this.addTotals();
         }
     );
 }

 // total cart 
 addTotals = () => {
     let subTotal = 0;
     this.state.cart.map(item => (subTotal += item.total));
     const tempTax  = subTotal * 0.1;
     const tax = parseFloat(tempTax.toFixed(2));
     const total = subTotal + tax;
     this.setState(()=>{
         return {
             cartSubtotal: subTotal,
             cartTax: tax,
             cartTotal: total
         };
     })
 }
 
    render() {
        return (
            <ProductContext.Provider value={
                {
                    ...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart,
                    openModal: this.openModal,
                    closeModal: this.closeModal,

                    increment: this.increment,
                    decrement: this.decrement,
                    removeItem: this.removeItem,
                    clearCart: this.clearCart
                }
            }>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer }