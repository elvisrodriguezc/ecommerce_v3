import React from 'react'
import FooterLatest from './FooterLatest'
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";


const Footer = (props) => {
    const { latest } = useSelector(state => state.ecommerce);

    return (
        <>
            <div id="footer" className="footer">
                {/* BEGIN container */}
                <div className="container">
                    {/* BEGIN row */}
                    <div className="row">
                        {/* BEGIN col-3 */}
                        <div className="col-lg-3">
                            <h4 className="footer-header">ABOUT US</h4>
                            <p>
                                You don't even have to know what the gold karatage is. Just sign up and get a packet and send your unwanted gold and platinum jewelry to us. We'll inspect, clean, sort, weigh and ascertain what it's worth in today's market.
                            </p>
                            <p className="mb-lg-4 mb-0">
                                After we determine the value of your jewelry, we'll email you our payment amount.
                            </p>
                        </div>
                        {/* END col-3 */}
                        {/* BEGIN col-3 */}
                        <div className="col-lg-3">
                            <h4 className="footer-header">RELATED LINKS</h4>
                            <ul className="fa-ul mb-lg-4 mb-0 p-0">
                                <li><i className="fa fa-fw fa-angle-right"></i> <Link to="/main" >Shopping Help</Link></li>
                                <li><i className="fa fa-fw fa-angle-right"></i> <Link to="/main" >Terms of Use</Link></li>
                                <li><i className="fa fa-fw fa-angle-right"></i> <Link to="/main" >Contact Us</Link></li>
                                <li><i className="fa fa-fw fa-angle-right"></i> <Link to="/main" >Careers</Link></li>
                                <li><i className="fa fa-fw fa-angle-right"></i> <Link to="/main" >Payment Method</Link></li>
                                <li><i className="fa fa-fw fa-angle-right"></i> <Link to="/main" >Sales & Refund</Link></li>
                                <li><i className="fa fa-fw fa-angle-right"></i> <Link to="/main" >Sitemap</Link></li>
                                <li><i className="fa fa-fw fa-angle-right"></i> <Link to="/main" >Privacy & Policy</Link></li>
                            </ul>
                        </div>
                        {/* END col-3 */}
                        {/* BEGIN col-3 */}
                        <div className="col-lg-3">
                            <h4 className="footer-header">LATEST PRODUCT</h4>
                            <ul className="list-unstyled list-product mb-lg-4 mb-0 p-0">
                                {latest.map((product, index) => {
                                    return (
                                        <FooterLatest key={index} product={product} />
                                    )
                                })}
                            </ul>
                        </div>
                        {/* END col-3 */}
                        {/* BEGIN col-3 */}
                        <div className="col-lg-3">
                            <h4 className="footer-header">OUR CONTACT</h4>
                            <address className="mb-lg-4 mb-0">
                                <strong>Twitter, Inc.</strong><br />
                                1355 Market Street, Suite 900<br />
                                San Francisco, CA 94103<br /><br />
                                <abbr title="Phone">Phone:</abbr> (123) 456-7890<br />
                                <abbr title="Fax">Fax:</abbr> (123) 456-7891<br />
                                <abbr title="Email">Email:</abbr> <a
                                    href="mailto:sales@myshop.com">sales@myshop.com</a><br />
                                <abbr title="Skype">Skype:</abbr> <a href="skype:myshop">myshop</a>
                            </address>
                        </div>
                        {/* END col-3 */}
                    </div>
                    {/* END row */}
                </div>
                {/* END container */}
            </div>
            {/* END #footer */}

            {/* BEGIN #footer-copyright */}
            <div id="footer-copyright" className="footer-copyright">
                {/* BEGIN container */}
                <div className="container">
                    <div className="payment-method">
                        <img src="../assets/img/payment/payment-method.png" alt="" />
                    </div>
                    <div className="copyright">
                        Copyright &copy; 2021 SeanTheme. All rights reserved.
                    </div>
                </div>
                {/* END container */}
            </div>
        </>
    )
}

export default Footer