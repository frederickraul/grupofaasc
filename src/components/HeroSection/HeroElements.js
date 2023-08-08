import styled,{ keyframes } from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import Color from '../Const/Color';

const anim2 = keyframes`
    from{
            left: -100%;
        }
        to{
            left:0%;
        }
`;
export const LandingBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`
export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;

    :before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
     
        z-index: 2;
    }

     @media screen and (max-width: 768px){
     
        z-index: 2;
    }
` 

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const HeroContent = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,.2);

`
export const HeroContentWrapper = styled.div`
    z-index: 3;
    max-width: 900px;
    width: 100%;
    position: relative;
    padding: 8px 24px;
    flex-direction: column;
    align-items: center;
    left: -100%;
    animation: ${anim2} 2s forwards 0s;

`

export const HeroLogo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    @media screen and (max-width: 768px){
        flex-direction: column;
        text-align: center;

    }

`

export const LogoImg = styled.img`
    height: 10rem;
    margin-right: 30px;
    @media screen and (max-width: 768px){
        margin-right: 0px;
        margin-bottom: 50px;
        height: 9rem;
    }
    @media screen and (max-width: 480px){
        height: 8rem;
    }
    @media screen and (max-width: 360px){
        height: 6rem;
    }

`

export const LogoText = styled.h1`
margin-top: -20px;
    font-size: 50px;
    color: #FFF;
    text-shadow: 1px 1px 5px #000;
    max-width: 700px;
    text-transform: uppercase;


    @media screen and (max-width: 768px){
        font-size: 40px;
    }
    @media screen and (max-width: 480px){
        font-size: 35px;
    }
    @media screen and (max-width: 360px){
        font-size: 30px;
    }
`

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }
    @media screen and (max-width: 480px){
        font-size: 32px;
    }

   
`

export const HeroP = styled.p`
    margin-top: 15px;
    margin-bottom: 15px;
    color: ${Color.Colors.primary};
    font-size: 24px;
    max-width: 600px;
    text-shadow: 0px 0px 5px #000000;


    @media screen and (max-width: 768px){
       display:none;
    }
    
`

export const HeroP2 = styled.p`
    display: none;
    margin-top: 15px;
    color: #fff;
    font-size: 24px;
    max-width: 600px;
    text-shadow: 1px 1px 1px #000;


    @media screen and (max-width: 768px){
        text-align: center;
        display: flex;
        font-size: 24px;
    }
    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

export const HeroBtnWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 0px;
    padding-left:190px;
    @media screen and (max-width: 768px){
        margin-top: 50px;
        padding-left: 0;
        justify-content: center;
    }
`

export const ArrowFoward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`