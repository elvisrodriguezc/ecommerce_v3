import React from 'react'
//Redux
import { useSelector } from "react-redux";
import HeaderCartItem from './HeaderCartItem';
import { Link } from 'react-router-dom';


const HeaderCart = () => {
    const { cart } = useSelector(state => state.ecommerce);
    return (
        <div>
            <div className="header-nav">
                <ul className="nav justify-content-end">
                    <li className="dropdown dropdown-hover">
                        <Link to="/main" className="header-cart" data-bs-toggle="dropdown">
                            <i className="fa fa-shopping-bag"></i>
                            <span className="total">{cart.length}</span>
                            <span className="arrow top"></span>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-cart p-0">
                            <div className="cart-header">
                                <h4 className="cart-title">Shopping Bag ({cart.length}) </h4>
                            </div>
                            <div className="cart-body">
                                <ul className="cart-item">
                                    {cart.map((product, index) => (
                                        <HeaderCartItem key={index} product={product} />
                                    ))}
                                </ul>
                            </div>
                            <div className="cart-footer">
                                <div className="row gx-2">
                                    <div className="col-6">
                                        <a href="checkout_cart.html"
                                            className="btn btn-default btn-theme d-block">View Cart</a>
                                    </div>
                                    <div className="col-6">
                                        <a href="checkout_cart.html"
                                            className="btn btn-dark btn-theme d-block">Checkout</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="divider"></li>
                    <li>
                        <a href="my_account.html">
                            <img src="../assets/img/user/user-1.jpg" className="user-img" alt="" />
                            <span className="d-none d-xl-inline">Login / Register</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderCart