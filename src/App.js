import React, { Component } from 'react';

import Header from './components/Header.js';
import Product from './components/Product.js';

import SingleInputField from './components/SingleInputField';


import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

        title: '',
        category: '',
        giftCardAmount: 0,
        recipientName: '',
        recipientEmail: '',
        senderName: '',
        senderEmail: '',
        giftMessage: ''

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    

  };

  handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
  };

  handleSubmit(e) {
        alert('Item added to the cart! Yay!')
  };

  componentDidMount() {
    this.setState({
        title: 'E-Gift Card',
        category: 'Gift Cards + Boxes'
    })
  };

  



  render() {
    return (
      <div className="App">
        <Header />     
        <Product
          actions={{change: this.handleChange, submit: this.handleSubmit}}
          info={this.state} 
        />
      </div>
    );
  }
  

}

export default App;
