import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Color from './Const/Color';

export const Button = styled.a`
    text-decoration: none;
    border-radius: ${({ big }) => (big ? '0' : '0')};
    background-color: ${({ primary }) => (primary ? '#111111' : '#010606')};
    border-left: 0.2rem solid ${Color.Colors.red};
    border-bottom: 0.2rem solid ${Color.Colors.red};
    text-transform: uppercase;
    white-space: nowrap;
    padding: ${({ big }) => (big ? '12px 30px' : '10px 20px')};
    color: ${({ dark }) => (dark ? '#010606' : '#fff')};
    font-size: ${({ big }) => (big ? '16px' : '12px')};
    font-weight: 800;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background-color: ${({ primary }) => (primary ? 'rgba(0,0,0,0.7)' : '#01bf71')};
        
    }

    &:hover .arrow {
        transform: translateX(15px);
        transition: .3s ease-in-out 0s;
    }


    @media screen and (max-width: 360px){
        padding: ${({ big }) => (big ? '14px 48px' : '10px 20px')};
        color: ${({ dark }) => (dark ? '#010606' : '#fff')};
        font-size: ${({ big }) => (big ? '16px' : '12px')};
    }
` 