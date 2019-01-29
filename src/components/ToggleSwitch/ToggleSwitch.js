import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledToggleSwitch } from './ToggleSwitchStyles'


class ToggleSwitch extends Component {

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
		const { label, type, size } = this.props
		return (
			<StyledToggleSwitch size={size}>

				<input 
					type="checkbox" 
					value={label}
					id={type === "square" ? "input" : "inputround"} 
					checked={this.state.isChecked} 
					onChange={this.handleChange} />

				<span className={type === "square" ? "slider" : "slider round"} />
			
			</StyledToggleSwitch>
		)
	}
}

ToggleSwitch.propTypes = {
	label: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['square', 'round']),
	checked: PropTypes.bool,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	onChange: PropTypes.func,
}

ToggleSwitch.defaultProps = {
	label: '',
	type: 'square',
	checked: false,
	size: 'medium'
}

export default ToggleSwitch
