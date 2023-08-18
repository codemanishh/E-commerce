import React from 'react'
import "./Category.css"
import { useParams } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import Products from '../../components/products/Products'
const Category = () => {
    const category = useParams().category
    return (
        <div>
            <Navbar />
            <Products category={category} />
        </div>
    )
}

export default Category
