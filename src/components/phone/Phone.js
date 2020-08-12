import React from 'react';
import './phone.css';
import AddToCart from '../addToCart/AddToCart.js';

class Phone extends React.Component {
  render() {
    return this.props.products.map(element => (<div className="iphone">
      <h3>{element.name}</h3>
      <img src={require("../../assets/product_image_placeholder.png")} alt="no internet"/>
      <AddToCart product={element} onCart={this.props.onCart}/>
    </div>));
  }
}

export default Phone;
