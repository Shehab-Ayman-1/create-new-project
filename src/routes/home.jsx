import React, { useState } from "react";
import { ReactLogo, ViteLogo } from "assets";
import useContext, { GET_ALL } from "context";

export const Home = () => {
	const [count, setCount] = useState(0);
	const [state, dispatch] = useContext();

	const fetchData = () => {
		GET_ALL(dispatch, "");
	};

	const handleCount = async () => {
		const { defaultState } = await state;
		setCount((c) => c + 1);
		fetchData();
		console.log(defaultState);
	};

	return (
		<div className="App">
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={ViteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank">
					<img src={ReactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={handleCount}>count is {count}</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</div>
	);
};
