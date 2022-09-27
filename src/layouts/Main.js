import React, { useEffect } from "react";
import AppMenu from "./Menu";
import AppSection from "./Section";
import HeaderComponents from "./Header";
import { ErrorModal } from "../UI/ErrorModal";
import styles from "./Menu.module.css";

const Main = ({ history }) => {
	useEffect(() => {
		if (history.location.pathname === "/") {
			history.push({
				pathname: "/characters",
			});
		}
	}, []);
	return (
		<div className="app-layout">
			<HeaderComponents />
			<ErrorModal />
			<div className="app-layout-content">
				<main id="wrapper" className={styles.mainContainer}>
					<AppMenu history={history} />
					<AppSection history={history} />
				</main>
			</div>
		</div>
	);
};

export default Main;
