import React, { Component } from 'react'
import Icon from 'components/Icon/Icon'
import { FormBox, AnimatedTop, AnimatedBottom, IconButton } from './FormCardStyles'

class FormCard extends Component {

	render() {
		const { icon1, icon2, icon3, icon4, iconSize, color, color4, onClick1, onClick2, onClick3, onClick4 } = this.props
		return (
			<div>
				<FormBox>
					<AnimatedTop />
					{this.props.children}
					<AnimatedBottom >
						{icon1 ? <IconButton onClick={onClick1}>
							<Icon
								icon={icon1}
								iconSize={iconSize}
								color={color}
							/>
						</IconButton> : null}
						{icon2 ? <IconButton onClick={onClick2}>
							<Icon
								icon={icon2}
								iconSize={iconSize}
								color={color}
							/>
						</IconButton> : null}
						{icon3 ? <IconButton onClick={onClick3}>
							<Icon
								icon={icon3}
								iconSize={iconSize}
								color={color}
							/>
						</IconButton> : null}
						{icon4 ? <IconButton onClick={onClick4}>
							<Icon
								icon={icon4}
								iconSize={iconSize}
								color={color4}
							/>
						</IconButton> : null}
					</AnimatedBottom>
				</FormBox>
			</div>
		)
	}
}



export default FormCard