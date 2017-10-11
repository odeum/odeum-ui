import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledModal, StyledModalHeader, StyledModalContent, StyledModalHeaderIcon, StyledModalHeaderTitle, StyledModalHeaderClose } from './ModalStyles'
import Icon from '../Icon/Icon'
import { MODAL_ICON } from '../../utils/colors'


class Modal extends Component {

	render() {

		const { isOpen, onAfterOpen, onRequestClose, closeTimeoutMS, style, render, overlayScroll, width, icon, label, shouldCloseOnOverlayClick } = this.props

		return (
			<div>
				<StyledModal
					isOpen={isOpen}
					onAfterOpen={onAfterOpen}
					closeTimeoutMS={closeTimeoutMS}
					onRequestClose={onRequestClose}
					contentLabel={label}
					style={style}
					overlayScroll={overlayScroll}
					width={width}
					shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}>

					<StyledModalHeader>

						<StyledModalHeaderIcon>
							<Icon icon={icon} iconSize={30} color={MODAL_ICON} active={true} />
						</StyledModalHeaderIcon>

						<StyledModalHeaderTitle>{label}</StyledModalHeaderTitle>

						<StyledModalHeaderClose onClick={onRequestClose}>
							<Icon icon={'close'} iconSize={30} color={MODAL_ICON} active={true} />
						</StyledModalHeaderClose>

					</StyledModalHeader>

					<StyledModalContent>
						{render()}
					</StyledModalContent>

				</StyledModal>
			</div>
		)
	}
}

Modal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onAfterOpen: PropTypes.func,
	onRequestClose: PropTypes.func,
	closeTimeoutMS: PropTypes.number,
	style: PropTypes.shape({
		overlay: PropTypes.object,
		content: PropTypes.object
	}),
	overlayScroll: PropTypes.bool,
	width: PropTypes.string,
	render: PropTypes.func.isRequired,
	icon: PropTypes.string,
	label: PropTypes.string.isRequired,
	shouldCloseOnOverlayClick: PropTypes.bool
}

Modal.defaultProps = {
	isOpen: false,
	label: '',
	overlayScroll: false,
	width: '500px',
}

export default Modal

