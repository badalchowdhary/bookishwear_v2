import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Container = styled.div`
    flex: 1;
    margin: 10px;
    padding: 20px;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`
const Title = styled.h1`
    font-size: 32px;
    padding: 2px 10px;
    border-radius: 10px;
    margin-bottom: 20px;
    color: white;
    background-color: gray;
`
const Button = styled.button`
    padding: 12px 30px;
    font-size: 16px;
    font-weight: bold;
    color: whitesmoke;
    cursor: pointer;
    &:hover,
    &:focus {
    background-color: #42a3a3;
    color: white;
    }
    background-color: transparent;
    border: 1.3px solid teal;
    border-radius: 5px;
    transition: all 0.4s ease;

`

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Link to={`/products/${item.cat}`}>
            <Image src = {item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Link>
    </Container>
  )
}

export default CategoryItem