import React from "react";
import styles from "./index.module.css";

const NotFound = () => (
	<div className={styles.container}>
		<p className={styles.title}>404</p>
		<p className={styles.subTitle}>Not Found</p>
		<p className={styles.text}>The resource requested could not be found on this server!</p>
	</div>
);

export default NotFound;
