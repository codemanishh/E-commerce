import React, { useEffect, useState } from 'react'
import "./Product.css"
import Navbar from '../../components/navbar/Navbar'
import { useParams } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Loading from '../../components/loading/Loading'
const Product = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(false)
    const productId = useParams().productId
    const fetchProduct = async () => {
        setLoading(true)
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
        const data = await response.json()
        setProduct(data)
        setLoading(false)
    }
    useEffect(() => {
        fetchProduct()
    }, [productId])
    return (
        <div>
            <Navbar />
            {loading ? <Loading /> : product && <div className="py-3 py-md-5 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 mt-3">
                            <div className="bg-white border">
                                <img src={product.image} className="w-100" alt="Img" />
                            </div>
                        </div>
                        <div className="col-md-7 mt-3">
                            <div className="product-view">
                                <h4 className="product-name">
                                    {product.title}
                                    <label className="label-stock bg-success">In Stock</label>
                                </h4>
                                <hr />
                                <div>
                                    <span className="selling-price">${product.price}</span>
                                </div>
                                <div className="mt-2">
                                    <div className="input-group">
                                        <span className="btn btn1"><i className="fa fa-minus"></i></span>
                                        <input type="text" value="1" className="input-quantity" />
                                        <span className="btn btn1"><i className="fa fa-plus"></i></span>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <a href="" className="btn btn1"> <i className="fa fa-shopping-cart"></i> Add To Cart</a>
                                    <a href="" className="btn btn1"> <i className="fa fa-heart"></i> Add To Wishlist </a>
                                </div>
                                <div className="mt-3">
                                    <h5 className="mb-0">Small Description</h5>
                                    <p>
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mt-3">
                            <div className="card">
                                <div className="card-header bg-white">
                                    <h4>Description</h4>
                                </div>
                                <div className="card-body">
                                    <p>
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
            <Footer />
        </div>
    )
}

export default Product
