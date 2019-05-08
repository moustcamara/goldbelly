import React, { Component } from 'react';

class TextArea extends Component {

	constructor(props){
		super(props)
	}

  render() {
  	return (
			<div className={this.props.width + " form__element"}><textarea placeholder={this.props.title} name={this.props.name} value={this.props.value}
     				 onChange={this.props.actions.change}></textarea></div>
     )
  }

}

export default TextArea;