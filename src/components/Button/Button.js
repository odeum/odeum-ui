import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { BUTTON_DEFAULT, BUTTON_TEXT, ICON_DEFAULT_COLOR } from '../../utils/colors'
import Icon from '../Icon/Icon'
import StyledButton, { StyledButtonIconText, StyledButtonText, StyledButtonContainer } from './ButtonStyles'


//TODO: switch buttonType, sizes, fonts, and colors from theme!!!
class Button extends Component {

	constructor(props) {
		super(props)

		this.state = { 
			message: this.props.children,
			focus: false 
		}
	}

	render() {
		const { id, label, icon, iconSize, color, disabledColor, active, iconColor, style, size, isDisabled, onClick, margin } = this.props
		let _hasIcon
		let _hasText = label
		let _hasIconText
		if (icon) {
			_hasIcon = true
			_hasIconText = _hasText
			return (
				<StyledButtonContainer size={size} margin={margin}>
					<StyledButton 
						id={id} 
						onClick={onClick} 
						color={color} 
						isDisabled={isDisabled} 
						disabledColor={disabledColor} 
						hasIcon={_hasIcon} 
						hasText={_hasText} 
						hasIconText={_hasIconText} 
						size={size}
						{...this.props}
					>

						<Icon 
							icon={icon} 
							iconSize={iconSize} 
							color={BUTTON_TEXT} 
							active={active} 
							iconColor={iconColor}
							style={style} 
							
						/>
						
						<StyledButtonIconText size={size} hasIconText={_hasIconText}>{label}</StyledButtonIconText>

					</StyledButton>
				</StyledButtonContainer>
			)
		}
		return (
			<StyledButtonContainer size={size}>
				<StyledButton 
					id={id} 
					onClick={onClick} 
					color={color} 
					isDisabled={isDisabled} 
					disabledColor={disabledColor} 
					size={size}
					{...this.props}
				>

					<StyledButtonText size={size}>{label}</StyledButtonText>

				</StyledButton>
			</StyledButtonContainer>
		)


	}
}

Button.propTypes = {
	label: PropTypes.string,
	icon: PropTypes.string,
	iconSize: PropTypes.number,
	color: PropTypes.string,
	active: PropTypes.bool,
	iconColor: PropTypes.string,
	isDisabled: PropTypes.bool,
	disabledColor: PropTypes.string,
	id: PropTypes.string,
	onClick: PropTypes.func,
	style: PropTypes.shape({
		marginRight: PropTypes.string
	}),
	type: PropTypes.oneOf(['button', 'reset', 'submit']),
	size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
}

Button.defaultProps = {
	label: '',
	icon: '',
	iconSize: 18,
	color: BUTTON_DEFAULT,
	disabledColor: '#BDC2C6',
	active: true,
	iconColor: ICON_DEFAULT_COLOR,
	isDisabled: false,
	style: {
		marginRight: '0px'
	},
	type: 'button',
	size: 'small',
}

export default Button
