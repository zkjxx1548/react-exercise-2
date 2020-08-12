import React from 'react';
import './addToCart.css';

class AddToCart extends React.Component {
  render() {
    return (
      <div className="buy">
        <span>{this.props.product.price}</span>
        <button onClick={() => this.props.onCart()}>add to cart</button>
      </div>);
  }
}

export default AddToCart;