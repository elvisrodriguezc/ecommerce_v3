import React from 'react'

const Promotions = (props) => {
    console.log(props)
    return (
        <>
            <div id="promotions" className="section-container bg-white">
                {/* BEGIN container */}
                <div className="container">
                    {/* BEGIN section-title */}
                    <h4 className="section-title clearfix">
                        <span className="flex-1">
                            Exclusive promotions
                            <small>from 09 May 2022 - 1 June 2022</small>
                        </span>
                        <a href="#" className="btn">SHOW ALL</a>
                    </h4>
                    {/* END section-title */}
                    {/* BEGIN row */}
                    <div className="row gx-2">
                        {/* BEGIN col-6 */}
                        <div className="col-lg-6">
                            {/* BEGIN promotion */}
                            <div className="promotion promotion-lg bg-gray-200">
                                <div className="promotion-image text-end promotion-image-overflow-bottom">
                                    <img src={props.promotions[0].images[0].url} alt="" />
                                </div>
                                <div className="promotion-caption text-center">
                                    <h4 className="promotion-title">{props.promotions[0].name}</h4>
                                    <div className="promotion-price"><small>from</small> ${props.promotions[0].price}</div>
                                    <p className="promotion-desc">A big step for small.<br />A beloved design. Now with more to
                                        love.</p>
                                    <a href="#" className="promotion-btn">View More</a>
                                </div>
                            </div>
                            {/* END promotion */}
                        </div>
                        {/* END col-6 */}
                        {/* BEGIN col-3 */}
                        <div className="col-lg-3 col-md-6">
                            {/* BEGIN promotion */}
                            <div className="promotion bg-gray-200">
                                <div className="promotion-image promotion-image-overflow-bottom promotion-image-overflow-top">
                                    <img src={props.promotions[1].images[0].url} alt="" />
                                </div>
                                <div className="promotion-caption text-end">
                                    <h4 className="promotion-title">{props.promotions[1].name}</h4>
                                    <div className="promotion-price"><small>from</small> ${props.promotions[1].price}</div>
                                    <a href="#" className="promotion-btn">View More</a>
                                </div>
                            </div>
                            {/* END promotion */}
                            {/* BEGIN promotion */}
                            <div className="promotion bg-gray-200">
                                <div className="promotion-image text-end promotion-image-overflow-bottom">
                                    <img src={props.promotions[2].images[0].url} alt="" />
                                </div>
                                <div className="promotion-caption text-end">
                                    <h4 className="promotion-title">{props.promotions[2].name}</h4>
                                    <div className="promotion-price"><small>from</small> ${props.promotions[0].price}</div>
                                    <a href="#" className="promotion-btn">View More</a>
                                </div>
                            </div>
                            {/* END promotion */}
                        </div>
                        {/* END col-3 */}
                        {/* BEGIN col-3 */}
                        <div className="col-lg-3 col-md-6">
                            {/* BEGIN promotion */}
                            <div className="promotion bg-gray-200">
                                <div
                                    className="promotion-image promotion-image-overflow-right promotion-image-overflow-bottom text-start">
                                    <img src={props.promotions[3].images[0].url} alt="" />
                                </div>
                                <div className="promotion-caption text-end">
                                    <h4 className="promotion-title">{props.promotions[3].name}</h4>
                                    <div className="promotion-price"><small>from</small> ${props.promotions[0].price}</div>
                                    <p className="promotion-desc">Redesigned. Rechargeable. Remarkable.</p>
                                    <a href="#" className="promotion-btn">View More</a>
                                </div>
                            </div>
                            {/* END promotion */}
                            {/* BEGIN promotion */}
                            <div className="promotion bg-gray-200">
                                <div className="promotion-image text-start">
                                    <img src={props.promotions[4].images[0].url} alt="" />
                                </div>
                                <div className="promotion-caption text-end">
                                    <h4 className="promotion-title">{props.promotions[4].name}</h4>
                                    <div className="promotion-price"><small>from</small> ${props.promotions[4].price}</div>
                                    <p className="promotion-desc">Built for creativity on an epic scale.</p>
                                    <a href="#" className="promotion-btn">View More</a>
                                </div>
                            </div>
                            {/* END promotion */}
                        </div>
                        {/* END col-3 */}
                    </div>
                    {/* END row */}
                </div>
                {/* END container */}
            </div>
        </>
    )
}

export default Promotions