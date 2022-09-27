import React from "react";
import { CheckboxIcon } from "../../assets/icons/CheckboxIcon";
import styles from "./index.module.css";

const Checkbox = ({ onChange, disable, color, label, marginLeft, marginTop, width, height, id }) => (
	<div className={styles.container} style={{ marginLeft: `${marginLeft}`, marginTop: `${marginTop}` }}>
		<button
			onClick={onChange}
			className={styles.wrapper}
			id={id}
			style={{ borderColor: `${color}`, width: `${width}`, height: `${height}` }}>
			{disable && <CheckboxIcon color={color} />}
		</button>
		{label && (
			<span className={styles.label} style={{ color }}>
				{label}
			</span>
		)}
	</div>
);

Checkbox.defaultProps = {
	label: "",
	onChange: () => {},
	disable: false,
	color: undefined,
	marginLeft: "0px",
	marginTop: "0px",
	width: "14px",
	height: "14px",
};

export default Checkbox;
