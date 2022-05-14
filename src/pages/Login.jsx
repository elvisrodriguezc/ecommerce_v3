// UseForm
import { useForm } from 'react-hook-form';
// React-Router
import { Link, Navigate } from 'react-router-dom';
//Redux
import { fetchLogin } from "../Reducer/Slices/loginSlice.js";
import { useSelector, useDispatch } from "react-redux";
import "../assets/style/login.css"

const Login = () => {
	const { register, handleSubmit } = useForm();
	// useLocalStorage is a custom hook that allows you to store data in localStorage
	//Redux
	const dispatch = useDispatch();
	// we destructurate the state from the store and we get the login state
	const { isLogged } = useSelector(state => state.login);
	//We import data from the API from the login form entry
	const onSubmit = (data) => {
		dispatch(fetchLogin(data));
	}
	if (!!isLogged) {
		return <Navigate to='/main' />;
	}

	return (
		<>
			<div className="login-img" style={{ backgroundImage: 'url(./assets/img/login-bg/login-bg-13.jpg)' }}>
				<div className="login-bg" >
					<div className="login login-v2 fw-bold">
						<div className="login-container">
							<div className="login-header">
								<div className="brand mb-5">
									<div className="d-flex align-items-center">
										<span className="logo"></span> <b>ECommerce</b> Academlo
									</div>
									<small>React Course Final Project </small>
								</div>
								<div className="icon">
									<i className="fa fa-lock"> </i>
								</div>
							</div>

							<div className="login-content">
								<form onSubmit={handleSubmit(onSubmit)}>
									<div className="form-floating mb-20px">
										<input
											type="email"
											className="form-control fs-13px h-45px border-0"
											placeholder="Email Address"
											id="emailAddress"
											autoComplete='off'
											value="elvisrodriguezc@gmail.com"
											{...register("email", { required: true })}
										/>
										<label
											htmlFor="emailAddress"
											className="d-flex align-items-center text-gray-600 fs-13px">Email Address
										</label>
									</div>
									<div className="form-floating mb-20px">
										<input
											type="password"
											className="form-control fs-13px h-45px border-0"
											placeholder="Password"
											id='password'
											value="Ee40486773.*"
											{...register("password", { required: true })}
										/>
										<label
											htmlFor="password"
											className="d-flex align-items-center text-gray-600 fs-13px">Password
										</label>
									</div>
									<div className="form-check mb-20px">
										<input className="form-check-input border-0" type="checkbox" value="1" id="rememberMe" />
										<label className="form-check-label fs-13px text-gray-500" htmlFor="rememberMe">
											Remember Me
										</label>
									</div>
									<div className="mb-20px">
										<button type="submit" className="btn btn-success d-block w-100 h-45px btn-lg">Sign me in</button>
									</div>
									<div className="text-gray-500">
										Not a member yet? Click <Link to="/SignUp">here</Link> to register.
									</div>
								</form>
							</div>
							{
								isLogged ? <div className="card border-0 bg-indigo text-white text-center">
									<div className="card-body">
										<blockquote className="blockquote mb-0">
											<p>Welcome Back </p>
											<footer className="blockquote-footer text-white">We are ready to fly.</footer>
										</blockquote>
									</div>
								</div> : ""
							}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}



export default Login;