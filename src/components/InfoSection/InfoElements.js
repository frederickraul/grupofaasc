import styled from 'styled-components';
import Color from '../Const/Color';

export const InfoContainer = styled.div`
    background: linear-gradient(
            90deg, 
            #ebecee 0%, 
            #f4f5f7 100%
            );
    

`

export const InfoWrapper = styled.div`

    
`

export const InfoRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media screen  and (max-width: 768px){
        flex-direction: column;
    }
    
`

export const Column1 = styled.div`
    padding: 100px 0;
    width: 250px;
    background-color: #ebecee;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen  and (max-width: 768px){
       width:100%;
       padding: 40px 50px;

    }
   
`
export const Column2 = styled.div`
    padding: 100px 50px;
    width: 750px;
    background-color: #f4f5f7;
    @media screen  and (max-width: 768px){
       width:100%;
       padding: 40px 50px;

    }
`

export const TextWrapper = styled.div`
     display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const TopLine = styled.p`
    color: #FFF;
    font-size: .8rem;
    padding: 3px 8px;
    border-radius: 1px;
    letter-spacing: 0.09rem;
    font-weight: 800;
    background-color: ${Color.Colors.red};    
    text-transform: uppercase;
`

export const Heading = styled.h1`
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 40px;
    line-height: 1.1;
    font-family: 'Ubuntu-Bold';
    letter-spacing: 0.09rem;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};
    
    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const InfoText = styled.p`
        font-family: 'Ubuntu-Italic';
        font-size: .9rem;

`

export const Subtitle = styled.p`
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`

export const BtnWrap = styled.div`
    display:flex;
    justify-content:flex-start;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 200px;
    margin: 0 0 10px 0;
    padding-right: 0;
`

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: flex-start;
    grid-gap: 16px;
    padding: 30px 0;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        
    }
`

export const ServicesCard = styled.div`

    //box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
    
`

export const ServicesIcon = styled.div`
   padding: 3px 0;
   margin-bottom: 10px;
   background-color: ${Color.Colors.primary};
   width:30px;
   display: flex;
   justify-content: center;
`

export const ServicesH2 = styled.h2`
    font-size: .9rem;
    margin-bottom: 10px;
    text-transform: uppercase;

`
export const ServicesP = styled.p`
    font-size: .7rem;
    color: #666666;
    line-height: 1rem;

`