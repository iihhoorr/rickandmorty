import React from "react";
import styles from "./Button.module.css";

const Button = ({ label, onClick, btnStyles, remove, disabled,activ,id }) => (
	<button
		type="button"
		onClick={onClick}
		id={id}
		data-testid="test-btn"
		disabled={disabled}
		className={`${styles.btn} ${btnStyles} ${remove ? styles.removeBtn : ""} ${disabled ? styles.disable : ""} ${activ ? "" : styles.notActivBtn}`}>
		{label}
	</button>
);

Button.defaultProps = {
	btnStyles: "",
	remove: false,
	disabled: false,
	onClick: () => {},
	label: "",
	activ: true,
	id: "button"
};

export default Button;
