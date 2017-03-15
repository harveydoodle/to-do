import React from 'react';


class ClearComplete extends React.Component {
	render () {
		return(
			<button className="pull-right btn btn-default" onClick={this.props.clearComplete}>Clear Complete</button>
	)}
}

export default ClearComplete;