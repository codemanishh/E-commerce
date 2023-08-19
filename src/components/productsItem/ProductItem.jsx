import React from 'react'
import "./ProductItem.css"
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { cartAction } from '../../store/cart-slice'
const ProductItem = ({ product }) => {
    const dispatch = useDispatch()
    const addToCartHandler = () => {
        dispatch(cartAction.addItemToCart(product))
    }
    return (
        <div className="col-md-3" key={product.id}>
            <div className="product-card">
                <div className="product-card-img">
                    <label className="stock bg-success">In Stock</label>
                    <img src={product.image} alt="" />
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
                        <div className="btn btn1" onClick={addToCartHandler}>Add To Cart</div>
                        <div className="btn btn1"> <i className="fa fa-heart"></i> </div>
                        <Link to={"/products/" + product.id} className="btn btn1"> View </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
