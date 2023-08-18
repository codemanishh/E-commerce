import React from 'react'
import './Home.css'
import Navbar from '../../components/navbar/Navbar'
import Categories from '../../components/categories/Categories'
import Products from '../../components/products/Products'
import Footer from '../../components/footer/Footer'
import { useSearchParams } from 'react-router-dom'
const Home = () => {
    return (
        <div>
            <Navbar />
            <Categories />
            <Products />
            <Footer />
        </div>
    )
}

export default Home
