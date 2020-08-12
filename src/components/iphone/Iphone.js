import React from 'react';
import Phone from '../phone/Phone';

class Iphone extends React.Component {
  render() {
    return (
      <div>
        <h2>iPhone</h2>
        <div className="phones">
          <Phone products={this.props.products} onCart={this.props.onCart} />
        </div>
      </div>
    );
  }
}
export default Iphone;
