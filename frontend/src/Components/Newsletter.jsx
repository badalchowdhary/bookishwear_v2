import React from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';

const Container = styled.div`
    /* height: 30vh; */
    background-color: #c4fafa;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 60px;
    margin-bottom: 40px;
`
const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgrey;
`
const Input = styled.input`
    border: none;
    padding-left: 20px;
    flex: 8;
`
const Button = styled.button`
    border: none;
    flex: 0.5;
    background-color: teal;
    color: white;
    cursor: pointer;
`

const Newsletter = () => {
  return (
    <Container className='p-4'>
        <Title>
            Newsletters
        </Title>
        <Description>
            Sign up and get notified about our latest products and Special offers.
        </Description>
        <InputContainer>
            <Input placeholder='Your e-mail'/>
            <Button>
                <SendIcon/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter