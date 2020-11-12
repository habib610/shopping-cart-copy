import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {  Route, Switch } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Details from './components/Details';
import ProductList from './components/ProductList';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <Switch>
          <Route exact  path="/" component={ProductList}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route  component={NotFound}></Route>
        </Switch>
        <Modal/>
      </React.Fragment>
    );
  }
}

export default App;