import React, { useEffect, useState } from 'react'
import "./Products.css"
import { useNavigate, useSearchParams } from 'react-router-dom'
import Loading from '../loading/Loading'
import ProductItem from '../productsItem/ProductItem'

const Products = ({ category }) => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const searchItem = searchParams.get('item')
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const fetchProducts = async () => {
        setLoading(true)
        let data
        if (category) {
            const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
            if (!response.ok) {
                navigate("/error")
            }
            data = await response.json()
            setProducts(data)
        }
        else {
            const response = await fetch("https://fakestoreapi.com/products")
            if (!response.ok) {
                navigate("/error")
            }
            data = await response.json()
            if (searchItem) {
                const filteredData = data.filter(item => item.title.toLowerCase().includes(searchItem.toLowerCase()))
                setProducts(filteredData)
            }
            else {
                setProducts(data)
            }

        }
        setLoading(false)
    }
    useEffect(() => {
        fetchProducts()
    }, [category, searchItem])


    return (
        <div className="py-3 py-md-5 bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="mb-4 capitalize">{category ? category : "Our Products"}</h4>
                    </div>
                    {loading ? <Loading /> : products.length > 0 ? products.map(product => <ProductItem key={product.id} product={product} />) : <div className='noProduct'>No product found</div>}
                </div>
            </div>
        </div>
    )
}

export default Products
