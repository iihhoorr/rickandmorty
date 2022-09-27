import React, { cloneElement } from "react";
import styles from "../index.module.css";

const statusColorId = {
	Error: "#c50404",
	Full: "#019f67",
	OK: "#f5a70e",
};

const ToolTip = ({ children, params, element }) => {
	const dublicatedText = params.record[element.props.source];
	return (
		<span className={styles.elementRender}>
			{children}
			{dublicatedText?.length > 10 && <span className={styles.tooltip}>{dublicatedText}</span>}
		</span>
	);
};

const ToolTipWrapper = ({ params, element }) => {
	if (element.props.tooltip) {
		if (element.props.colored) {
			return (
				<ToolTip element={element} params={params}>
					<span style={{ color: statusColorId[params.record.loadState] }}>
						{cloneElement(element, params)}
					</span>
				</ToolTip>
			);
		}
		return (
			<ToolTip element={element} params={params}>
				{cloneElement(element, params)}
			</ToolTip>
		);
	}

	return cloneElement(element, params);
};

export default ToolTipWrapper;
