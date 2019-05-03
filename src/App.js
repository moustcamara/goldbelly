import React, { Component } from 'react';

import Header from './components/Header.js';
import Product from './components/Product.js';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

        'product': {
          title: 'E-Gift Card'
        },
        'giftCardAmount': 25,
        'recipientName': '',
        'recipientEmail': '',
        'senderName': '',
        'senderEmail': '',
        'giftMessage': '',

    }

  }

  render() {
    return (
      <div className="App">
        <Header />
        <Product />
      </div>
    );
  }
  

}

export default App;
