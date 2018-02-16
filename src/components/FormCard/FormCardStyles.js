import styled from 'styled-components'

export const FormBox = styled.div`
    background: #fff;
    border: 1px solid;
    border-color: #e5e6e9 #dfe0e4 #d0d1d5;
    border-radius: 10px;
    height: 470px;
    width: 400px;
    display: flex;
    flex-direction: column;
    margin: 50px;
    overflow: hidden;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);*/
`

export const AnimatedTop = styled.div`
    background-color: grey;
    background-size: 200px 100%;
    background-repeat: no-repeat;
    display: block;
    width: 100%;
    height: 200px;
`

export const AnimatedMiddle = styled.div`
    display: block;
    width: 100%;
    height: 45.79%;
`

export const AnimatedBottom = styled.div`
    background-color: #D5D5D5;
    background-size: 200px 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 72px;
`
export const Container = styled.div`
    width: 100%;
    height: 198px;
`
export const Header = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    margin-top: 12px;
    font-size: 24px;
    font-weight: 400;
`
export const IconDiv = styled.div`
    margin-left: 8%;    
    margin-top: 2px;
    
`
export const IconButton = styled.div`
    width: 25%;
    padding-left: 15px;
    padding-top: 4px;
    cursor: pointer; 
`
export const Label = styled.label`
    margin-left: 5px;
    margin-top: 3px;
    font-weight: 500;
    font-family: 'Source Sans Pro';
`
export const Contentdiv = styled.div`
    display: flex;
    margin-left: 7%;
`
export const ContentContainer = styled.div`
    width: 100px;
    height: 62px;
    margin-right: 7px;
    margin-left: 7px;
    margin-top: 10px;
`
export const LabelHeader = styled.label`
    font-size: 17px;
    font-weight: bold;
    font-family: 'Source Sans Pro';
`

export const Paragraf = styled.p`
    font-size: 17px;
    font-weight: 500;
    font-family: 'Source Sans Pro';
    display: table-caption;
    margin-top: 0px;
`
export const ProgressContent = styled.div`
    margin-top: 24px;
` 
export const Progress = styled.label`
    padding-left: 39%;
`
export const ProgressDiv = styled.div`
    margin-top: 5px;
    margin-left: 15px;
    margin-right: 15px;
    height: 20px;
    background: grey;
    border-radius: 3px;  
`
export const ProgressMeter = styled.span`
    display: block;
    height: 100%;
    background-color: rgb(43,194,83);
    width: ${( props ) => props.progress || '25%'};
    font-family: sans-serif;
    color: white;
    text-align: -webkit-right;
    position: relative;
    overflow: hidden;
`