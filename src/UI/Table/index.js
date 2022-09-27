import React from "react";
import styles from "./index.module.css";
import SortArrow from "../../assets/icons/SortArrow.svg";
import { formattingTooltip } from "../../helpers";
import ControlBtnList from "./ControlList";

const checkValue = (bodyValue, item) => {
	return item[bodyValue];
};

const Table = ({
	headerArray,
	bodyArray,
	bodyColArray,
	onClick,
	sort,
	searchValue,
	errorLabel,
	changeSortParams,
	total,
	changePagination,
	pagination,
}) => {
	return (
		<>
			<table className={styles.table}>
				<thead className={styles.header}>
					<tr>
						{headerArray.map((item, ind) => (
							<th
								key={ind}
								className={styles.col}
								onClick={() => changeSortParams(bodyArray[ind], !sort.descending)}
								style={{
									width: `${100 / headerArray.length}%`,
									cursor: ind !== 0 ? "pointer" : "text", //TODO need to made universal
								}}>
								<span className={styles.headerItemText}>{item}</span>
								{bodyArray[ind] === sort.sortByParameter && searchValue.length === 0 && (
									<div>
										<img
											src={SortArrow}
											alt=""
											className={sort.descending ? styles.rotateIconSort : ""}
										/>
									</div>
								)}
							</th>
						))}
					</tr>
				</thead>
				<tbody className={styles.body}>
					{bodyColArray.length !== 0 ? (
						<>
							{bodyColArray.map((item, index) => (
								<tr key={item.id} className={styles.row} onClick={() => onClick(item.id, index)}>
									{bodyArray.map((bodyValue, ind) => (
										<td className={styles.col} key={ind}>
											{formattingTooltip(checkValue(bodyValue, item), styles.tableItemText)}
										</td>
									))}
								</tr>
							))}
						</>
					) : (
						<tr className={styles.errorRequestCompanyText}>
							<td>
								<span>{errorLabel}</span>
							</td>
						</tr>
					)}
				</tbody>
			</table>
			<ControlBtnList pagination={pagination} changePagination={changePagination} total={total} />
		</>
	);
};

Table.defaultProps = {
	headerArray: [],
	bodyArray: [],
	bodyColArray: [],
	onClick: () => {},
	sort: {},
	searchValue: "",
	errorLabel: "",
	changeSortParams: () => {},
	changePagination: () => {},
	total: 0,
};

export default Table;
