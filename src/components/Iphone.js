import React from 'react';
import fetchData from '../async/myfetch.js';
import './iphone.css';
import AddToCart from './addToCart/AddToCart.js';

class Iphone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    fetchData().then((res) => {
      this.setState({
        products: res,
      });
    });
  }

  render() {
    console.log(this.props);
    const iphoneArray = this.state.products.filter(product => product.category === 'iPhone');
    return iphoneArray.map(element => (<div className="iphone">
      <h3>{element.name}</h3>
      <img src={require("../assets/product_image_placeholder.png")} alt="no internet"/>
      <AddToCart product={element} onCart={this.props.onCart}/>
    </div>));
  }
}

export default Iphone;