/* eslint-disable eqeqeq */
import React from "react";
import styles from "./index.module.css";
import PaginationList from "./PaginationList";

const ControlBtnList = ({ pagination, changePagination, total }) => {
	return (
		<div className={styles.controlContainer}>
			<span className={styles.controlTitleText}>Max elements</span>
			<div className={styles.countContainer}>
				<div>
					<span className={styles.controltext}>20</span>
				</div>
			</div>
			<PaginationList page={pagination.page} total={total} changePagination={changePagination} />
		</div>
	);
};

export default ControlBtnList;
