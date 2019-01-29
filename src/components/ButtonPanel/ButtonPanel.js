import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StyledButtonPanel from './ButtonPanelStyles'


class ButtonPanel extends Component {
	render() {
		const { content, children, ...styles } = this.props // (...styles rest operator passes down all props)
		return (
			<StyledButtonPanel {...styles}>
				{content ? content.map((button, index) => React.cloneElement(button, { key: index })) :
					children ? children : null
				}
			</StyledButtonPanel>
		)
	}
}

ButtonPanel.propTypes = {
	content: PropTypes.any,
	align: PropTypes.oneOf(['left', 'right', 'center']),
	direction: PropTypes.oneOf(['horizontal', 'vertical']),
	wrap: PropTypes.string,
	justify: PropTypes.oneOf(['left', 'right', 'center', 'spaceBetween']),
	width: PropTypes.string,
	height: PropTypes.string,
	debug: PropTypes.bool,
	style: PropTypes.shape({
		margin: PropTypes.string
	})
}

ButtonPanel.defaultProps = {	
	align: 'center',
	direction: 'horizontal',
	wrap: 'nowrap',
	justify: 'center',
	width: 'auto',
	height: 'auto',
	debug: false,
	style: {
		margin: '3px', // Debug panel margin
	}
}

export default ButtonPanel
