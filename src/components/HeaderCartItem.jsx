import React from 'react'
import { Link } from 'react-router-dom';

const HeaderCartItem = () => {
    return (
        <div>
            <li>
                <div className="cart-item-image"><img
                    src="../assets/img/product/product-ipad.jpg" alt="" /></div>
                <div className="cart-item-info">
                    <h4>iPad Pro Wi-Fi 128GB - Silver</h4>
                    <p className="price">$699.00</p>
                </div>
                <div className="cart-item-close">
                    <Link to="/main" data-bs-toggle="tooltip"
                        data-bs-title="Remove">&times;</Link>
                </div>
            </li>
        </div>
    )
}

export default HeaderCartItem