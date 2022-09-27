import React from "react";
import styles from "../MyWatchListComponent.module.css";

const MyWatchListHeader = ({ total }) => {
	return (
		<div className={styles.watchListHeaderContainer}>
			<span className={styles.headerTitle}>My watch list</span>
			<span className={styles.headerTotalText}>
				Total list count: <span className={styles.headerTotalCountText}>{total}</span>
			</span>
		</div>
	);
};

export default MyWatchListHeader;
