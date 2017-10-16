import React from 'react'
import styled, { keyframes } from 'styled-components'
import logo from './logo.svg'

const appLogoSpin = keyframes`
    from {
        transform: rotate(0deg);
    }
	
	to {
        transform: rotate(360deg);
	}
`

const LogoImage = styled.img`
	  animation: ${appLogoSpin} infinite 7s linear;
	  height: ${(props) => props.size || '100px'};
`

export const Logo = (props) => <LogoImage src={logo} size={props.size} alt={'ODEUM Code logo'} />


export const Header = styled.div`
	background-color: #222;
	height: 210px;
	padding: 20px;
	color: white;
`

