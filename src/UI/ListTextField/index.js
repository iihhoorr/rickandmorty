import React from "react";
import PropTypes from "prop-types";

const ListTextField = ({ record, source }) => {
	return (
		<div className="row-alignment-between">
			<div className="td-container">
				<div id={source} className="td-content">
					{record[source] ? record[source] : "-"}
				</div>
			</div>
		</div>
	);
};

ListTextField.propTypes = {
	record: PropTypes.object,
	source: PropTypes.string,
};

export default ListTextField;
