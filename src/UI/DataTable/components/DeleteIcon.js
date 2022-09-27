import React from "react";
import RemoveBtnList from "../../../assets/icons/RemoveIcon";
import styles from "../index.module.css";

const DeleteIcon = ({ children, disabled, onClick, id }) => (
	<div className={styles.removeContainer}>
		{children}
		<RemoveBtnList disabled={disabled} onClick={onClick} id={id} />
	</div>
);

export default DeleteIcon;
