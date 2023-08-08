import styled from 'styled-components';

export const ServiceContainer = styled.div`

`

export const ServiceWrapper = styled.div`
    display: grid;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
    justify-content: center;
`

export const ServiceRow = styled.div`
    
    display: grid;
    grid-auto-columns: 250px;
    align-items: center;
    grid-template-areas: 'col1 col2 col3';
    @media screen and (max-width: 768px){
        grid-auto-columns: 200px;

        grid-template-areas: ${({roundedCard})=> (roundedCard ? "'col1' 'col2' 'col3'" : "'col1 col1' 'col2 col2' 'col3 col3'")}; 
    }
`

export const ServiceRow2 = styled.div`
display: grid;
    grid-auto-columns: 250px;
    align-items: center;
    grid-template-areas: 'col1 col2 col3';
    @media screen and (max-width: 768px){
        grid-auto-columns: 200px;

        grid-template-areas: ${({roundedCard})=> (roundedCard ? "'col1' 'col2' 'col3'" : "'col1 col1' 'col2 col2' 'col3 col3'")}; 
    }
`

export const Column1 = styled.div`
    padding: 2px;
    grid-area: col1;
`
export const Column2 = styled.div`
    padding: 2px;
    grid-area: col2;
`
export const Column3 = styled.div`
    padding: 2px;
    grid-area: col3;
`
export const Column4 = styled.div`
    padding: 2px;
    grid-area: col4;
`


export const ServicesCard = styled.div`
position: relative;
    background-color: ${({white})=> (white ? "#FFF" : "tranparent")};
    display: flex;
    padding-top: ${({roundedCard})=> (roundedCard ? '0' : '50px')};
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    border-radius: ${({roundedCard})=> (roundedCard ? '100%' : '0%')};
    height: ${({roundedCard})=> (roundedCard ? '200px' : '8rem')};
    width: ${({roundedCard})=> (roundedCard ? '200px' : 'auto')};
    margin: 0;
    box-shadow: ${({shadownless})=> (shadownless ? '0 1px 3px rgba(0,0,0,0.2);' : '')}; 
    transition: all 0.2s ease-in-out;
    box-sizing: content-box;
    background-position: 50%;
    background-size: cover;
    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 768px){
        height: ${({roundedCard})=> (roundedCard ? '200px' : '8rem')};
        width: ${({roundedCard})=> (roundedCard ? '200px' : 'auto')};

    }
    
`

export const ServicesIcon = styled.img`
    height: 100px;
    width: 100px;
    margin-bottom: 10px;
`

export const ServicesH1 = styled.h1`
    font-size: 2rem;
    margin-bottom: 40px;

    font-family: 'Brygada 1918', serif;
    color: ${({textWhite}) => (textWhite ? '#FFF' : '#000')};
    text-align: center;
    

    @media screen and (max-width: 768px){
        font-size: 1.5rem;
        margin-bottom: 30px; 
        text-align: center;
        padding-top: 50px;

    }
`
export const ServiceTextWrap = styled.div`
height: ${({roundedCard})=> (roundedCard ? '100%' : 'auto')};
width: 100%;
background-color: ${({roundedCard})=> (roundedCard ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.7)')}; 
border-radius: ${({roundedCard})=> (roundedCard ? '100%' : 'rgba(0,0,0,0.7)')};  ;
padding: 15px;
display: flex;
justify-content: center;
align-content: center;
`
export const ServicesH2 = styled.h2`
    align-self: center;
    font-size: 1rem;
    font-weight:500;
    margin-bottom: 10px;
    color: ${({textWhite}) => (textWhite ? '#FFF' : '#000')};
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: .8rem;
        text-align: center;
    }
`
export const ServicesP = styled.p`
    font-size: .8rem;
    text-align: justify;
    color: ${({textWhite}) => (textWhite ? '#FFF' : '#444')};
    position: absolute;
    width: 200px;
    top: 230px;
`

export const ServicesImagesDescription = styled.div`
    position: absolute;
    bottom: 25px;
    
    padding: 20px;
    border-radius: 5px;

    @media screen and (max-width: 768px){
        text-align: right;
        align-self: flex-end;
        right: 20px;

    }


`