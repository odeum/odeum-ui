import styled from 'styled-components'

export const StyledCheckbox = styled.label`
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    user-select: none;

	> input {
		/* display: none; */
		position: absolute;
    	opacity: 0;
	}

	> .checkmark {
    	position: absolute;
    	top: 0;
    	left: 0;
    	height: 25px; // 25px default size
    	width: 25px;
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
		width: 5px;
		height: 10px;
		border: solid white;
		border-width: 0 3px 3px 0;
		transform: rotate(45deg);
}

`

const sizes = {	
	small: {
		width: '51px',
		height: '26px',
		checkmarkWidth: '18px',
		checkmarkHeight: '18px',		
	},
	medium: {
		width: '61px',
		height: '34px',
		checkmarkWidth: '26px',
		checkmarkHeight: '26px',		
	},
	large: {
		width: '90px',
		height: '34px',
		checkmarkWidth: '26px',
		checkmarkHeight: '26px',		
	}
}