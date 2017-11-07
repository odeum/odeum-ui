import styled, { keyframes, injectGlobal } from 'styled-components'
import Modal from 'react-modal'
import { MODAL_HEADER, MODAL_TITLE } from '../../utils/colors'

const hideOverlayScroll = () => {
	injectGlobal([`
	.ReactModal__Body--open {
		overflow: hidden;
	}
	`])
}

const fadeInModal = keyframes`
    0% {
        opacity: 0;
        /* top: 50%;
        left: 50%; */
    }
    100% {
        opacity: 1;
        /* top: 50%;
        left: 50%; */
	}
`

export const StyledModal = styled(Modal) `
	${(props) => props.overlayScroll === false ? hideOverlayScroll() : null};
    border-radius: 4px;
    border: none;
    margin-right: -50%;
	width: ${(props) => props.width};
	/* max-width: 320px; */
    /* height: calc(100% - 600px); */
    min-height: 480px;
	/* max-height: 900px; */
    position: absolute; /* fixed */
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    transform: translate(-50%, -50%);
    animation: 0.3s ${fadeInModal} ease-in-out;
    background-color: white;
    outline: none;
	box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.5);
	overflow-y: auto;
`

export const StyledModalHeader = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: ${MODAL_HEADER};
    font-family: Helvetica, Arial, sans-serif;
    font-size: 2.0rem;
    font-weight: 300;
    color: ${MODAL_TITLE};
    box-sizing: border-box; 
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 20px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    user-select: none;
`

export const StyledModalHeaderIcon = styled.div`
    margin-right: 5px;
`

export const StyledModalHeaderTitle = styled.div`
    float: left;
`

export const StyledModalHeaderClose = styled.div`
    float: right;
    margin-left: auto;
    cursor: pointer;
`

export const StyledModalContent = styled.div`
    clear: both;
	box-sizing: border-box; 
	padding: 0;
    padding-left: 20px;
	padding-right: 20px;
	padding-bottom: 40px;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 1.6rem;
    font-weight: 300;
    /* height: calc(100% - 90px); */
`
