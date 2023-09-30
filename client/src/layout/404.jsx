import { _404Page } from "@/assets";
import "./styles/notfound.scss";

export const _404 = () => {
	return (
		<div className="notfound">
			<img src={_404Page} alt="404" />
		</div>
	);
};
