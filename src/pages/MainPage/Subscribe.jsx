import React from 'react'
import { Link } from 'react-router-dom'

const Subscribe = () => {
    return (
        <>
            <div id="subscribe" className="section-container">
                {/* BEGIN container */}
                <div className="container">
                    {/* BEGIN row */}
                    <div className="row">
                        {/* BEGIN col-6 */}
                        <div className="col-md-6 mb-4 mb-md-0">
                            {/* BEGIN subscription */}
                            <div className="subscription">
                                <div className="subscription-intro">
                                    <h4> LET'S STAY IN TOUCH</h4>
                                    <p>Get updates on sales specials and more</p>
                                </div>
                                <div className="subscription-form">
                                    <form name="subscription_form" action="index.html" method="POST">
                                        <div className="input-group">
                                            <input type="text" className="form-control" name="email"
                                                placeholder="Enter Email Address" />
                                            <button type="submit" className="btn btn-dark"><i
                                                className="fa fa-angle-right"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* END subscription */}
                        </div>
                        {/* END col-6 */}
                        {/* BEGIN col-6 */}
                        <div className="col-md-6">
                            {/* BEGIN social */}
                            <div className="social">
                                <div className="social-intro">
                                    <h4>FOLLOW US</h4>
                                    <p>We want to hear from you!</p>
                                </div>
                                <div className="social-list">
                                    <Link to="/main" ><i className="fab fa-facebook"></i></Link>
                                    <Link to="/main" ><i className="fab fa-twitter"></i></Link>
                                    <Link to="/main" ><i className="fab fa-instagram"></i></Link>
                                    <Link to="/main" ><i className="fab fa-dribbble"></i></Link>
                                    <Link to="/main" ><i className="fab fa-google-plus"></i></Link>
                                </div>
                            </div>
                            {/* END social */}
                        </div>
                        {/* END col-6 */}
                    </div>
                    {/* END row */}
                </div>
                {/* END container */}
            </div>
        </>
    )
}

export default Subscribe