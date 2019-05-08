import React, { Component } from 'react';

import SingleInputField from './SingleInputField';
import TextArea from './TextArea';

class ProductFieldsGroup extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div className="form__fields">


				<div className="form__element-group row">
					<SingleInputField
						width="col-half col-sm-full" 
						type="text" 
						name="recipientName" 
						title="Recipient's Name"
						value={this.props.fields.recipientName}
						actions={this.props.actions}
						required={true}
					/>
					<SingleInputField 
						width="col-half col-sm-full"
						type="email" 
						name="recipientEmail" 
						title="Recipient's Email"
						value={this.props.fields.recipientEmail}
						actions={this.props.actions}
						required={true}
					/>
				</div>

				<div className="form__element-group row">
					<SingleInputField
						width="col-half col-sm-full" 
						type="text" 
						name="senderName" 
						title="Sender's Name"
						value={this.props.fields.senderName}
						actions={this.props.actions}
						required={true}
					/>
					<SingleInputField
						width="col-half col-sm-full" 
						type="email" 
						name="senderEmail" 
						title="Sender's Email"
						value={this.props.fields.senderEmail}
						actions={this.props.actions}
						required={true}
					/>
				</div>

				<div className="form__element-group row">
					<TextArea 
						width="col-full" 
						title="Gift Message"
						value={this.props.fields.senderMessage}
						actions={this.props.actions}
						name="senderMessage" 
						title="Gift Message"
					/>
				</div>

			</div>
		)

	}

}


export default ProductFieldsGroup;