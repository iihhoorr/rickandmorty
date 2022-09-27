import React from "react";
import ModalWrapper from "../../../UI/ModalWrapper";

import styles from "../CharactersComponent.module.css";
import Button from "../../../UI/Button";

const ModalItemInfo = ({ show, controlModalItem, infoItem }) => {
	const { name, status, gender, created, location, origin, type } = infoItem;
	return (
		<ModalWrapper show={show} onClose={controlModalItem} title={"Character info"}>
			<>
				<div className={styles.charactersImageModalConatiner}>
					<img className={styles.charactersImageModal} src={infoItem.image} alt="Character image" />
				</div>
				<div>
					<div className={styles.charactersInfoContainer}>
						<span className={styles.label}>Name:</span>
						<span className={styles.value}>{name}</span>
					</div>
					<div className={styles.charactersInfoContainer}>
						<span className={styles.label}>Status:</span>
						<span className={styles.value}>{status}</span>
					</div>
					<div className={styles.charactersInfoContainer}>
						<span className={styles.label}>Gender:</span>
						<span className={styles.value}>{gender}</span>
					</div>
					<div className={styles.charactersInfoContainer}>
						<span className={styles.label}>Created:</span>
						<span className={styles.value}>{created}</span>
					</div>
					<div className={styles.charactersInfoContainer}>
						<span className={styles.label}>Location:</span>
						<span className={styles.value}>{location}</span>
					</div>
					<div className={styles.charactersInfoContainer}>
						<span className={styles.label}>Origin:</span>
						<span className={styles.value}>{origin}</span>
					</div>
					{type && (
						<div className={styles.charactersInfoContainer}>
							<span className={styles.label}>Type:</span>
							<span className={styles.value}>{type}</span>
						</div>
					)}
				</div>
				<div className={styles.modalAddBtnContainer}>
					<Button label={"Close"} onClick={controlModalItem} />
				</div>
			</>
		</ModalWrapper>
	);
};
export default ModalItemInfo;
