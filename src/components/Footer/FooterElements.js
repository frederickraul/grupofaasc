import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll';

import Colors from '../Const/Color';


export const FooterContainer = styled.footer`
    background-color: ${Colors.Colors.primary};

`

export const FooterWrap = styled.div`
    padding: 48px 0;
    max-width: 1000px;
    margin: 0 auto;

    @media screen and ( max-width: 820px){
        padding: 0px 0px 50px 20px;
    }
`
export const FooterLinksContainer = styled.div`
    display: flex; 
    justify-content: center;

    @media screen and ( max-width: 820px){
        padding-top: 32px;
    }

    @media screen and ( max-width: 768px){
       max-width: 75%;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;
    justify-content: center;
    @media screen and ( max-width: 820px){
        flex-direction: column;
    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    box-sizing: border-box;
    color: #FFF;
    width: 250px;

    @media screen and ( max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
    color: ${Colors.Colors.red};
`
export const FooterLink = styled(LinkS)`
    color: #000;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    cursor: pointer;

    &:hover{
        color: black;
        transition: 0.3 ease-out;
    }
`
export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`
export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and ( max-width: 820px){
        flex-direction: column;
    }

`

export const SocialLogo = styled(Link)`
    color: #000;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`
export const WebsiteRights = styled.small`
   color: #222222;
   margin-bottom: 16px;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

export const SocialIconLink = styled.a`
    color: #000;
    font-size: 24px;

    &:hover{
        transition: .5s ease-in-out 0s;
        color: #FFF;

    }
`

export const FooterLogo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const LogoImg = styled.img`
    height: 3rem;
    margin-right: 15px;
   

`

export const LogoText = styled.h1`
    font-size: 20px;
    color: #000;

`

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const FooterP = styled.p`
    font-size: .7rem;
    color: #FFF;
    line-height: 1rem;

`


