import React from 'react';
import fetchData from '../async/myfetch.js';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    fetchData().then(res => {
      this.setState({
        products: res
      });
    });

  }

  render() {
    return <div>{this.state.products[0]?.price}</div>;
  }
}
export default Product;