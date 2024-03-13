import React from 'react'
import Announcement from '../Components/Announcement'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Slider from '../Components/Slider'
import Categories from '../Components/Categories'
import PopularProducts from '../Components/PopularProducts'
import Newsletter from '../Components/Newsletter'


const Home = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <PopularProducts/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home