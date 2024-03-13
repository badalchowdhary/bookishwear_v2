import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
    height: 60px;
    background-color: #012c2c;
    color: white;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: rgba(50,50,93,0.25) 0px 50px 100px -20px,
        rgba(0,0,0,0.3) 0px 30px 60px -30px;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`

const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity);
    console.log(quantity)
  return (
    <Container>
        <Wrapper>
            <Left>
                <SearchContainer>
                    <Input/>
                    <SearchIcon style={{color:"gray", fontSize:"18"}}/>
                </SearchContainer>
                
            </Left>
            <Center>
                <Link to="/">
                    <Logo>
                        BookishWear
                    </Logo>
                </Link>
            </Center>
            <Right>
                <Link to="/register">
               <MenuItem>REGISTER</MenuItem>
               </Link>
               <Link to="/login">
               <MenuItem>SIGN IN</MenuItem>
               </Link>
               <Link to="/cart">
                <MenuItem>
                    <Badge badgeContent={quantity} color="primary">
                        <ShoppingCartOutlinedIcon/>
                    </Badge>
                </MenuItem>
               </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar