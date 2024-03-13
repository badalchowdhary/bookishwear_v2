import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import Add from '@mui/icons-material/Add'
import Remove from '@mui/icons-material/Remove'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useLocation } from 'react-router-dom';
import { publicRequest } from '../requestMethods'
import { addProduct } from '../Redux/cartRedux';
import { useDispatch } from 'react-redux'


const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: contain;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`
const Brand = styled.h2`
    font-weight: 300;
    color: #808080;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`
const Title = styled.h1`
    font-weight: 500;
    color: #595858;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Price = styled.p`
    padding: 20px;
    font-size: 60px;
    font-weight: 500;
    color: gray;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Discount = styled.p`
    font-size: 20px;
    font-weight: 500;
    text-decoration: line-through;
    color: gray;
    display: flex;
    align-items: center;
    justify-content: center;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 40px 0px;
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 300;
    padding-right: 10px;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin: 0px 5px;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
`
const FilterSizeOption = styled.option` `

const AddRemoveContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0px;
    cursor: pointer;
`
const Amount = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 10px;
    padding: 15px;
    border: 1px solid gray;
    border-radius: 5px;
    
`
const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px 0px;
`
const AddButton = styled.button`
    height: 50px;
    width: 210px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid gray;
    border-radius: 5px;
    cursor: pointer;
    background-color: teal;
    color: white;
    &:hover,
    &:focus {
    transition: 0.3s;
    transform: scale(1.08);
    }
`

const WishlistButton = styled.button`
    height: 50px;
    width: 210px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid gray;
    border-radius: 5px;
    background-color: transparent;
    cursor: pointer;
    &:hover,
    &:focus {
    background-color: ${props=>props.color};
    color: white;
    transition: 0.3s;
    transform: scale(1.08);
    }
`
const Desc = styled.div`
    font-size: 16px;
    font-weight: 200;
    padding: 10px;
    line-height: 1.5;
    text-align: justify;
`


const SingleProduct = () => {

    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch();


    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/products/find/"+id);
                setProduct(res.data);
            } catch {}
        };
        getProduct();
    },[id]);

    const handleQuantity = (type) => {
        if(type === "dec"){
            quantity>1 && setQuantity(quantity-1);
        }
        else {
            setQuantity(quantity+1);
        }
    }

    const handleAddCart = () => {
        dispatch(addProduct({ ...product, quantity, color, size}));
    }

  return (
    <Container>
        <Navbar/>

        <Wrapper>
            <ImgContainer>
                <Image src={product.img}/>
            </ImgContainer>
            <InfoContainer>
                <Brand>BookishWears</Brand>
                <Title>{product.title}</Title>
                <Price>$ {product.price}</Price>
                <Discount>$ 500</Discount>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        {product.color?.map((c) => (
                            <FilterColor color={c} key={c} onClick={()=>setColor(c)}/>
                        ))}
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize onChange={(e)=>setSize(e.target.value)}>
                            {product.size?.map((s) => (
                                <FilterSizeOption key={s}>{s}</FilterSizeOption>
                            ))}
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddRemoveContainer>
                    <Remove onClick={()=>handleQuantity("dec")}/>
                    <Amount>{quantity}</Amount>
                    <Add onClick={()=>handleQuantity("inc")}/>
                </AddRemoveContainer>
                <ButtonContainer>
                    <AddButton color= "#59a959" onClick={handleAddCart}>ADD TO CART</AddButton>
                </ButtonContainer>
                <ButtonContainer>
                    <WishlistButton color= "#e56a6a"><FavoriteBorderOutlinedIcon style={{padding:"10px"}}/> SAVE TO WISHLIST</WishlistButton>
                </ButtonContainer>
                <Desc>
                    {product.desc}
                </Desc>

            </InfoContainer>
        </Wrapper>

        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default SingleProduct