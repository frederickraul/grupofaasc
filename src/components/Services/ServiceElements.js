import styled from 'styled-components';
import Color from '../Const/Color';
import Colors from '../Const/Color';

export const InfoContainer = styled.div`
    background-color: white;
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
    display: flex;
    flex-direction: column;

    @media screen  and (max-width: 768px){
       width:100%;
       padding: 40px 50px;

    }
   
`
export const Column2 = styled.div`
    padding: 100px 50px;
    width: 750px;

    @media screen  and (max-width: 768px){
       width:100%;
       padding: 0px 50px;

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
    background-color: ${Colors.Colors.primary};    
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
    grid-template-columns: 2fr 2fr;
    align-items: center;
    padding: 30px 0;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        
    }
`

export const ServicesCard = styled.div`
    border-top: 0.015rem solid white;
    padding: 40px 7px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    //box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        //transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        background-color: #F7F7F7;
        border-top: 0.015rem solid ${Colors.Colors.red};
        cursor: pointer;
    }

    &:hover .iconContainer{
        transition: all 0.5s ease-in-out;
        background-color: #F7F7F7;
    }
    &:hover .icon{
        color: ${Colors.Colors.red};
    }
    
`

export const ServicesIcon = styled.div`
   align-self: center;
   margin-bottom: 20px;
   background-color: ${Colors.Colors.red};
   border: .015rem solid ${Colors.Colors.red};
   width: 60px;
   height: 60px;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 100%;
   color: white;
`

export const ServicesH2 = styled.h2`
    text-align: center;
    font-size: .9rem;
    margin-bottom: 10px;
    text-transform: uppercase;

`
export const ServicesP = styled.p`
    text-align: center;
    font-size: .7rem;
    color: #666666;
    line-height: 1rem;

`

export const ServicesGrid = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        max-height: 100%;
        overflow-y: auto;
        z-index: 10;
        background-color: ${Color.Colors.primary};
        padding-top: 60px;
        transition: 0.3s ease-in-out;
        opacity: ${({ isGridOpen }) => (isGridOpen ? '100%' : '0') };
        top: ${({ isGridOpen }) => (isGridOpen ? '0' : '-100%') };
`
export const ServicesGrid2 = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        max-height: 100%;
        overflow-y:auto;
        z-index: 10;
        background-color: ${Color.Colors.primary};
        padding-top: 150px;
        transition: 0.3s ease-in-out;
        opacity: ${({ isGrid2Open }) => (isGrid2Open ? '100%' : '0') };
        top: ${({ isGrid2Open }) => (isGrid2Open ? '0' : '-100%') };

        @media screen and (max-width: 768px){
            padding-top: 0px;
        }
`

export const ServicesModal = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        max-height: 100%;
        overflow-y:auto;
        z-index: 11;
        background-color: rgba(0,0,0,1);
        padding-top: 60px;
        transition: 0.3s ease-in-out;
        opacity: ${({ isModalOpen }) => (isModalOpen ? '100%' : '0') };
        top: ${({ isModalOpen }) => (isModalOpen ? '0' : '-100%') };
        display: flex;
        justify-content: center;


        @media screen and (max-width: 768px){
            flex-direction: column;
        }
        
`

export const ServicesImage = styled.img`
    height: 80%;
    scale: inherit;
    border-radius: 20px;
    margin-left: 15px;
    margin-left: 15px;


    @media screen and (max-width: 768px){
        height: 80%;
        width: 100%;
        margin-left: 0;
    margin-left: 0;
    border-radius: 0;
    margin-top: 10px;
    }
`
