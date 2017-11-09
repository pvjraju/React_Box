import React, {Component} from 'react';
import {App} from '../App';

class Addbox extends Component{
	constructor(props)
	{
		super(props);
		this.Add=this.Add.bind(this);
		this.start=this.props.endFromParent;
	}

	Add(){
		alert(this.start);
	}
	render(){
		return(
			<div>
			 <button onClick={this.Add}>Add Box</button>
			</div> 
		);
	}
} 
export default Addbox;