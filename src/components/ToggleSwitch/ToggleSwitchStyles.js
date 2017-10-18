import styled from 'styled-components'


export const StyledToggleSwitch = styled.label`
	position: relative;
	display: inline-block;
	border-radius: 4px;
	width: ${({ size }) => sizes[size].width};
	height: ${({ size }) => sizes[size].height};
	user-select: none;

	> input {
		display: none;
	}

	>.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #D5D5D5;
		transition: .4s;
		border-radius: 4px;
	}

	>.slider:before {
		position: absolute;
		content: "";
		width: ${({ size }) => sizes[size].sliderWidth};
		height: ${({ size }) => sizes[size].sliderHeight};
		left: 4px;
		bottom: 4px;
		background-color: white;
		transition: .3s;
		border-radius: 4px;
	}

	> input:checked + .slider {
		background-color: #3B97D3;
	}

	> input:focus + .slider {
		box-shadow: 0 0 1px #3B97D3;
	}

	> input:checked + .slider:before {
		transform: translateX(${({ size }) => sizes[size].transform});
	}

	> .slider.round {
		border-radius: 34px;
	}

	> .slider.round:before {
		border-radius: 50%;
	}
`

const sizes = {	
	small: {
		width: '51px',
		height: '26px',
		sliderWidth: '18px',
		sliderHeight: '18px',		
		transform: '25px' // Goes up when other values goes down
	},
	medium: {
		width: '61px',
		height: '34px',
		sliderWidth: '26px',
		sliderHeight: '26px',		
		transform: '27px'
	},
	large: {
		width: '90px',
		height: '34px',
		sliderWidth: '26px',
		sliderHeight: '26px',		
		transform: '56px'
	}
}