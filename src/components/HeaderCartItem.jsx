import React from 'react'
import { Link } from 'react-router-dom';
//Redux
import { deleteCartItem } from "../Reducer/Slices/prodSlice.js";
import { useDispatch } from "react-redux";

const HeaderCartItem = ({ item }) => {
    const dispatch = useDispatch();
    const handleDeleteCartItem = (id) => {
        console.log(id);
        dispatch(deleteCartItem(id));
    }
    return (
        <>
            <li>
                <div className="cart-item-image">
                    <img src={item.product.images[0].url} alt="" /></div>
                <div className="cart-item-info">
                    <h4> {item.product.name}</h4>
                    <p className="price">{item.quantity}x ${item.product.price}</p>
                </div>
                <div className="cart-item-close">
                    <Link to="/" data-bs-toggle="tooltip"
                        data-bs-title="Remove" onClick={() => handleDeleteCartItem(item.id)}>&times;</Link>
                </div>
            </li>
        </>
    )
}

export default HeaderCartItem