import React from 'react'
import { Link } from 'react-router-dom'

const CheckoutCart = () => {
    return (
        <>
            <div class="section-container" id="checkout-cart">
                <div class="container">
                    <div class="checkout">
                        <form action="checkout_info.html" method="GET" name="form_checkout">
                            <div class="checkout-header">
                                <div class="row">
                                    <div class="col-lg-3">
                                        <div class="step active">
                                            <Link to="/">
                                                <div class="number">1</div>
                                                <div class="info">
                                                    <div class="title">Delivery Options</div>
                                                    <div class="desc">Lorem ipsum dolor sit amet.</div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div class="col-lg-3">
                                        <div class="step">
                                            <Link to="/">
                                                <div class="number">2</div>
                                                <div class="info">
                                                    <div class="title">Shipping Address</div>
                                                    <div class="desc">Vivamus eleifend euismod.</div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div class="col-lg-3">
                                        <div class="step">
                                            <Link to="/">
                                                <div class="number">3</div>
                                                <div class="info">
                                                    <div class="title">Payment</div>
                                                    <div class="desc">Aenean ut pretium ipsum. </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div class="col-lg-3">
                                        <div class="step">
                                            <Link to="/">
                                                <div class="number">4</div>
                                                <div class="info">
                                                    <div class="title">Complete Payment</div>
                                                    <div class="desc">Curabitur interdum libero.</div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="checkout-body">
                                <div class="table-responsive">
                                    <table class="table table-cart">
                                        <thead>
                                            <tr>
                                                <th>Product Name</th>
                                                <th class="text-center">Price</th>
                                                <th class="text-center">Quantity</th>
                                                <th class="text-center">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="cart-product">
                                                    <div class="d-flex">
                                                        <div class="product-img h-150px w-100px d-flex align-items-center justify-content-center">
                                                            <img src="../assets/img/product/product-iphone-12.png" class="mw-100 mh-100" alt="" />
                                                        </div>
                                                        <div class="product-info ms-3">
                                                            <div class="title">iPhone 12 Pro Max 128GB (Blue)</div>
                                                            <div class="desc">Delivers Tue 26/04/2021 - Free</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="cart-price text-center">$999.00</td>
                                                <td class="cart-qty text-center">
                                                    <div class="cart-qty-input">
                                                        <Link to="/" class="qty-control left disabled" data-click="decrease-qty" data-target="#qty"><i class="fa fa-minus"></i></Link>
                                                        <input type="text" name="qty" value="1" class="form-control" id="qty" />
                                                        <Link to="/" class="qty-control right disabled" data-click="increase-qty" data-target="#qty"><i class="fa fa-plus"></i></Link>
                                                    </div>
                                                    <div class="qty-desc">1 to max order</div>
                                                </td>
                                                <td class="cart-total text-center">
                                                    $999.00
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="cart-summary" colspan="4">
                                                    <div class="summary-container">
                                                        <div class="summary-row">
                                                            <div class="field">Cart Subtotal</div>
                                                            <div class="value">$999.00</div>
                                                        </div>
                                                        <div class="summary-row text-danger">
                                                            <div class="field">Free Shipping</div>
                                                            <div class="value">$0.00</div>
                                                        </div>
                                                        <div class="summary-row total">
                                                            <div class="field">Total</div>
                                                            <div class="value">$999.00</div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="checkout-footer d-flex">
                                <Link to="/" class="btn btn-white btn-lg me-auto btn-theme w-250px">CONTINUE SHOPPING</Link>
                                <button type="submit" class="btn btn-dark btn-lg btn-theme w-250px">CHECKOUT</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckoutCart