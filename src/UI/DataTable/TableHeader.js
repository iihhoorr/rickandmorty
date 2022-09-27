import React, { Children, isValidElement, useState } from "react";
import SortArrow from "../../assets/icons/SortArrow.svg";
import styles from "./index.module.css";

const TableHeader = ({ children, sort, changeSortParams, showLegend }) => {
	const [showLegendBody, setShowLegendBody] = useState(false);
	const descending = typeof sort.descending == "boolean" ? sort.descending : sort.descending === "true";
	const handleSort = item => {
		if (!item.sort) {
			return;
		}
		changeSortParams(item?.customSource || item.source, !descending);
	};

	const show = () => {
		setShowLegendBody(true);
	};
	const hidden = () => {
		setShowLegendBody(false);
	};

	return (
		<tr>
			{Children.map(children, field => {
				return isValidElement(field) ? (
					<th width={field.props.width || "100%"} className={field.props.className}>
						<div className="row-alignment-start">
							<div
								className={`td-container ${field.props.sort ? styles.sortContainer : ""}`}
								onClick={() => handleSort(field.props)}>
								<div className={`td-content ${styles.headerItemText}`}>
									{field.props.label}
									{(sort.sortByParameter === field.props.source ||
										sort.sortByParameter === field.props?.customSource) && (
										<img
											src={SortArrow}
											alt=""
											style={{
												marginLeft: 7,
											}}
											className={`
												${descending ? "" : "iconSortReverse"}
											`}
										/>
									)}
								</div>
							</div>
						</div>
					</th>
				) : null;
			})}
		</tr>
	);
};

export default TableHeader;
