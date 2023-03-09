import "assets/scss/_index.scss";
import "assets/fonts/fontAwasome.css";
import "assets/index.css";
import "assets/app.css";
import React from "assets/images/react.svg";
import Vite from "assets/images/vite.svg";
import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);
	return (
		<div className="App">
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={Vite} className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank">
					<img src={React} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</div>
	);
}

export default App;
