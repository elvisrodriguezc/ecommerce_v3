import React from 'react'
import { Link } from 'react-router-dom'

const MobileListProduct = ({ product }) => {
    const link = `/product/${product.id}`
    return (
        <>
            {/* BEGIN item */}
            <div className="item item-thumbnail">
                <Link to={link} className="item-image" >
                    <img src={product.images[0].url} alt="" />
                    <div className="discount">15% OFF</div>
                </Link>
                <div className="item-info">
                    <h4 className="item-title">
                        <Link to={link}>{product.name}</Link>
                    </h4>
                    <div className="item-price">${product.price}</div>
                    <div className="item-discount-price">${product.price}</div>
                </div>
            </div>
            {/* END item */}

        </>
    )
}

export default MobileListProduct