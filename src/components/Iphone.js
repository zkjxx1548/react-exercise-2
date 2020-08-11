import React from 'react';
import IphoneItem from './IphoneItem.js';
//import Product from './Product.js';
import fetchData from '../async/myfetch.js';

class Iphone extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      products: []
    });
    fetchData().then(res => {
      this.setState({
        products: res
      });
    });
  }

  render() {
    //const iphoneArray = this.state.products.filter(product => product.category === 'iPhone');
    return this.state.products.map(element => (<div>
      <h3>{element.name}</h3>
      <img src="../assets/product_image_placeholder.png" />
      <span>{element.price}</span>
      <button>add to cart</button>
    </div>));
  }
}
export default Iphone;