import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "@/layout";

export const Wrapper = () => {
	return (
		<Fragment>
			<Navbar />
			<div className="app" style={{ marginTop: 57 }}>
				<Outlet />
			</div>
		</Fragment>
	);
};
