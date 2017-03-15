import React from 'react';

class NewItem extends React.Component { // make new component Button?
	render () {

		return (
			<form onSubmit={this.props.onSubmit}>
				<div className="input-group">
					<span className="input-group-btn">
						<button className="btn btn-primary" type="submit">
							Add
						</button> 
					</span>
					<input 
						type="text" 
						className="form-control" 
						placeholder="add a todo"
						value={this.props.value} 
						onChange={this.props.onChange} />
				</div>
			</form>
		)
	}
}

export default NewItem;