import React from 'react';

class DropdownFilter extends React.Component {
	render() {
		return(
			<select value={this.props.value} onChange={e=>{this.props.onChange(e)}}>
				<option value="all">all</option>
				<option value="active">active</option>
				<option value="complete">complete</option>
			</select>
		)
	}
}

export default DropdownFilter;