import React from "react";
import Checkbox from "../../Checkbox";
import styles from "../index.module.css";

const SelectIcon = ({ children, activ, onChange, id }) => {
	// const activ = removeArray.some(item => item === params.record.email);
	return (
		<div className={styles.checkBoxContainer}>
			<Checkbox disable={activ} color={"#C9D7D8"} onChange={onChange} id={id} />
			<div className={styles.separator} />
			{children}
		</div>
	);
};

export default SelectIcon;
