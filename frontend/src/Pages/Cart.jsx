import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Add, Remove } from '@mui/icons-material'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 50px 80px;
`
const Title = styled.h1`
    font-weight: 400;
    font-size: 40px;
    text-align: center;
    padding: 10px 0px 50px 0px;
`
const OrderDetails = styled.div`
    display: flex;
    justify-content: space-between;
`
const Info = styled.div`
    flex: 3;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 0px;
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
    height: 250px;
    object-fit: cover;
    border-radius: 5px;
    margin: 10px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
`
const Top = styled.div`
    display: flex;
    flex: 4;
    flex-direction: column;
    justify-content: start;
`

const Brand = styled.span`
    color: gray;
    font-size: 16px;
    padding: 5px 0px;
`
const ProductName = styled.span`
    color: #2a2a2a;
    font-size: 26px;
    font-weight: 400;
    padding: 5px 0px;
`
const ProductID = styled.span`
    color: gray;
    font-size: 12px;
    padding: 5px 0px;
`
const Bottom = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`
const ProductColor = styled.div`
    background-color: ${props=>props.color};
    height: 20px;
    width: 20px;
    border-radius: 50%;
`
const ProductSize = styled.span`
    border: 1px solid gray;
    border-radius: 5px;
    padding: 5px;
    height: 30px;
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
`
const Amount = styled.span`
    padding: 8px;
    border: 1px solid gray;
    border-radius: 5px;
`
const PriceWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-right: 20px;
`
const AddWishlistContainer = styled.div`
    flex: 4;
    padding: 25px;
    display: flex;
    align-items: start;
    justify-content: end;
    cursor: pointer;
`
const AddWishlist = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const WishlistIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const WishlistText = styled.div`
    padding-left: 5px;
    display: flex;
    align-items: center;
`
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: flex-end;
    justify-content: end;
    flex-direction: column;
    padding: 20px;
    font-size: 30px;
`
const Price = styled.p`
    padding: 10px 0px;
    font-size: 35px;
    font-weight: 500;
    color: #2a2a2a;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Discount = styled.p`
    font-size: 20px;
    font-size: 15px;
    text-decoration: line-through;
    color: gray;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Hr = styled.div`
    background-color: #eee;
    border: none;
    height: 1px;
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 5px;
    margin: 10px;
    padding: 20px;
    height: 60vh;
`
const SummaryTitle = styled.h1`
    font-weight: 300;
    color: gray;
    text-align: center;
    padding: 10px 0px;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    color: #2a2a2a;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "22px"};
`
const SummaryItemText = styled.span`
    
`
const SummaryItemPrice = styled.span`
    
`
const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0px;
`
const Button = styled.button`
    /* width: 80%; */
    padding: 10px;
    height: 50px;
    color: white;
    border: none;
    border-radius: 5px;
    background-color: teal;
    font-size: 18px;
    cursor: pointer;
    &:hover{
        transform: scale(1.02);
        transition: all 0.5s;
    }
`


const Cart = () => {
    const cart = useSelector(state => state.cart);

  return (
    <Container>
        <Navbar/>

        <Wrapper>
            <Title>Your Bag</Title>
            <OrderDetails>
                <Info>
                    {cart.products.map(product=>(
                        <Product>
                        <ProductDetail>
                            <Image src={product.img}/>
                            <Details>
                                <Top>
                                    <Brand>BookishWear</Brand>
                                    <ProductName>{product.title}</ProductName>
                                    <ProductID><b>ID : </b>{product._id}</ProductID>
                                </Top>
                                <Bottom>
                                    <ProductColor color={product.color}/>
                                    <AmountContainer>
                                        <Remove style={{cursor:"pointer", padding:"5px"}}/>
                                        <Amount>{product.quantity}</Amount>
                                        <Add style={{cursor:"pointer", padding:"5px"}}/>
                                    </AmountContainer>
                                    <ProductSize><b>{product.size}</b></ProductSize>
                                </Bottom>
                            </Details>
                        </ProductDetail>
                        <PriceWrapper>
                            <AddWishlistContainer>
                                <AddWishlist>
                                    <WishlistIcon><FavoriteBorderOutlinedIcon/></WishlistIcon>
                                    <WishlistText>Add To Wishlist</WishlistText>
                                </AddWishlist>
                            </AddWishlistContainer>
                            <PriceDetail>
                                <Price>Rs. {product.price * product.quantity}</Price>
                                <Discount>Rs. {(product.price+200)*product.quantity}</Discount>
                            </PriceDetail>
                        </PriceWrapper>
                    </Product>
                    ))}
                    <Hr/>
                    
                </Info>
                <Summary>
                    <SummaryTitle>Order Summary</SummaryTitle>
                    <Hr/>
                    <SummaryItem>
                        <SummaryItemText>Bag Total</SummaryItemText>
                        <SummaryItemPrice>{cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Charges</SummaryItemText>
                        <SummaryItemPrice>99</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Bag Discount</SummaryItemText>
                        <SummaryItemPrice>- 99</SummaryItemPrice>
                    </SummaryItem>
                    <Hr/>
                    <SummaryItem  type="total">
                        <SummaryItemText>Order Total</SummaryItemText>
                        <SummaryItemPrice>Rs. {cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <ButtonContainer>
                        <Link to={"/payment"}>
                        <Button>CHECKOUT</Button>
                        </Link>
                    </ButtonContainer>
                </Summary>
            </OrderDetails>
        </Wrapper>

        <Footer/>
    </Container>
  )
}

export default Cart