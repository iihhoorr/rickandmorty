/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import ArrowPageLeft from "../../assets/icons/ArrowPageLeft.svg";
import ArrowPageRight from "../../assets/icons/ArrowPageRight.svg";

const filterPages = (visiblePages, totalPages) => {
	return visiblePages.filter(page => page <= totalPages);
};

const getVisiblePages = (page, total) => {
	if (total < 7) {
		return filterPages([1, 2, 3, 4, 5, 6], total);
	} else {
		if (page % 5 >= 0 && page > 4 && page + 2 < total) {
			return [1, page, page + 1, page + 2, total];
		} else if (page % 5 >= 0 && page > 4 && page + 2 >= total) {
			return [1, total - 3, total - 2, total - 1, total];
		} else {
			return [1, 2, 3, 4, 5, 6, total];
		}
	}
};

const PaginationList = ({ total, page, changePagination }) => {
	const [visiblePages, setVisiblePages] = useState([]);

	useEffect(() => {
		setVisiblePages(getVisiblePages(Number(page), Number(total)));
	}, [page, total]);

	const changePage = value => {
		const activePage = page;

		if (value == activePage) {
			return;
		}
		setVisiblePages(filterPages(getVisiblePages(Number(value), Number(total)), total));
		changePagination("page", value);
	};

	return (
		<div className={styles.paginationContainer}>
			<div onClick={() => changePagination("page", Number(page) - 1)} className={styles.pageIcon}>
				<img src={ArrowPageLeft} alt="" />
			</div>

			<span className={styles.pageTitle}>{"PAGE"}</span>
			<ul className={styles.paginationContainerList}>
				{visiblePages.map((value, index, array) => (
					<li key={value} className={Number(page) == value ? styles.pageItemSelect : styles.pageItem}>
						<span key={value} onClick={() => changePage(Number(value))}>
							{array[index - 1] + 2 < value ? `...${value}` : value}
							&nbsp;
						</span>
					</li>
				))}
			</ul>
			<div className={styles.pageIcon} onClick={() => changePagination("page", Number(page) + 1)}>
				<img src={ArrowPageRight} alt="" />
			</div>
		</div>
	);
};

export default PaginationList;
