import React from 'react'

const MobileListProduct = (props) => {
    return (
        <>
            {/* BEGIN item */}
            <div className="item item-thumbnail">
                <a href="product_detail.html" className="item-image">
                    <img src={props.product.images[0].url} alt="" />
                    <div className="discount">15% OFF</div>
                </a>
                <div className="item-info">
                    <h4 className="item-title">
                        <a href="product_detail.html">{props.product.name}</a>
                    </h4>
                    {/* <p className="item-desc">{props.product.description}</p> */}
                    <div className="item-price">${props.product.price}</div>
                    <div className="item-discount-price">${props.product.price}</div>
                </div>
            </div>
            {/* END item */}

        </>
    )
}

export default MobileListProduct