import React, { useState } from 'react'
import styled from 'styled-components'
import { login } from '../Redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';


const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`;
const Wrapper = styled.div`
    width: 30%;
    padding: 20px;
    background-color: whitesmoke;
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    margin: 5px 0px;
    &:disabled{
        color: teal;
        cursor: not-allowed;
    }
`;

const Error = styled.span`
    color: red;
    font-size: 16px;
    font-weight: 300;
`;



const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user)

    const handleLogin = (e) => {
        e.preventDefault();
        login(dispatch, {username, password})
    }
  return (
    <Container>
        <Wrapper>
            <Title>Sign In</Title>
            <Form>
                <Input placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                <Input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>

                {error && <Error>Wrong Credentials</Error>}
                <Button onClick={handleLogin} disabled={isFetching}>Login</Button>
                <Link>Forgor Password ?</Link>
                <Link to={`/register`}>Create new account</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login