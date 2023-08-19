import React from 'react'
import "./CartItem.css"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartAction } from '../../store/cart-slice'
const Cart = ({ product }) => {
    const dispatch = useDispatch()
    const removeFromCartHandler = () => {
        dispatch(cartAction.removeItemFromCart(product.id))
    }
    const incrementQuantityHandler = () => {
        dispatch(cartAction.increaseQuantity(product))
    }
    const decrementQuantityHandler = () => {
        dispatch(cartAction.decreaseQuantity(product))
    }
    return (
        <div className="cart-item">
            <div className="row">
                <div className="col-md-6 my-auto">
                    <Link to={"/products/" + product.id}>
                        <label className="product-name">
                            <img src={product.image} className="cartImg" alt="" />
                            {product.title}
                        </label>
                    </Link>
                </div>
                <div className="col-md-2 my-auto">
                    <label className="price">${product.totalPrice} </label>
                </div>
                <div className="col-md-2 col-7 my-auto">
                    <div className="quantity">
                        <div className="input-group">
                            <span className="btn btn1" onClick={decrementQuantityHandler}><i className="fa fa-minus"></i></span>
                            <input type="text" value={product.quantity} className="input-quantity" />
                            <span className="btn btn1" onClick={incrementQuantityHandler}><i className="fa fa-plus"></i></span>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 col-5 my-auto">
                    <div className="remove">
                        <div className="btn btn-danger btn-sm" onClick={removeFromCartHandler}>
                            <i className="fa fa-trash"></i> Remove
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
