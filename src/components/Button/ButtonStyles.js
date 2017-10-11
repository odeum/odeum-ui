import styled from 'styled-components'
import { transparentize, darken, rgba } from 'polished'
import { BUTTON_TEXT } from '../../utils/colors'

export const Div = styled.div`
	height:${({ size }) => sizes[size].height};
	margin: 0.3rem 0.7rem 0.3rem 0.7rem;
`

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    float: left;
    border-radius: 4px;
	background: ${(props) => props.isDisabled ? props.disabledColor : props.color};
	padding: 0px;
	padding: ${(props) => props.hasIconText ? '0 13px 0 15px' : props.hasText ? '0 8px 0 15px' : props.hasIcon ? '0 0 0 10px' : '0 0 0 15px'};
	height: ${({ size }) => sizes[size].height};
	/* margin: 0.3rem 0.7rem 0.7rem 0; */
	border: none;
    text-decoration: none;
	cursor: ${(props) => props.isDisabled ? 'not-allowed' : 'pointer'};
	user-select: none;
	outline: none;

    &:focus {
        border-color: ${(props) => props.isDisabled ? props.disabledColor : transparentize(0.7, props.color)};		 
		box-shadow: ${(props) => props.isDisabled ? null : `0 0 0 3px ${transparentize(0.7, props.color)}`};
    }

    &&:active {
        background: ${(props) => props.isDisabled ? props.disabledColor : darken(0.1, props.color)};
        border-color: ${(props) => props.isDisabled ? props.disabledColor : darken(0.1, props.color)};
		box-shadow: ${(props) => props.isDisabled ? null : `inset 0 1px 2px ${transparentize(0.7, rgba(0, 0, 0, 0.1))}`}; 
		transform: ${(props) => props.isDisabled ? null : 'translateY(2px)'};
    }

    &:hover {
		background: ${(props) => props.isDisabled ? props.disabledColor : transparentize(0.2, props.color)};
        border-color: ${(props) => props.isDisabled ? props.disabledColor : transparentize(0.7, props.color)};		 
		box-shadow: ${(props) => props.isDisabled ? null : `0 0 0 3px ${transparentize(0.7, props.color)}`};
    }
`
// Button with icon or icon and text
export const StyledButtonIconText = styled.span`
	color: ${BUTTON_TEXT};
	font-family: 'Source Sans Pro';
    font-size: ${({ size }) => sizes[size].fontSize};
    font-weight: 300;
	font-style: normal; 
	padding-right: 2px;
`
// Button with text and no icon
export const StyledButtonText = styled.span`
	color: ${BUTTON_TEXT};
    font-family: 'Source Sans Pro';
    font-size: ${({ size }) => sizes[size].fontSize};
    font-weight: 300;
	font-style: normal; 
	padding-right: 15px;
`

export default StyledButton

export const sizes = {
	xsmall: {
		height: '20px',
		paddingButtonIcon: '0 0px 0 10px',
		paddingButtonText: '0 8px 0 15px',
		paddingButtonIconText: '0 13px 0 15px',
		paddingRightIconText: '2px',
		paddingRightText: '15px',
		fontSize: '15px',
		fontWeight: '300'
	},
	small: {
		height: '38px',
		paddingButtonIcon: '0 0px 0 10px',
		paddingButtonText: '0 8px 0 15px',
		paddingButtonIconText: '0 13px 0 15px',
		paddingRightIconText: '2px',
		paddingRightText: '15px',
		fontSize: '1.5rem',
		fontWeight: '300'
	},
	medium: {
		height: '46px',
		paddingButtonIcon: '0 0px 0 10px',
		paddingButtonText: '0 8px 0 15px',
		paddingButtonIconText: '0 13px 0 15px',
		paddingRightIconText: '2px',
		paddingRightText: '15px',
		fontSize: '15px',
		fontWeight: '300'
	},
	large: {
		height: '58px',
		paddingButtonIcon: '0 0px 0 10px',
		paddingButtonText: '0 8px 0 15px',
		paddingButtonIconText: '0 13px 0 15px',
		paddingRightIconText: '2px',
		paddingRightText: '15px',
		fontSize: '2.0rem',
		fontWeight: '300'
	},
	xlarge: {
		height: '72px',
		paddingButtonIcon: '0 0px 0 10px',
		paddingButtonText: '0 8px 0 15px',
		paddingButtonIconText: '0 13px 0 15px',
		paddingRightIconText: '2px',
		paddingRightText: '15px',
		fontSize: '15px',
		fontWeight: '300'
	}
}