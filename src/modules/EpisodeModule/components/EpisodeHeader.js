import React from "react";
import Button from "../../../UI/Button";
import styles from "../EpisodeComponent.module.css";

const getStateFilterBtn = params => (Object.keys(params).length > 1 ? false : true);

const EpisodeHeader = ({ total, onClick, clearFilters, checkUrlParams }) => {
	return (
		<div className={styles.episodeHeaderContainer}>
			<span className={styles.headerTitle}>Episode</span>
			<span className={styles.headerTotalText}>
				Total episodes count: <span className={styles.headerTotalCountText}>{total}</span>
			</span>
			<div className={styles.episodeHeaderButtonsContainer}>
				<Button label={"Filters"} onClick={onClick} btnStyles={styles.headerFilterButton} />
				<Button
					disabled={getStateFilterBtn(checkUrlParams)}
					label={"Clear Filters"}
					onClick={clearFilters}
					btnStyles={styles.headerFilterButton}
				/>
			</div>
		</div>
	);
};

export default EpisodeHeader;
