import React from 'react'
import { Link } from 'react-router-dom'

const TrendingItemsProduct = ({ product }) => {
    const link = `/product/${product.id}`
    return (
        <>
            {/* BEGIN col-2 */}
            <div className="col-lg-2 col-md-4 col-sm-6">
                {/* BEGIN item */}
                <div className="item item-thumbnail">
                    <Link to={link} className="item-image">
                        <img src={product.images[0].url} alt="" />
                        <div className="discount">15% OFF</div>
                    </Link>
                    <div className="item-info">
                        <h4 className="item-title">
                            <Link to={link}>{product.name}</Link>
                        </h4>
                        <p className="item-desc">{product.description}</p>
                        <div className="item-price">${product.price}</div>
                        <div className="item-discount-price">${((product.price) * 1.15).toFixed(2)}</div>
                    </div>
                </div>
                {/* END item */}
            </div>
            {/* END col-2 */}
        </>
    )
}

export default TrendingItemsProduct