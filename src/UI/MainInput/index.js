import React from "react";
import styles from "./index.module.css";

const MainInput = ({ onChange, value, error, onFocus, id, placeholder, onBlur, disabled }) => {
	return (
		<div className={styles.inputMainContainer}>
			<input
				type="text"
				disabled={disabled}
				id={id}
				placeholder={placeholder}
				autoComplete="off"
				className={`input ${styles.mainInput} ${disabled && styles.disabled} ${error && "errorInput"}`}
				value={value}
				onFocus={onFocus}
				onBlur={onBlur}
				onChange={e => onChange(e.target.value)}
			/>
			{error && (
				<div id={error} className={styles.errorText}>
					<span className="invalidValue">{error}</span>
				</div>
			)}
		</div>
	);
};

MainInput.defaultProps = {
	onBlur: () => {},
	value: "",
	onChange: () => {},
	error: "",
	placeholder: "",
	onFocus: () => {},
	disabled: false,
};

export default MainInput;
