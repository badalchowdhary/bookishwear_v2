import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { sliderItems } from '../Data/slider_data';
import { Link } from "react-router-dom"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props=> props.slideIndex * -100}vw);
    transition: all 1s ease;

`
const Slide = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};
`
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Image = styled.img`
    height: 80%;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 70px;
    letter-spacing : 5px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 600;
    color: ${props => props.line === "upper" && "black"};
    color: ${props => props.line === "lower" && "teal"};
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: gray;

`
const Button = styled.button`
    padding: 12px 30px;
    font-size: 16px;
    font-weight: bold;
    color: #6e6b6b;
    cursor: pointer;
    &:hover,
    &:focus {
    background-color: #42a3a3;
    color: white;
    }
    background-color: transparent;
    border: 1.3px solid teal;
    border-radius: 5px;
    transition: all 0.5s ease;

`


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
        }
        else{
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0);
        }
    };

  return (
    <Container>
        <Arrow direction = "left" onClick={()=>handleClick("left")}>
            <ArrowBackIosOutlinedIcon/>
        </Arrow>
        <Wrapper slideIndex = {slideIndex}>
            {sliderItems.map((item) => (
                <Slide bg={item.bg} key={item.id}>
                    <ImgContainer>
                        <Image src={item.img}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title line="upper">{item.title1}</Title>
                        <Title line="lower">{item.title2}</Title>
                        <Desc>{item.desc}</Desc>
                        <Link to={"/products"}>
                            <Button>SHOP NOW</Button>
                        </Link>
                    </InfoContainer>
                </Slide>
            ))}
            
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowForwardIosOutlinedIcon/>
        </Arrow>
    </Container>
  )
}

export default Slider