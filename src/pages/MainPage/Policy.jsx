import React from 'react'

const Policy = () => {
    return (
        <>
            <div id="policy" className="section-container bg-white">
                {/* BEGIN container */}
                <div className="container">
                    {/* BEGIN row */}
                    <div className="row">
                        {/* BEGIN col-4 */}
                        <div className="col-lg-4 col-md-4 mb-4 mb-md-0">
                            {/* BEGIN policy */}
                            <div className="policy">
                                <div className="policy-icon"><i className="fa fa-truck"></i></div>
                                <div className="policy-info">
                                    <h4>Free Delivery Over $100</h4>
                                    <p>To your home, office or any place where you tell us.</p>
                                </div>
                            </div>
                            {/* END policy */}
                        </div>
                        {/* END col-4 */}
                        {/* BEGIN col-4 */}
                        <div className="col-lg-4 col-md-4 mb-4 mb-md-0">
                            {/* BEGIN policy */}
                            <div className="policy">
                                <div className="policy-icon"><i className="fa fa-umbrella"></i></div>
                                <div className="policy-info">
                                    <h4>1 Year Warranty For al  Jewells</h4>
                                    <p>We give you a warranty certificate. <br />Academlo Jewelry.</p>
                                </div>
                            </div>
                            {/* END policy */}
                        </div>
                        {/* END col-4 */}
                        {/* BEGIN col-4 */}
                        <div className="col-lg-4 col-md-4">
                            {/* BEGIN policy */}
                            <div className="policy">
                                <div className="policy-icon"><i className="fa fa-user-md"></i></div>
                                <div className="policy-info">
                                    <h4>6 Month Warranty For Accessories</h4>
                                    <p>All products, have high durability tested under the higness standart.</p>
                                </div>
                            </div>
                            {/* END policy */}
                        </div>
                        {/* END col-4 */}
                    </div>
                    {/* END row */}
                </div>
                {/* END container */}
            </div>
        </>
    )
}

export default Policy