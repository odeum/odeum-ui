import styled, { css } from 'styled-components'

const alignment = {
	center: 'center',
	left: 'flex-start',
	right: 'flex-end'
}
const justify = {
	center: 'center',
	left: 'flex-start',
	right: 'flex-end',
	spaceBetween: 'space-between'
}

const StyledButtonPanel = styled.div`
	display: flex;
	overflow: hidden;
	flex-flow: ${props => (props.direction === 'vertical' ? 'column' : 'row') + ' ' + props.wrap};
	justify-content: ${props => justify[props.justify]};
	align-items: ${props => alignment[props.align]};
	width: ${(props) => props.width};
	height: ${props => props.height};
	border: ${props => props.debug ? '1px solid black' : ''};

	${props => props.direction === 'horizontal' && props.justify === 'spaceBetween' && css`
		& > div {
			&:first-of-type {
				margin-left: 3px;
			}
			&:last-of-type {
				margin-right: 3px;
			}
		}
	`};

	${props => props.direction === 'horizontal' && props.justify === 'left' && css`
		& > div {
			&:first-of-type {
				margin-left: 3px;
				}
		}
	`};

	${props => props.direction === 'horizontal' && props.justify === 'right' && css`
		& > div {
			&:last-of-type {
				margin-right: 3px;
			}
		}
	`};

	${props => props.direction === 'vertical' && css`
	 & > div {
		 margin-left: 3px;
		 margin-right: 	3px;
	 	}
	`};
`

export default StyledButtonPanel