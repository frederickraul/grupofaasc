import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    background-color: #059b5a;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;

`

export const Icon = styled(Link)`
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    color: white;
    margin: 20px 0 50px -10px;
`

export const FormWrap = styled.div`
   max-width: 600px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    padding: 0 50px;

    @media screen and (max-width: 768px){
        padding: 0 20px;
    }
`
export const FormContent = styled.div`
    text-align: center;
    background-color: #000;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 5px;
    padding:10px 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    @media screen and (max-width: 768px){
        padding:30px 10px;
}

`

export const Form = styled.form`
    padding: 20px;
@media screen and (max-width: 768px){
    padding: 20px 10px;
}
    
`
export const FormH1 = styled.p`
    color: #FFF;
    margin: 40px 0;

    @media screen and (max-width: 768px){
        font-size: 1rem;
        margin: 20px 0 50px;
    }
`
export const FormLabel = styled.small`
     display: flex;
     color: white;
     margin-bottom: 5px;

    @media screen and (max-width: 768px){
       
        margin-bottom: 2px;
        font-size: .7rem;
}
`
export const FormInput = styled.input`
    margin-bottom: 30px;
    padding: 10px;
    width: 100%;
    outline: none;
    box-sizing: border-box;
    
    @media screen and (max-width: 768px){
        margin-bottom: 15px;
        padding: 5px;
    }
`
export const FormButton = styled.button`
    width: 100%;
    text-align: center;
    padding: 10px auto;
    background-color: #059b5a;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 3px;
`

export const Text = styled.span`
    display: block;
    color: #fff;
    margin: 20px 0 30px;
    font-size: .7rem;
`