import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import Product from './Product'
import axios from 'axios'

const Container = styled.div`
    margin: 60px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const PopularProducts = ({cat,filters,sort}) => {
  
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(cat ? `https://bookishwear-server.vercel.app/api/products?category=${cat}` : "https://bookishwear-server.vercel.app/api/products/");
        setProducts(res.data);
      } catch (err) { }
    };
    getProducts();
  },[cat]);

  useEffect(() => {
    cat && setFilteredProducts(
      products.filter((item) => 
        Object.entries(filters).every(([key,value]) => 
          item[key].includes(value)
        )
      )
    );
  },[products,cat,filters]);

  useEffect(() => {
    console.log(sort)
    if ((sort === "newest")) {
      setFilteredProducts((prev) => 
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if ((sort === "asc")){
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
      console.log("ascending");
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
      console.log("decending");
    }
  },[sort]);

  return (
    <Container>
        {cat ? filteredProducts.map(item=>(
            <Product item={item} key={item.id}/>
        )) :
          products.slice(0,8).map(item=>(
            <Product item={item} key={item.id}/>
        ))
        }
    </Container>
  )
}

export default PopularProducts