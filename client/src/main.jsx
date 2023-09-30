import ReactDOM from "react-dom/client";
import { App } from "./App";
import { inject } from "@vercel/analytics";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import { Provider } from "react-redux";
import { store } from "@/redux";
import "@/assets/sass/index.scss";
import "@/assets/fonts/fontAwasome.css";

if (import.meta.env.MODE === "production") inject();
if (import.meta.env.MODE === "production") disableReactDevTools();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
