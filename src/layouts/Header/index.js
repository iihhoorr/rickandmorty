import React from "react";

import styles from "./HeaderComponents.module.css";
import HeaderLogo from "../../assets/icons/HeaderLogo.svg";
import PecodeLogo from "../../assets/icons/PecodeLogo.svg";
import Logo from "./HeaderLogo";

const HeaderComponents = () => {
	return(
	<div className={styles.container}>
		<Logo item={HeaderLogo} />
		<div>
			<span className={styles.headerTitle}>Rick and Morty test task</span>
		</div>
		<Logo item={PecodeLogo} />
	</div>
)}

export default HeaderComponents;
