import styled from 'styled-components'

export const StyledCheckbox = styled.label`
    display: flex;
    position: relative;
    padding-left: 35px;
    margin-bottom: ${p => p.size === 'small' ? '30px' : '35px'};
    cursor: pointer;
    font-size: 22px;
    user-select: none;

	> input {
		display: none;
	}

	> .checkmark {
    	position: absolute;
    	top: 0;
    	left: 0;
		width: ${({ size }) => sizes[size].width};
		height: ${({ size }) => sizes[size].height};
    	background-color: #D5D5D5;
    	border-radius: 4px;
	}

	> .checkmark:hover {
    	background-color: #979898;
	}

	> input:checked + .checkmark {
		background-color: #3B97D3;
	}

	> .checkmark:after {
		content: "";
    	position: absolute;
    	display: none;
	}

	> input:checked + .checkmark:after {
    	display: block;
}

	> input + .checkmark:after {
    	left: 9px;
		top: 5px;
		width: ${({ size }) => sizes[size].checkmarkWidth};
		height: ${({ size }) => sizes[size].checkmarkHeight};
		border: solid white;
		border-width: 0 3px 3px 0;
		transform: rotate(45deg);
}
`

const sizes = {	
	small: {
		width: '25px',
		height: '25px',
		checkmarkWidth: '5px',
		checkmarkHeight: '10px',
	},
	medium: {
		width: '30px',
		height: '30px',
		checkmarkWidth: '8px',
		checkmarkHeight: '13px',
	},
}