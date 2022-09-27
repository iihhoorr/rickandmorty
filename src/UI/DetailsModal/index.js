import React from "react";
import Button from "../Button";
import ModalWrapper from "../ModalWrapper";
import styles from "./Details.module.css";
import DetailsLabel from "./DetailsLabel";

const DetailsModal = ({ showModal, onClose, data }) => {
	if (!showModal) {
		return null;
	}
	return (
		<ModalWrapper show={showModal} onClose={onClose} title={data.title} modalStyle={styles.modalContainer}>
			<div className={styles.contentContainer}>
				{data.rows.map((item, index) => (
					<DetailsLabel key={index} label={item.label} value={item.value} route={item.route} />
				))}
				<Button btnStyles={styles.closeBtn} label={data.btnLabel} onClick={onClose} id={data.btnLabel} />
			</div>
		</ModalWrapper>
	);
};

DetailsModal.defaultProps = {
	data: {},
	onClose: () => {},
	showModal: false,
};

export default DetailsModal;
