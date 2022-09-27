import React from "react";
import styles from "./NavButton.module.css";

const NavButton = ({ resource, onClick, pathname }) => {
	const btnStyle = `${styles.container}  ${pathname.includes(resource.path) ? styles.selectBtn : undefined}`;
	return (
		<div className={btnStyle} onClick={onClick}>
			<span id={resource.name}>{resource.name}</span>
		</div>
	);
};

export default NavButton;
