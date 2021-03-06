import React, { Component } from 'react';

class SingleInputField extends Component {
	constructor(props){
		super(props)
	}

  render() {
  	return (
	    <div className={this.props.width + " form__element"}>
	        <input type={this.props.type} name={this.props.name} value={this.props.value} placeholder={this.props.title} onChange={this.props.actions.change} required={this.props.required} />
	    </div>
	  );
  }
  
};


/* const SingleInputField = props => {
  const [val, setVal] = useState(props.value);

  const handleChange = event => setVal(event.target.value);

  return (
    <div className="form__element">
        <input type="text" value={val} placeholder={props.title} onChange={handleChange} />
    </div>
  );
}; */




export default SingleInputField;