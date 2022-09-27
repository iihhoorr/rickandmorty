import React from "react";
import styles from "./index.module.css";

const ListInput = ({ onChange, value, error, placeholder }) => (
	<div className={styles.list}>
		<input
			type="text"
			id={"list_input"}
			placeholder={placeholder}
			className={`input ${styles.listInput}  ${error && "errorInput"}`}
			value={value}
			onChange={e => onChange(e.target.value)}
		/>
	</div>
);

export default ListInput;
