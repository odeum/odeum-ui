import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledCheckbox } from 'components/Checkbox/CheckboxStyles'

class Checkbox extends Component {

	constructor(props) {
		super(props)
		this.state = {
			isChecked: props.checked
		}
	}
	
	handleChange = () => {
		this.setState(({ isChecked }) => (
			{
				isChecked: !isChecked,
			}
		))		
		if (this.props.onChange) {
			this.props.onChange()
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.checked !== this.props.checked) {
			this.setState({ isChecked: nextProps.checked })	
		}
		this.setState({ isChecked: nextProps.checked })
	}
	

	render() {		
		const { size } = this.props
		return (
			<StyledCheckbox size={size}>

				<input 
					type="checkbox" 
					checked={this.state.isChecked} 
					onChange={this.handleChange} />

				<span className="checkmark"></span>
			
			</StyledCheckbox>
		)
	}
}

Checkbox.propTypes = {
	checked: PropTypes.bool,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	onChange: PropTypes.func,
}

Checkbox.defaultProps = {
	checked: false,
	size: 'medium'
}

export default Checkbox
