import { Routes, Route } from "react-router-dom";
import { Home } from "@/views";

function App() {
	return (
		<Routes>
			<Route path="*" element="Route Not Defined" />
			<Route path="/" element={<Home />} />
		</Routes>
	);
}

export default App;