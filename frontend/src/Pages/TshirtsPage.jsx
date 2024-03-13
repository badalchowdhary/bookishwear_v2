import React, { useState } from 'react'
import styled from 'styled-components'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import PopularProducts from '../Components/PopularProducts'
import { useLocation } from 'react-router-dom';

const Container = styled.div`
`
const Title = styled.h1`
   margin: 20px;
   padding: 30px;
   display: flex;
   justify-content: center;
   font-size: x-large;
   font-weight: bold;
`
const FilterContainer = styled.div`
   display: flex;
   justify-content: space-between;
`
const Filter = styled.div`
   margin: 10px;
   margin-right: 70px;
   margin-left: 70px;
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;

`
const Select = styled.select`
    height: 50px;
    margin-right: 20px;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 5px;
    cursor: pointer;
`
const Option = styled.option`
`

const TshirtsPage = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const catName = cat.toUpperCase();
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        })
    }

    const handleSort = (e) => {
        const value = e.target.value;
        setSort({
            [e.target.name]: value,
        })
    }

  return (
    <Container>
       <Navbar/>


       <Title>{catName}</Title>
       <FilterContainer>
           <Filter>
               <FilterText>Filter</FilterText>
               <Select name="color" onChange={handleFilters}>
                    <Option disabled>Color</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
               </Select>
               <Select name="size" onChange={handleFilters}>
                    <Option disabled>Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
               </Select>
           </Filter>
           <Filter>
               <FilterText>Sort</FilterText>
               <Select name="sort" onChange={handleSort}>
                    <Option value = "newest" >Newest</Option>
                    <Option value = "asc" >Price Low to High</Option>
                    <Option value = "desc" >Price High to Low</Option>
               </Select>
           </Filter>
       </FilterContainer>

       <PopularProducts cat={cat} filters={filters} sort={sort}/>
       
       <Newsletter/>
       <Footer/>
   </Container>
  )
}

export default TshirtsPage