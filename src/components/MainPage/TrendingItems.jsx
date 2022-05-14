import React from 'react'
import TrendingItemsProduct from './TrendingItemsProduct'
import { Link } from 'react-router-dom'

const TrendingItems = (props) => {
    return (
        <>
            <div id="trending-items" className="section-container">
                {/* BEGIN container */}
                <div className="container">
                    {/* BEGIN section-title */}
                    <h4 className="section-title clearfix">
                        <span className="flex-1">
                            Trending Items
                            <small>Shop and get your favourite items at amazing prices!</small>
                        </span>
                        <div className="btn-group">
                            <Link to="/main" className="btn"><i className="fa fa-angle-left fs-16px"></i></Link>
                            <Link to="/main" className="btn"><i className="fa fa-angle-right fs-16px"></i></Link>
                        </div>
                    </h4>
                    {/* END section-title */}
                    {/* BEGIN row */}
                    <div className="row gx-2">
                        {props.trendings.map((product, index) => {
                            return (
                                <TrendingItemsProduct product={product} key={index} />
                            )
                        })}
                    </div>
                    {/* END row */}
                </div>
                {/* END container */}
            </div>

        </>
    )
}

export default TrendingItems