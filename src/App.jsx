import { Routes, Route } from "react-router-dom";
import { Home } from "routes";

function App() {
	return (
		<Routes>
			<Route path="*" element="<h1>Route Not Defined</h1>" />
			<Route path="/" element={<Home />} />
		</Routes>
	);
}

export default App;
