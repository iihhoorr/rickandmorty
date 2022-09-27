import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import styles from "./index.module.css";
import ControlBtnList from "../Table/ControlList";

const Table = ({
	onRowClick,
	children,
	pagination,
	sort,
	items,
	changePagination,
	loaded,
	resource,
	total,
	totalPages,
	changeSortParams,
	errorLabel,
	removeListReports,
	removeReports,
	removeArray,
	showLegend,
}) => {
	if (loaded && (items.length === 0 || total === 0)) {
		return null;
	}

	return (
		<>
			<table className={styles.table}>
				<thead className={styles.header}>
					<TableHeader
						sort={sort}
						children={children}
						changeSortParams={changeSortParams}
						showLegend={showLegend}
					/>
				</thead>
				<tbody className={styles.body}>
					{items.length > 0 ? (
						items.map((item, index) => (
							<TableRow
								key={index}
								onRowClick={onRowClick}
								itemIndex={index}
								id={item.id}
								record={item}
								resource={resource}
								children={children}
								removeListReports={removeListReports}
								removeReports={removeReports}
								removeArray={removeArray}
							/>
						))
					) : (
						<tr className={styles.errorRequestCompanyText}>
							<td>
								<span>{errorLabel}</span>
							</td>
						</tr>
					)}
				</tbody>
			</table>
			{pagination && (
				<ControlBtnList pagination={pagination} changePagination={changePagination} total={totalPages} />
			)}
		</>
	);
};
Table.defaultProps = {
	onRowClick: () => {},
	items: [],
	changePagination: () => {},
	loaded: false,
	total: 0,
	totalPages: 0,
	changeSortParams: () => {},
	errorLabel: "",
	removeShowBtn: false,
	removeListReports: () => {},
	removeReports: () => {},
	removeArray: [],
	requestDelete: () => {},
	showLegend: false,
};

export default Table;
