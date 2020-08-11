import React, { Component } from 'react';
import './App.scss';
import Product from './components/Product.js';
import Store from './components/Store.js';
import Iphone from './components/Iphone.js';

class App extends Component {
  render() {
    return (
      <main className="app">
        <h1>Hello</h1>
        <Store />
        <h2>iPhone</h2>
        <Iphone />
        <Product />

      </main>
    );
  }
}

export default App;
