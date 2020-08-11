import React, { Component } from 'react';
import './App.scss';
import Store from './components/Store.js';
import Iphone from './components/Iphone.js';
import Huawei from './components/Huawei';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Store />
        <h2>iPhone</h2>
        <div className="iphones">
          <Iphone />
        </div>
        <h2>HUAWEI</h2>
        <div className="iphones">
          <Huawei />
        </div>
      </main>
    );
  }
}

export default App;
