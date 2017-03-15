import React from 'react';


class ListItem extends React.Component{ // each todo item
	strikeThrough() { // styling of list text
		if (this.props.done) {
			return 'done'
		}
	}
	
	render () {
		return ( // can I use display: inline-block ?
			<li className="list-group-item"> 
				<form>
					<input type="checkbox" 
							checked={this.props.done}
							onClick={
								(e)=>{this.props.isChecked(e, this.props.index)
								}} /> 
						<label className={this.strikeThrough()}>{this.props.text}</label>
				</form>
			</li>
		)
	}
}
export default ListItem;