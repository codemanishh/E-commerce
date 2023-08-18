import React, { useEffect, useState } from 'react'
import "./Products.css"
import { Link, useSearchParams } from 'react-router-dom'
import Loading from '../loading/Loading'
const Products = ({ category }) => {
    const [searchParams] = useSearchParams()
    const searchItem = searchParams.get('item')
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const fetchProducts = async () => {
        setLoading(true)
        let data
        if (category) {
            const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
            data = await response.json()
            setProducts(data)
        }
        else {
            const response = await fetch("https://fakestoreapi.com/products")
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
                    {loading ? <Loading /> : products.length > 0 ? products.map(product => <div className="col-md-3" key={product.id}>
                        <div className="product-card">
                            <div className="product-card-img">
                                <label className="stock bg-success">In Stock</label>
                                <img src={product.image} />
                            </div>
                            <div className="product-card-body">
                                <h5 className="product-name">
                                    <Link to={"/products/" + product.id}>
                                        {product.title}
                                    </Link>
                                </h5>
                                <div>
                                    <span className="selling-price">${product.price}</span>
                                </div>
                                <div className="mt-2">
                                    <a href="" className="btn btn1">Add To Cart</a>
                                    <a href="" className="btn btn1"> <i className="fa fa-heart"></i> </a>
                                    <Link to={"/products/" + product.id} className="btn btn1"> View </Link>
                                </div>
                            </div>
                        </div>
                    </div>) : <div className='noProduct'>No product found</div>}
                </div>
            </div>
        </div>
    )
}

export default Products
