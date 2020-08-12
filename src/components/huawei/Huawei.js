import React from 'react';
import Phone from '../phone/Phone';

class Huawei extends React.Component {
  render() {
    return (
      <div>
        <h2>HUAWEI</h2>
        <div className="phones">
          <Phone products={this.props.products} onCart={this.props.getCount} />
        </div>
      </div>
    );
  }
}
export default Huawei;
