import styled from 'styled-components';
import Color from '../Const/Color';

export const SliderContainer = styled.div`
    padding-left: 50px;
    padding-right: 50px;
     background: linear-gradient(
            0deg, 
            #444 0%, 
            #000 100%
            );

    @media screen and (max-width: 768px){
        padding-left: 0;
        padding-right: 0;
    }
`

export const Slide = styled.div`
    
    
`

export const SlideImg = styled.img`
    width: 100%;
    height: 75vh;
    object-fit: contain;

    @media screen and (max-width: 768px){
        height: 450px;
        object-fit: cover;
    }
`

export const SlideTextWrap = styled.div`
    height: 50px;
    position: relative;
    margin-top: -50px;
    padding-bottom: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const SlideH3 = styled.h3`
text-transform: uppercase;
    color: white;
    display: flex;
    background-color: rgba(0,0,0,0.7);
    padding: 10px 100px;
    font-family: 'Ubuntu-Italic';


`