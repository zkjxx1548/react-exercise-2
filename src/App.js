import React, { Component } from 'react';
import './App.scss';
import Store from './components/store/Store.js';
import Iphone from './components/iphone/Iphone.js';
import Huawei from './components/huawei/Huawei';
import fetchData from './async/myfetch';

class App extends Component {
  state = {
    count: 0,
    iphone: [],
    huawei: [],
  };

  getCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <main className="app">
        <Store count={this.state.count} />
        <Iphone products={this.state.iphone} onCart={this.getCount} />
        <Huawei products={this.state.huawei} onCart={this.getCount} />
      </main>
    );
  }

  componentDidMount() {
    fetchData().then((res) => {
      this.setState({
        iphone: res.filter((element) => element.category === 'iPhone'),
        huawei: res.filter((element) => element.category === 'HUAWEI'),
      });
    });
  }
}
export default App;
