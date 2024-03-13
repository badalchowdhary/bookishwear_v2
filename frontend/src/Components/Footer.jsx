import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


const Container = styled.div`
    height: 40vh;
    display: flex;
    background-color: #012c2c;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding: 20px;
    padding-left: 50px;
`
const Logo = styled.h1`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    font-size: 40px;
    color: white;
`
const Description = styled.div`
    margin: 30px 0px;
    padding-right: 60px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #d5d5d5;
`
const SocialContainer = styled.div`
    display: flex;
    
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    cursor: pointer;
`
const Center = styled.div`
    flex: 1;
    margin-top: 30px;
    padding: 20px;
`
const Title = styled.h3`
    margin: 30px 0px;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
    color: #d5d5d5;
    &:hover{
        color: white;
        transition: all 0.5s ease;
    }
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

`
const Right = styled.div`
    flex: 1;
    padding: 20px;
    margin-top: 30px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    color: #d5d5d5;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>
                BookishWear
            </Logo>
            <Description>
                Address Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi ipsa rem placeat! Eveniet, provident voluptatem aperiam minima autem iste! Totam odio culpa possimus itaque suscipit, aspernatur vel excepturi. Beatae, saepe.
            </Description>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <FacebookIcon/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <InstagramIcon/>
                </SocialIcon>
                <SocialIcon color="3B3B3B">
                    <LanguageIcon/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Important Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Account</ListItem>
                <ListItem>etc</ListItem>
                <ListItem>etc</ListItem>
                <ListItem>etc</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact US</Title>
            <ContactItem>
                <RoomIcon style={{marginRight:"10px"}}/>
                Milan More, Champasari, Siliguri, Darjeeling, West Bengal, India, 734003
            </ContactItem>
            <ContactItem>
                <PhoneIcon style={{marginRight:"10px"}}/>
                +91-00000 00000
            </ContactItem>
            <ContactItem>
                <MailOutlineIcon style={{marginRight:"10px"}}/>
                abc@xyz.com
            </ContactItem>
        </Right>
    </Container>
  )
}

export default Footer