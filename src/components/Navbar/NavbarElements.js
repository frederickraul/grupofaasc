import styled, { keyframes } from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import Color from '../Const/Color';

const anim4 = keyframes`
    from{
        top: -100%
    }
    to{
        top: 0%;
    }
`


export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
    height:90px;
    margin-top: -90px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 1rem;
    position: sticky;
    top: -100%;
    z-index: 10;
    animation: ${anim4} 2s forwards 1s;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }

    @media screen and (max-width: 768px){
        height:60px;
    }
`
export const NavbarHeader = styled.div`
    display: flex;
    justify-content: center;
    background-color: rgba(0,0,0,0.8);
    height:30px;
    z-index: 1;
    width: 100%;
    padding: 10px;
`

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width:100%;
    max-width: 1000px;
    padding-right: 50px;
    @media screen and (max-width: 768px){
        display: none;
    }
`
export const Container = styled.div`
    display: flex;
    flex-direction: row;
`
export const NavbarSquare = styled.p`
    height: 75px;
    width: 45px;
    background-color: ${Color.Colors.red};
    position: relative;
    left: 0;
    top: -30px !important;
    @media screen and (max-width: 768px){
        width: 37px;

    }
`

export const NavbarItem = styled.p`
    font-size: .8rem;
    color: #fff;
    padding: 0 .6rem;
    font-weight: 800;
    display: flex;
    flex-direction: row;
    &.active{
        border-bottom: 3px solid ${Color.Colors.red};
    }
`
export const NavbarP = styled.p`
   margin-left: 5px;
   font-family: 'Ubuntu-Regular';
`

export const NavbarMenu = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    transition: .5s ease-in-out 0s;
    background-color: ${({ scrollNav }) => (scrollNav ? '#FFFFFF' : 'transparent')};
    padding: 0 24px;
    height:60px;
    z-index: 1;
    border-bottom: ${({ scrollNav }) => (scrollNav ? '1px solid #aaaaaa' : 'none')};


    @media screen and (max-width: 768px){
       // background-color:transparent;
    }

`


export const MenuContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width:100%;
    max-width: 1000px;
`

export const NavLogo = styled(LinkR)`
    justify-self: flex-start;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    display: flex;
    margin-left: 24px;
    text-decoration: none;
`

export const NavH6 = styled.h6`
    color: ${({scrollNav}) =>(scrollNav ? '#737373' : '#c3c3c3')};
    text-transform: uppercase;
    letter-spacing: .15rem;
    margin: .2rem 0;

    @media screen and (max-width: 380px){
        margin: 0rem 0;
        font-size: .5rem;
    }
    
   
    
`

export const NavH3 = styled.h3`
    font-size: 1rem;
    color: ${({scrollNav}) => (scrollNav ? '#000' : '#ffffff' )};
    text-transform: uppercase;
    letter-spacing: .1rem;
    @media screen and (max-width: 380px){
        font-size: .9rem;
    }
`

export const Img = styled.img`
    height:50px;
    margin: 0 0 10px 0;
    padding-right: 0;
`
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: -10px;
        right: 0; 
        transform: translate(-100%, 60%); 
        font-size: 1.8rem;
        cursor: pointer;
    }
    @media screen and (max-width: 380px){
        top: 15px;
        font-size: 1rem;
    }

`



export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavItem = styled.li`
    height:60px;
`

export const NavLinks = styled(LinkS)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: .5rem 1.5rem;
    height: 100%;
    cursor: pointer;
    font-size: .7rem;
    font-weight: 800;
    text-transform: uppercase;
    transition: .3s ease-in-out 0s;
    color: ${({ scrollNav }) => (scrollNav ? '#333' : '#ddd')};
    &.active{
        border-bottom: 3px solid ${Color.Colors.red};
    }
    &:hover{
        color: ${Color.Colors.red};
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 5px;
    background-color: #01f471;
    white-space: nowrap;
    color: #010606;
    outline: none;
    border: none;
    padding: .5rem 1rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background-color: #010606;
        color: #01f471;
    }
`

