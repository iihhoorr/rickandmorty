import React from "react";
import { Link } from "react-router-dom";
import styles from "./Details.module.css";

const DetailsLabel = ({ label, value, route }) => (
	<div className={styles.companyNameContainer}>
		<span className={styles.label}>{label}</span>
		{route ? (
			<Link to={route} className={styles.forgotPassword}>
				<span className={styles.HyperLinkName}>{value}</span>
			</Link>
		) : (
			<span className={styles.companyName}>{value}</span>
		)}
	</div>
);

export default DetailsLabel;
