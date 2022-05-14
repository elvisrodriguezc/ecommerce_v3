import React from 'react'

const FooterLatest = (props) => {
    return (
        <>
            <li>
                <div className="image">
                    <img src={props.product.images[0].url} alt="" style={{ height: "40px" }} />
                </div>
                <div className="info">
                    <h4 className="info-title">{props.product.name}</h4>
                    <div className="price">$ {props.product.price}</div>
                </div>
            </li>
        </>
    )
}

export default FooterLatest