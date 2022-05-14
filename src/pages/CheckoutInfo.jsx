import React from 'react'
import { Link } from 'react-router-dom'

const CheckoutInfo = () => {
	return (
		<>
			<div class="section-container" id="checkout-info">
				<div class="container">
					<div class="checkout">
						<form action="checkout_payment.html" method="GET" name="form_shipping" class="form-horizontal">
							<div class="checkout-header">
								<div class="row">
									<div class="col-lg-3">
										<div class="step">
											<a href="checkout_cart.html">
												<div class="number">1</div>
												<div class="info">
													<div class="title">Delivery Options</div>
													<div class="desc">Lorem ipsum dolor sit amet.</div>
												</div>
											</a>
										</div>
									</div>
									<div class="col-lg-3">
										<div class="step active">
											<Link to="/">
												<div class="number">2</div>
												<div class="info">
													<div class="title">Shipping Address</div>
													<div class="desc">Vivamus eleifend euismod.</div>
												</div>
											</Link>
										</div>
									</div>
									<div class="col-lg-3">
										<div class="step">
											<Link to="/">
												<div class="number">3</div>
												<div class="info">
													<div class="title">Payment</div>
													<div class="desc">Aenean ut pretium ipsum. </div>
												</div>
											</Link>
										</div>
									</div>
									<div class="col-lg-3">
										<div class="step">
											<Link to="/">
												<div class="number">4</div>
												<div class="info">
													<div class="title">Complete Payment</div>
													<div class="desc">Curabitur interdum libero.</div>
												</div>
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div class="checkout-body">
								<div class="mb-2 row">
									<label class="col-form-label col-md-4 text-lg-end">
										First Name <span class="text-danger">*</span>
									</label>
									<div class="col-md-4">
										<input type="text" class="form-control" name="first_name" value="" placeholder="" />
									</div>
								</div>
								<div class="mb-2 row">
									<label class="col-form-label col-md-4 text-lg-end">
										Last Name <span class="text-danger">*</span>
									</label>
									<div class="col-md-4">
										<input type="text" class="form-control" name="last_name" value="" placeholder="" />
									</div>
								</div>
								<div class="mb-2 row">
									<label class="col-form-label col-md-4 text-lg-end">
										Company Name (optional)<span class="text-danger">&nbsp;</span>
									</label>
									<div class="col-md-8">
										<input type="text" class="form-control" name="company_name" value="" placeholder="" />
									</div>
								</div>
								<div class="mb-2 row">
									<label class="col-form-label col-md-4 text-lg-end">
										Area Code <span class="text-danger">*</span>
									</label>
									<div class="col-md-4">
										<input type="text" class="form-control" name="area_code" value="" placeholder="" />
									</div>
								</div>
								<div class="mb-2 row">
									<label class="col-form-label col-md-4 text-lg-end">
										Primary Phone <span class="text-danger">*</span>
									</label>
									<div class="col-md-4">
										<input type="text" class="form-control" name="primary_phone" value="" placeholder="" />
									</div>
								</div>
								<div class="mb-2 row">
									<label class="col-form-label col-md-4 text-lg-end">
										Street Address <span class="text-danger">*</span>
									</label>
									<div class="col-md-4">
										<input type="text" class="form-control mb-10px" name="address_1" value="" placeholder="" />
										<input type="text" class="form-control" name="address_2" value="" placeholder="" />
									</div>
								</div>
								<div class="mb-2 row">
									<label class="col-form-label col-md-4 text-lg-end">
										ZIP Code<span class="text-danger">*</span>
									</label>
									<div class="col-md-4">
										<input type="text" class="form-control" name="zip_code" value="" placeholder="" />
										<p class="form-text mb-0 fs-12px text-muted f-w-600 mt-10px">Enter ZIP for City and State ZIP Code</p>
									</div>
								</div>
								<div class="mb-2 row">
									<label class="col-form-label col-md-4">
										&nbsp;
									</label>
									<div class="col-md-4">
										<div class="form-check">
											<input type="checkbox" class="form-check-input" id="business_address" name="business_address" value="1" />
											<label class="form-check-label" for="business_address">
												This is a business address
												<a href="#" class="ms-5px text-muted" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" data-title="This helps us choose the best shipping method for you. Business shipments are normally delivered on weekdays by 5:00 p.m. local time. Residential shipments are normally delivered Monday - Saturday by 8:00 p.m. local time.">
													<i class="fa fa-question-circle"></i>
												</a>
											</label>
										</div>
									</div>
								</div>
								<hr />
								<div class="mb-5px"><b>Shipping Policy</b></div>
								<ul class="checkout-info-list">
									<li>Signature may be required for delivery</li>
									<li>We do not ship to P.O. boxes</li>
									<li>Delivery estimates below include item preparation and shipping time</li>
									<li>We do not ship directly to APO/FPO addresses.</li>
								</ul>
							</div>
							<div class="checkout-footer d-flex">
								<a href="checkout_cart.html" class="btn btn-white btn-theme me-auto">BACK</a>
								<button type="submit" class="btn btn-dark btn-theme ms-10px">CONTINUE</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default CheckoutInfo