import React from 'react';
import fetchData from '../async/myfetch.js';
import './iphone.css';

class Huawei extends React.Component {
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
    const phoneArray = this.state.products.filter(product => product.category === 'HUAWEI');
    return phoneArray.map(element => (<div className="iphone">
      <h3>{element.name}</h3>
      <img src="../assets/product_image_placeholder.png" />
      <div className="buy">
        <span>{element.price}</span>
        <button>add to cart</button>
      </div>
    </div>));
  }
}
export default Huawei;