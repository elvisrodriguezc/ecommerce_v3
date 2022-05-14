import React, { useEffect, useState } from 'react'
import MobileListCategories from './MobileListCategories'
import MobileListProduct from './MobileListProduct'
import { Link } from 'react-router-dom'

const MobileList = (props) => {
    const [productFiltered, setProductFiltered] = useState([]);
    useEffect(() => {
        setProductFiltered(props.products);
    }, [props.products])
    const handleFilter = (id) => {
        if (id === 0) {
            setProductFiltered(props.products);
        } else {
            let productFilteredTemp = [];
            productFilteredTemp = props.products.filter(product => product.category.id === id);
            setProductFiltered(productFilteredTemp)
        }
    }
    return (
        <>
            <div id="mobile-list" className="section-container pt-0">
                {/* BEGIN container */}
                <div className="container">
                    {/* BEGIN section-title */}
                    <h4 className="section-title clearfix">
                        <span className="flex-1">
                            Jewelry & Watches
                            <small>Shop and get your favourite diggest at amazing prices!</small>
                        </span>
                        <Link to="/main"  className="btn" onClick={() => handleFilter(0)} >SHOW ALL</Link>
                    </h4>
                    {/* END section-title */}
                    {/* BEGIN category-container */}
                    <div className="category-container">
                        {/* BEGIN category-sidebar */}
                        <div className="category-sidebar">
                            <ul className="category-list">
                                <li className="list-header">Top Categories</li>
                                {props.categories.map((category, index) => {
                                    return (
                                        <MobileListCategories category={category} key={index} handleFilter={() => handleFilter(category.id)} />
                                    )
                                })}
                            </ul>
                        </div>
                        {/* END category-sidebar */}
                        {/* BEGIN category-detail */}
                        <div className="category-detail">
                            {/* BEGIN category-item */}
                            <Link to="/main" className="category-item full">
                                <div className="item">
                                    <div className="item-cover">
                                        <img src="../assets/img/product/product-samsung-s7-edge.jpg" alt="" />
                                    </div>
                                    <div className="item-info bottom">
                                        <h4 className="item-title">Acquire our products in a fine trunk</h4>
                                        <p className="item-desc">Redefine what a Jewel can do</p>
                                        <div className="item-price">$38.00</div>
                                    </div>
                                </div>
                            </Link>
                            {/* END category-item */}
                            {/* BEGIN category-item */}
                            <div className="category-item list">
                                {/* BEGIN item-row */}
                                <div className="item-row">
                                    {productFiltered.length > 0 ? productFiltered.map((product, index) => {
                                        return (
                                            <MobileListProduct product={product} key={index} />
                                        )
                                    }) : <h1>No product found</h1>}
                                </div>
                                {/* END item-row */}
                            </div>
                            {/* END category-item */}
                        </div>
                        {/* END category-detail */}
                    </div>
                    {/* END category-container */}
                </div>
                {/* END container */}
            </div>
        </>
    )
}

export default MobileList