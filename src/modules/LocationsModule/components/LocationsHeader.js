import React from "react";
import Button from "../../../UI/Button";
import styles from "../LocationsComponent.module.css";

const getStateFilterBtn = params => (Object.keys(params).length > 1 ? false : true);

const LocationsHeader = ({ total, onClick, clearFilters, checkUrlParams }) => {
	return (
		<div className={styles.locationsHeaderContainer}>
			<span className={styles.headerTitle}>Locations</span>
			<span className={styles.headerTotalText}>
				Total locations count: <span className={styles.headerTotalCountText}>{total}</span>
			</span>
			<div className={styles.locationsHeaderButtonsContainer}>
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

export default LocationsHeader;
