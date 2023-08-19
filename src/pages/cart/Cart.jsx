import React from 'react'
import "./Cart.css"
import Navbar from '../../components/navbar/Navbar'
import CartItem from '../../components/cart/CartItem'
import { useSelector } from 'react-redux'
import Footer from '../../components/footer/Footer'
const Cart = () => {
    const cartItems = useSelector(state => state.cart.items)
    console.log("Items: ", cartItems)
    return (
        <div>
            <Navbar />
            {cartItems.length > 0 ? <div className="py-3 py-md-5 bg-light" style={{ minHeight: 500 }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="shopping-cart">
                                <div className="cart-header d-none d-sm-none d-mb-block d-lg-block">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h4>Products</h4>
                                        </div>
                                        <div className="col-md-2">
                                            <h4>Price</h4>
                                        </div>
                                        <div className="col-md-2">
                                            <h4>Quantity</h4>
                                        </div>
                                        <div className="col-md-2">
                                            <h4>Remove</h4>
                                        </div>
                                    </div>
                                </div>

                                {
                                    cartItems.length > 0 &&
                                    cartItems.map(item => <CartItem key={item.id} product={item} />)
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div> : <div className="noProductInCart">No products in the cart</div>}
            <Footer />
        </div>
    )
}

export default Cart
