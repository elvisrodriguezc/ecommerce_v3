import React from 'react'

const Slider = () => {
    return (
        <>
            <div id="slider" className="section-container p-0 bg-dark">
                {/* BEGIN carousel */}
                <div id="main-carousel" className="carousel slide" data-ride="carousel">
                    {/* BEGIN carousel-inner */}
                    <div className="carousel-inner">
                        {/* BEGIN item */}
                        <div className="bg-01 carousel-item active" data-paroller="true" data-paroller-factor="0.3"
                            data-paroller-factor-sm="0.01" data-paroller-factor-xs="0.01">
                            <div className="container">
                                <img src="../assets/img/slider/slider-1-product.png"
                                    className="product-img right bottom fadeInRight animated" alt="" />
                            </div>
                            <div className="carousel-caption carousel-caption-left">
                                <div className="container">
                                    <h3 className="title mb-5px fadeInLeftBig animated">Wedding Rings</h3>
                                    <p className="mb-15px fadeInLeftBig animated">The vision is brighter than ever.</p>
                                    <div className="price mb-30px fadeInLeftBig animated"><small>from</small>
                                        <span>$2299.00</span>
                                    </div>
                                    <a href="product_detail.html" className="btn btn-outline btn-lg fadeInLeftBig animated">Buy
                                        Now</a>
                                </div>
                            </div>
                        </div>
                        {/* END item */}
                        {/* BEGIN item */}
                        <div className="bg-02 carousel-item" data-paroller="true" data-paroller-factor="-0.3"
                            data-paroller-factor-sm="0.01" data-paroller-factor-xs="0.01">
                            <div className="container">
                                <img src="../assets/img/slider/slider-2-product.png"
                                    className="product-img left bottom fadeInLeft animated" alt="" />
                            </div>
                            <div className="carousel-caption carousel-caption-right">
                                <div className="container">
                                    <h3 className="title mb-5px fadeInRightBig animated">Cleopatra's Jewel</h3>
                                    <p className="mb-15px fadeInRightBig animated">Say hello to the luxury.</p>
                                    <div className="price mb-30px fadeInRightBig animated"><small>from</small>
                                        <span>$1,149.00</span>
                                    </div>
                                    <a href="product_detail.html" className="btn btn-outline btn-lg fadeInRightBig animated">Buy
                                        Now</a>
                                </div>
                            </div>
                        </div>
                        {/* END item */}
                        {/* BEGIN item */}
                        <div className="bg-03 carousel-item" data-paroller="true" data-paroller-factor="-0.3"
                            data-paroller-factor-sm="0.01" data-paroller-factor-xs="0.01"
                            style={{ backGround: "url(../assets/img/slider/slider-3-cover.jpg) center 0 / cover no-repeat" }}>
                            <div className="container">
                                <img src="../assets/img/slider/slider-3-product.png"
                                    className="product-img left bottom fadeInLeft animated" alt="" />
                            </div>

                            <div className="carousel-caption">
                                <div className="container">
                                    <h3 className="title mb-5px fadeInDownBig animated">Gold Necklace</h3>
                                    <p className="mb-15px fadeInDownBig animated">Thin.Light.Powerful.<br />And ready for
                                        you</p>
                                    <div className="price fadeInDownBig animated"><small>from</small> <span>$999.00</span></div>
                                    <a href="product_detail.html" className="btn btn-outline btn-lg fadeInUpBig animated">Buy
                                        Now</a>
                                </div>
                            </div>
                        </div>
                        {/* END item */}
                    </div>
                    {/* END carousel-inner */}
                    <a className="carousel-control-prev" href="#main-carousel" data-bs-slide="prev">
                        <i className="fa fa-angle-left"></i>
                    </a>
                    <a className="carousel-control-next" href="#main-carousel" data-bs-slide="next">
                        <i className="fa fa-angle-right"></i>
                    </a>
                </div>
                {/* END carousel */}
            </div></>
    )
}

export default Slider