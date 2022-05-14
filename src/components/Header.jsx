import React from 'react'
//Redux
import { useSelector } from "react-redux";
import HeaderCart from './HeaderCart';
import { Link } from 'react-router-dom';

const Header = () => {
    const { categories, trendings } = useSelector(state => state.ecommerce);
    return (
        <>
            <div id="header" className="header">
                {/* BEGIN container */}
                <div className="container">
                    {/* BEGIN header-container */}
                    <div className="header-container">
                        {/* BEGIN navbar-toggle */}
                        <button type="button" className="navbar-toggle collapsed" data-bs-toggle="collapse"
                            data-bs-target="#navbar-collapse">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        {/* END navbar-toggle */}
                        {/* BEGIN header-logo */}
                        <div className="header-logo">
                            <a href="index.html">
                                <span className="brand-logo"></span>
                                <span className="brand-text">
                                    <span>Jewelry</span>Academlo
                                    <small>e-commerce React module, last project</small>
                                </span>
                            </a>
                        </div>
                        {/* END header-logo */}
                        {/* BEGIN header-nav */}
                        <div className="header-nav">
                            <div className="collapse navbar-collapse" id="navbar-collapse">
                                <ul className="nav justify-content-center">
                                    <li className="active"><a href="index.html">Home</a></li>
                                    <li className="dropdown dropdown-full-width dropdown-hover">
                                        <Link to="/main" data-bs-toggle="dropdown">
                                            Our Store
                                            <b className="caret"></b>
                                            <span className="arrow top"></span>
                                        </Link>
                                        {/* BEGIN dropdown-menu */}
                                        <div className="dropdown-menu p-0">
                                            {/* BEGIN dropdown-menu-container */}
                                            <div className="dropdown-menu-container">
                                                {/* BEGIN dropdown-menu-sidebar */}
                                                <div className="dropdown-menu-sidebar">
                                                    <h4 className="title">Shop By Categories</h4>
                                                    <ul className="dropdown-menu-list">
                                                        {categories.map((category, index) => (
                                                            <li key={index}>
                                                                <a href={`/category/${category.id}`}>{category.name}</a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                {/* END dropdown-menu-sidebar */}
                                                {/* BEGIN dropdown-menu-content */}
                                                <div className="dropdown-menu-content">
                                                    <h4 className="title">Shop By Popular Jewel</h4>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <ul className="dropdown-menu-list">
                                                                {trendings.map((trending, index) => (
                                                                    <li key={index}>
                                                                        <a href={`/product/${trending.id}`}><i className="fa fa-fw fa-angle-right text-muted"></i>{trending.name}</a>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <ul className="dropdown-brand-list mb-0">
                                                        <li>
                                                            <a href="product.html">
                                                                {/* <img src="../assets/img/brand/brand-apple.png" alt="" /> */}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="product.html">
                                                                {/* <img src="../assets/img/brand/brand-samsung.png" alt="" /> */}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="product.html">
                                                                {/* <img src="../assets/img/brand/brand-htc.png" alt="" /> */}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="product.html">
                                                                {/* <img src="../assets/img/brand/brand-microsoft.png" alt="" /> */}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="product.html">
                                                                {/* <img src="../assets/img/brand/brand-nokia.png" alt="" /> */}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="product.html">
                                                                {/* <img src="../assets/img/brand/brand-blackberry.png" alt="" /> */}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="product.html">
                                                                {/* <img src="../assets/img/brand/brand-sony.png" alt="" /> */}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/* END dropdown-menu-content */}
                                            </div>
                                            {/* END dropdown-menu-container */}
                                        </div>
                                        {/* END dropdown-menu */}
                                    </li>
                                    <li className="dropdown dropdown-hover">
                                        <Link to="/main" data-bs-toggle="dropdown">
                                            Categories
                                            <b className="caret"></b>
                                            <span className="arrow top"></span>
                                        </Link>
                                        <div className="dropdown-menu">
                                            {categories.map((category, index) => (
                                                <a className="dropdown-item" key={index} href={`/category/${category.id}`}>{category.name}</a>
                                            ))}
                                        </div>
                                    </li>
                                    <li><a href="product.html">New Arrival</a></li>
                                    <li className="dropdown dropdown-hover">
                                        <Link to="/main" data-bs-toggle="dropdown">
                                            Pages
                                            <b className="caret"></b>
                                            <span className="arrow top"></span>
                                        </Link>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="index.html">Home (Default)</a>
                                            <a className="dropdown-item" href="index_fixed_header.html">Home (Fixed Header)</a>
                                            <a className="dropdown-item" href="index_inverse_header.html">Home (Inverse
                                                Header)</a>
                                            <a className="dropdown-item" href="search_results.html">Search Results</a>
                                            <a className="dropdown-item" href="product.html">Product Page</a>
                                            <a className="dropdown-item" href="product_detail.html">Product Details Page</a>
                                            <a className="dropdown-item" href="checkout_cart.html">Checkout Cart</a>
                                            <a className="dropdown-item" href="checkout_info.html">Checkout Shipping</a>
                                            <a className="dropdown-item" href="checkout_payment.html">Checkout Payment</a>
                                            <a className="dropdown-item" href="checkout_complete.html">Checkout Complete</a>
                                            <a className="dropdown-item" href="my_account.html">My Account</a>
                                            <a className="dropdown-item" href="contact_us.html">Contact Us</a>
                                            <a className="dropdown-item" href="about_us.html">About Us</a>
                                            <a className="dropdown-item" href="faq.html">FAQ</a>
                                        </div>
                                    </li>
                                    <li className="dropdown dropdown-hover">
                                        <Link to="/main" data-bs-toggle="dropdown">
                                            <i className="fa fa-search search-btn"></i>
                                            <span className="arrow top"></span>
                                        </Link>
                                        <div className="dropdown-menu p-15px">
                                            <form action="search_results.html" method="POST" name="search_form">
                                                <div className="input-group">
                                                    <input type="text" placeholder="Search" className="form-control bg-light" />
                                                    <button className="btn btn-dark" type="submit"><i
                                                        className="fa fa-search"></i></button>
                                                </div>
                                            </form>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* END header-nav */}
                        {/* BEGIN header-nav */}
                        <HeaderCart />
                        {/* END header-nav */}
                    </div>
                    {/* END header-container */}
                </div>
                {/* END container */}
            </div>
        </>
    )
}

export default Header