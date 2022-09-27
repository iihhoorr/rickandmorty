import React from "react";
import styles from "./index.module.css";

export const DetailsCustomSeparator = () => <div className={styles.separator} />;

export const DetailsCustomRow = ({ label, value }) => (
	<div className={styles.wrapper}>
		<span className={styles.label}>{label}</span>
		<span className={styles.value}>{value}</span>
	</div>
);
