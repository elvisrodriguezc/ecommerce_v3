import React from 'react'
import { Link } from 'react-router-dom';

const TopNav = () => {
    return (
        <>
            <div id="top-nav" className="top-nav">
                {/* BEGIN container */}
                <div className="container">
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            {/* BEGIN languaje dropdawn */}
                            <li className="dropdown dropdown-hover">
                                <Link to="/main"  data-bs-toggle="dropdown"><img src="../assets/img/flag/flag-english.png"
                                    className="flag-img" alt="" /> English <b className="caret"></b></Link>
                                <ul className="dropdown-menu">
                                    <li><Link to="/main"  className="dropdown-item"><img src="../assets/img/flag/flag-english.png"
                                        className="flag-img" alt="" /> English</Link></li>
                                    <li><Link to="/main"  className="dropdown-item"><img src="../assets/img/flag/flag-german.png"
                                        className="flag-img" alt="" /> German</Link></li>
                                    <li><Link to="/main"  className="dropdown-item"><img src="../assets/img/flag/flag-spanish.png"
                                        className="flag-img" alt="" /> Spanish</Link></li>
                                    <li><Link to="/main"  className="dropdown-item"><img src="../assets/img/flag/flag-french.png"
                                        className="flag-img" alt="" /> French</Link></li>
                                    <li><Link to="/main"  className="dropdown-item"><img src="../assets/img/flag/flag-chinese.png"
                                        className="flag-img" alt="" /> Chinese</Link></li>
                                </ul>
                            </li>
                            {/* END language dropdown */}
                            <li><Link to="/main" >Customer Care</Link></li>
                            <li><Link to="/main" >Order Tracker</Link></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-end">
                            <li><Link to="/main" >Career</Link></li>
                            <li><Link to="/main" >Our Forum</Link></li>
                            <li><Link to="/main" >Newsletter</Link></li>
                            <li><Link to="/main" ><i className="fab fa-facebook-f f-s-14"></i></Link></li>
                            <li><Link to="/main" ><i className="fab fa-twitter f-s-14"></i></Link></li>
                            <li><Link to="/main" ><i className="fab fa-instagram f-s-14"></i></Link></li>
                            <li><Link to="/main" ><i className="fab fa-dribbble f-s-14"></i></Link></li>
                            <li><Link to="/main" ><i className="fab fa-google f-s-14"></i></Link></li>
                        </ul>
                    </div>
                </div>
                {/* END container */}
            </div>
        </>
    )
}

export default TopNav