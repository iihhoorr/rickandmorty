import React from "react";
import RemoveIcon from "../../assets/icons/RemoveIcon";

const RemoveBtnList = ({ onClick, disabled }) => (
	<div
		onClick={() => {
			!disabled && onClick();
		}}>
		<RemoveIcon disabled={disabled} />
	</div>
);

export default RemoveBtnList;
