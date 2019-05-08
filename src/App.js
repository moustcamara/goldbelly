import React, { Component } from 'react';

import Header from './components/Header.js';
import Product from './components/Product.js';

import Cart from './components/Cart.js';


import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

        view: 'singleProduct',
        isCartActive: false,
        product: {},
        cartItems: [],
        cartSummary: 0

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleCart = this.toggleCart.bind(this);
    this.removeItem = this.removeItem.bind(this);
    

  };

  toggleCart(e){
     e.preventDefault();

      if (this.state.isCartActive) {
        this.setState({
           isCartActive: false,
        });
        document.querySelector('body').classList.remove('activated-cart')
      } else {
        this.setState({
           isCartActive: true,
        });
        document.querySelector('body').classList.add('activated-cart')
      }
           
  };

  handleChange(e) {
        this.setState({
          product: {...this.state.product, [e.target.name]: e.target.value}
        });
  };


  removeItem(e) {
      this.setState({
          cartItems: this.state.cartItems.filter(cartItem => cartItem.id !== e ),
          cartSummary: this.state.cartItems.filter(cartItem => cartItem.id !== e ).reduce((cartSubTotal, cartItem) => cartSubTotal + parseInt(cartItem.price),  0)       
      })
  }

  handleSubmit(e) {
        e.preventDefault();

        if (e.target.classList.contains('product__form')) {
           
           this.setState({
             isCartActive: true,
          });

           this.setState({
              cartItems: [...this.state.cartItems, 
              {
                id: this.state.product.id.concat('_', this.state.product.price),
                image: this.state.product.image,
                title: this.state.product.title,
                price: this.state.product.price,
                recipientName:  this.state.product.recipientName,
                recipientEmail: this.state.product.recipientEmail,
                senderName: this.state.product.senderName,
                senderEmail: this.state.product.senderEmail,
                senderMessage: this.state.product.senderMessage,
                qty: 1

              }],
              cartSummary: this.state.cartItems.reduce((cartSubTotal, cartItem) => cartSubTotal + parseInt(cartItem.price),  parseInt(this.state.product.price))
            
           })



        } else if (e.target.classList.contains('cart__form')) {
          alert('Now proceeding to checkout...');
          window.location.reload();
        }
       
  };

  componentDidMount() {
    this.setState({
        product: 
          {
            id: 'gc1',
            title: 'E-Gift Card',
            category: 'Gift Cards + Boxes',
            image: 'https://img.goldbelly.com/uploads/product_image/image/42563/e-gift-card.c6c8f295a58c93a8ba63dc5618c3f7b7.png?ixlib=rails-3.0.2&w=798&h=798',
            price: 0,
            customPriceMin: 201,
            customPriceMax: 500,
            recipientName:  '',
            recipientEmail: '',
            senderName: '',
            senderEmail: '',
            senderMessage: ''
           
          },
        cartSummary: this.state.cartItems.reduce((cartSubTotal, cartItem) => cartSubTotal + cartItem.price, 0)
    })
  };

  



  render() {
    return (
      <div className="App">
        <Header cartInfo={this.state.cartItems} actions={{change: this.handleChange, submit: this.handleSubmit, toggleCart: this.toggleCart}} />     
        <Product
          actions={{change: this.handleChange, submit: this.handleSubmit}}
          info={this.state.product} 
        />
        <Cart isActive={this.state.isCartActive} summary={this.state.cartSummary} info={this.state.cartItems} actions={{change: this.handleChange, submit: this.handleSubmit, toggleCart: this.toggleCart, remove: this.removeItem}} />
      </div>
    );
  }
  

}

export default App;
