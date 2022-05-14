import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/style/error.css"

const Error = () => {
	return (
		<div className="error">
			<div className="error-code">404</div>
			<div className="error-content">
				<div className="error-message">We couldn't find it...</div>
				<div className="error-desc mb-4">
					The page you're looking for doesn't exist. <br />
					Perhaps, there pages will help find what you're looking for.
				</div>
				<div>
					<Link to="/" className="btn btn-success px-3">Go Home</Link>
				</div>
			</div>
		</div>
	)
}

export default Error;