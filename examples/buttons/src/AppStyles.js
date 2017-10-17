import React from 'react'
import styled, { keyframes } from 'styled-components'
import logo from './logo.svg'

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
	
	to {
        transform: rotate(360deg);
	}
`

const LogoImage = styled.img`
	  animation: ${(props) => props.rotate ? `${rotate} infinite 7s linear` : '' };     
	  height: ${(props) => props.size || '100px'};
`


export const Logo = (props) => {
	return (
		<LogoImage 
			src={logo} 
			size={props.size} 
			rotate={props.rotate} 
			alt={'ODEUM Code logo'} />
	)
}

export const Header = styled.div`
	background-color: #222;
	height: 260px;
	padding: 20px;
	color: white;
`

export const BadgeImage = styled.img`

`