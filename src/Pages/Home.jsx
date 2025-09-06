import React from 'react'
import HeroSection from '../Components/Herosection/HeroSection'
import Features from '../Components/Features/Features'
import ProductsGrid1 from '../Components/ProductSlider/ProductsGrid1'
import HeroBanner from '../Components/HeroBanner.jsx/HeroBanner'
import ProductsGrid2 from '../Components/ProductSlider/ProductsGrid2'
const Home = () => {
  return (
    <div>
        <HeroSection/>
        <Features/>
        <ProductsGrid1/>
        <HeroBanner/>
        <ProductsGrid2/>
        
    </div>
  )
}

export default Home 