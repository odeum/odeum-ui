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

export const Logo = () => <LogoImage src={logo} alt={'ODEUM Code logo'} />
	

const LogoImage = styled.img`
	  animation: ${appLogoSpin} infinite 7s linear;
	  height: 100px;
`

export const Header = styled.div`
	background-color: #222;
	height: 210px;
	padding: 20px;
	color: white;
`

