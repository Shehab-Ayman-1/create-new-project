import { useEffect, useState } from "react";
import { INCREAMENT, DECREAMENT } from "@/context";
import useContext from "@/context";

export const Home = () => {
	const { state, dispatch } = useContext();
	const [count, setCount] = useState(0);

	useEffect(() => {
		(async () => {
			const { count } = await state;
			setCount((c) => (c = count));
		})();
	}, [state]);

	return (
		<main>
			<h1 style={{ textAlign: "center", marginTop: "100px" }}>Vite + React</h1>
			<h3 style={{ textAlign: "center" }}>count: {count}</h3>
			<div className="flex">
				<button className="mybtn" style={{ margin: "auto" }} onClick={() => dispatch(INCREAMENT())}>
					Increatement
				</button>
				<button className="mybtn" style={{ margin: "auto" }} onClick={() => dispatch(DECREAMENT())}>
					Decreatement
				</button>
			</div>
		</main>
	);
};
