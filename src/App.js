import React, { Component } from 'react';
import './App.scss';
import Store from './components/store/Store.js';
import Iphone from './components/Iphone.js';
import Huawei from './components/Huawei';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  getCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <main className="app">
        <Store count={this.state.count} />
        <h2>iPhone</h2>
        <div className="iphones">
          <Iphone onCart={this.getCount} />
        </div>
        <h2>HUAWEI</h2>
        <div className="iphones">
          <Huawei onCart={this.getCount} />
        </div>
      </main>
    );
  }
}

export default App;
