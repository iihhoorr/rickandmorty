import React from "react";
import Button from "../../../UI/Button";
import styles from "../CharactersComponent.module.css";

const getStateFilterBtn = params => (Object.keys(params).length > 1 ? false : true);

const CharactersHeader = ({ total, onClick, clearFilters, checkUrlParams }) => {
	return (
		<div className={styles.companiesHeaderContainer}>
			<span className={styles.headerTitle}>Characters</span>
			<span className={styles.headerTotalText}>
				Total Characters count: <span className={styles.headerTotalCountText}>{total}</span>
			</span>
			<div className={styles.companiesHeaderButtonsContainer}>
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

export default CharactersHeader;
