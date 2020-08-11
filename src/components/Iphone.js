import React from 'react';
import IphoneItem from './IphoneItem.js';

class Iphone extends React.Component {

  render() {
    return (
      <div>
        <IphoneItem />
        <IphoneItem />
        <IphoneItem />
      </div>
    );
  }
}
export default Iphone;