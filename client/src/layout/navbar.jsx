import { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "@/constants";
import { logo } from "@/assets";
import "./styles/navbar.scss";

export const Navbar = () => {
	const [toggler, setToggler] = useState(false);

	const handleToggler = () => {
		setToggler((t) => !t);
	};

	return (
		<nav className="navbar-section">
			<div className="logo-section">
				<img src={logo} alt="logo" />
			</div>

			<div className="desktop-links">
				<ul>
					{links.map(({ name, path }) => (
						<li key={path}>
							<Link to={path}>{name}</Link>
						</li>
					))}
				</ul>
			</div>

			<i className={`fa fa-bars  ${toggler ? "open" : ""}`} onClick={handleToggler} />

			<div className={`mobile-links ${toggler ? "open" : ""}`}>
				<i className="fa fa-times" onClick={handleToggler} />
				<ul>
					{links.map((link) => (
						<li key={link.path} onClick={handleToggler}>
							{link.name}
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};
