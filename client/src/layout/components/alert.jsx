import { Fragment } from "react";
import "./styles/alert.scss";

export const Alert = ({ message, success, error }) => {
	return (
		<div className="alert-section">
			{success && (
				<div className="success">
					<p>{message}</p>
					<i className="far fa-check-square" />
				</div>
			)}

			{error && (
				<div className="error">
					<p>{message}</p>
					<i className="fa fa-times" />
				</div>
			)}
		</div>
	);
};
