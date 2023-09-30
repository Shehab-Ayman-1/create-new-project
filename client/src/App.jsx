import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "@/views";
import { Wrapper, _404 } from "@/layout";

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Wrapper />}>
					<Route path="*" element={<_404 />} />
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
