import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import TopNav from '../components/TopNav'
import Header from '../components/Header'
import Footer from '../components/Footer'
//Redux
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from '../Reducer/Slices/prodSlice'
import { Link } from 'react-router-dom'

const ProductDetail = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const { id } = params
    const { products } = useSelector(state => state.ecommerce)
    const product = products.find(product => product.id === parseInt(id))
    let navigate = useNavigate()
    const handleAddToCart = (id) => {
        let data = { id: id, quantity: 1 }
        dispatch(addToCart(data))
        navigate("/", { replace: true });
    }
    return (
        <>
            <TopNav />
            <Header />
            <div className="product">
                <div className="product-detail">
                    <div className="product-image">
                        <div className="product-thumbnail">
                            <ul className="product-thumbnail-list" style={{ overflow: 'none' }}>
                                {product.images.map((image, index) => (
                                    <li key={index}>
                                        <Link to="/" data-click="show-main-image" data-url={image.url}><img src={image.url} alt="" /></Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="product-main-image" data-id="main-image">
                            <img src={product.images[0].url} alt="" />
                        </div>
                    </div>
                    <div className="product-info">
                        <div className="product-info-header">
                            <h1 className="product-title"><span className="badge bg-primary">41% OFF</span> {product.name} </h1>
                        </div>
                        <div className="product-warranty">
                            <div className="pull-right">Availability: In stock</div>
                            <div><b>1 Year</b> Local Manufacturer Warranty</div>
                        </div>
                        <ul className="product-info-list">
                            <li><i className="fa fa-circle"></i> {product.description}</li>
                        </ul>
                        <div className="product-social">
                            <ul>
                                <li><Link to="/" className="facebook" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-title="Facebook" data-bs-placement="top"><i className="fab fa-facebook-f"></i></Link></li>
                            </ul>
                        </div>
                        <div className="product-purchase-container">
                            <div className="product-discount">
                                <span className="discount">${(product.price * 1.41).toFixed(2)}</span>
                            </div>
                            <div className="product-price">
                                <div className="price">${product.price}</div>
                            </div>
                            <button className="btn btn-dark btn-theme btn-lg w-200px" onClick={() => handleAddToCart(product.id)}>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
            <h4 className="mb-15px mt-30px">You Might Also Like</h4>
            <div className="row gx-2">
                <div className="col-lg-2 col-md-4">
                    <div className="item item-thumbnail">
                        <Link to="/" className="item-image">
                            <img src="../assets/img/product/product-iphone.png" alt="" />
                            <div className="discount">15% OFF</div>
                        </Link>
                        <div className="item-info">
                            <h4 className="item-title">
                                <a href="product_detail.html">iPhone 6s Plus<br />16GB</a>
                            </h4>
                            <p className="item-desc">3D Touch. 12MP photos. 4K video.</p>
                            <div className="item-price">$649.00</div>
                            <div className="item-discount-price">$739.00</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4">
                    <div className="item item-thumbnail">
                        <Link to="/" className="item-image">
                            <img src="../assets/img/product/product-samsung-note5.png" alt="" />
                            <div className="discount">32% OFF</div>
                        </Link>
                        <div className="item-info">
                            <h4 className="item-title">
                                <a href="product.html">Samsung Galaxy Note 5<br />Black</a>
                            </h4>
                            <p className="item-desc">Super. Computer. Now in two sizes.</p>
                            <div className="item-price">$599.00</div>
                            <div className="item-discount-price">$799.00</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4">
                    <div className="item item-thumbnail">
                        <Link to="/" className="item-image">
                            <img src="../assets/img/product/product-iphone-se.png" alt="" />
                            <div className="discount">20% OFF</div>
                        </Link>
                        <div className="item-info">
                            <h4 className="item-title">
                                <a href="product.html">iPhone SE<br />32/64Gb</a>
                            </h4>
                            <p className="item-desc">A big step for small.</p>
                            <div className="item-price">$499.00</div>
                            <div className="item-discount-price">$599.00</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4">
                    <div className="item item-thumbnail">
                        <Link to="/" className="item-image">
                            <img src="../assets/img/product/product-zenfone2.png" alt="" />
                            <div className="discount">15% OFF</div>
                        </Link>
                        <div className="item-info">
                            <h4 className="item-title">
                                <Link to="/">Assus ZenFone 2<br />‏(ZE550ML)</Link>
                            </h4>
                            <p className="item-desc">See What Others Can’t See</p>
                            <div className="item-price">$399.00</div>
                            <div className="item-discount-price">$453.00</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4">
                    <div className="item item-thumbnail">
                        <Link to="/" className="item-image">
                            <img src="../assets/img/product/product-xperia-z.png" alt="" />
                            <div className="discount">32% OFF</div>
                        </Link>
                        <div className="item-info">
                            <h4 className="item-title">
                                <Link to="/">Sony Xperia Z<br />Black Color</Link>
                            </h4>
                            <p className="item-desc">For unexpectedly beautiful moments</p>
                            <div className="item-price">$599.00</div>
                            <div className="item-discount-price">$799.00</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4">
                    <div className="item item-thumbnail">
                        <Link to="/" className="item-image">
                            <img src="../assets/img/product/product-lumia-532.png" alt="" />
                            <div className="discount">20% OFF</div>
                        </Link>
                        <div className="item-info">
                            <h4 className="item-title">
                                <a href="product.html">Microsoft Lumia 531<br />Smartphone Orange</a>
                            </h4>
                            <p className="item-desc">1 Year Local Manufacturer Warranty</p>
                            <div className="item-price">$99.00</div>
                            <div className="item-discount-price">$199.00</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductDetail