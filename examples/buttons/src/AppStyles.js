import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
// import logo from './logo.svg'

const rotateAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }
	
	to {
        transform: rotate(360deg);
	}
`

const LogoImage = styled.img`
	  animation: ${(props) => props.rotateLogo && `${rotateAnimation} infinite 7s linear`};
	  height: ${(props) => props.size || '100px'};
`

export const Logo = (props) => {
	return (
		<LogoImage 
			src={'logo.svg'} 
			size={props.size} 
			rotateLogo={props.rotateLogo}
			alt={'ODEUM Code logo'} />
	)
}

Logo.propTypes = {
	rotateLogo: PropTypes.bool,
	size: PropTypes.string,
	src: PropTypes.string,
	alt: PropTypes.string
}



export const Header = styled.div`
	background-color: #222;
	height: 260px;
	padding: 20px;
	color: white;
`

export const Content = styled.div`
	background-color: #FFF;
	margin-left: 5px;
	margin-right: 5px;
`


export const BadgeImage = styled.img`

`