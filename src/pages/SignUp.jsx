import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import "../assets/style/signup.css"

const SignUp = () => {
	const [localState, setLocalState] = useState({
		redirect: false
	})
	const handleSubmit = (event) => {
		event.preventDefault();
		setLocalState(state => ({
			redirect: true
		}));
	}

	if (localState.redirect) {
		return <Navigate to='/login' />;
	}

	return (
		<div className="register register-with-news-feed">
			<div className="news-feed">
				<div className="news-image" style={{ backgroundImage: 'url(/assets/img/login-bg/login-bg-15.jpg)' }}>
					<div className="news-captions">
						<h4 className="caption-title"><b>ECommerce</b> Academlo</h4>
						<p>
							Manage your business with ease, and get the most out of your business. Register now to get started, Get a free trial today.
						</p>
					</div>
				</div>
			</div>
			<div className="register-container">
				<div className="register-header mb-25px h1">
					<div className="mb-1">Sign Up</div>
					<small className="d-block fs-15px lh-16">Create your Color Admin Account. It’s free and always will be.</small>
				</div>
				<div className="register-content ">
					<form onSubmit={handleSubmit} className="fs-13px">
						<div className="mb-3">
							<label className="mb-2">Name <span className="text-danger">*</span></label>
							<div className="row gx-3">
								<div className="col-md-6 mb-2 mb-md-0">
									<input type="text" className="form-control fs-13px" placeholder="First name" />
								</div>
								<div className="col-md-6">
									<input type="text" className="form-control fs-13px" placeholder="Last name" />
								</div>
							</div>
						</div>
						<div className="mb-3">
							<label className="mb-2">Email <span className="text-danger">*</span></label>
							<input type="text" className="form-control fs-13px" placeholder="Email address" />
						</div>
						<div className="mb-3">
							<label className="mb-2">Re-enter Email <span className="text-danger">*</span></label>
							<input type="text" className="form-control fs-13px" placeholder="Re-enter email address" />
						</div>
						<div className="mb-4">
							<label className="mb-2">Password <span className="text-danger">*</span></label>
							<input type="password" className="form-control fs-13px" placeholder="Password" />
						</div>
						<div className="form-check mb-4">
							<input className="form-check-input" type="checkbox" value="" id="agreementCheckbox" />
							<label className="form-check-label" htmlFor="agreementCheckbox">
								By clicking Sign Up, you agree to our <Link to="/signup">Terms</Link> and that you have read our <Link to="/signup">Data Policy</Link>, including our <Link to="/signup">Cookie Use</Link>.
							</label>
						</div>
						<div className="mb-4">
							<button type="submit" className="btn btn-primary d-block w-100 btn-lg h-45px fs-13px">Sign Up</button>
						</div>
						<div className="mb-4 pb-5">
							Already a member? Click <Link to="/login">here</Link> to login.
						</div>
						<hr className="bg-gray-600 opacity-2" />
						<p className="text-center text-gray-600">
							&copy; All Right Reserved 2021
						</p>
					</form>
				</div>
			</div>
		</div>
	)
}

export default SignUp;