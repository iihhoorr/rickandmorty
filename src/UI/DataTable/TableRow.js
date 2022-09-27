import React, { isValidElement } from "react";
import styles from "./index.module.css";
import DeleteIcon from "./components/DeleteIcon";
import SelectIcon from "./components/SelectIcon";

import ToolTipWrapper from "./components/ToolTip";

const TableRow = ({
	onRowClick,
	children,
	id,
	record,
	itemIndex,
	resource,
	removeReports,
	removeListReports,
	removeArray,
}) => {
	const handleClick = event => {
		event.stopPropagation();
		onRowClick(id, itemIndex);
	};

	const injectChild = (element, params) => {
		if (element.props.type === "SELECT") {
			const activ = removeArray.some(item => item === params.record.email);
			return (
				<SelectIcon
					onChange={() => {
						removeListReports(params.record.email);
					}}
					activ={activ}
					id={`select_to_remove_${itemIndex+1}`}>
					<ToolTipWrapper element={element} params={params} />
				</SelectIcon>
			);
		}
		if (element.props.type === "DELETE") {
			return (
				<DeleteIcon
					onClick={() => removeReports(params.record)}
					disabled={removeArray.length > 0}
					id={`remove_icon_${itemIndex+1}`}>
					<ToolTipWrapper element={element} params={params} />
				</DeleteIcon>
			);
		}

		return <ToolTipWrapper element={element} params={params} />;
	};

	return (
		<tr onClick={handleClick} className={styles.row}>
			{React.Children.map(children, field => {
				return isValidElement(field) ? (
					<td
						width={field.props.width || "100%"}
						style={{ maxWidth: field.props.width || "100%" }}
						className={field.props.className}>
						{injectChild(field, { record, resource })}
					</td>
				) : null;
			})}
		</tr>
	);
};

export default TableRow;
