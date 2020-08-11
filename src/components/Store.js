import React from 'react';
import './store.css';

class Store extends React.Component {


  render() {
    return (<div className="store">
      <h1>Store</h1>
      <span>{this.props.count}</span>
    </div>);
  }
}

export default Store;