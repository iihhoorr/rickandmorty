import React, { useEffect, useState } from "react";
import Button from "../Button";
import ModalWrapper from "../ModalWrapper";
import styles from "./index.module.css";

export let controlErrorModal = null;

export const ErrorModal = () => {
	const [showModal, hideModal] = useState(false);

	useEffect(() => {
		controlErrorModal = hideModal;
	}, []);

	const hide = () => hideModal(false);

	return (
		<ModalWrapper title={"Error"} show={showModal} onClose={hide}>
			<div className={styles.container}>
				<span className={styles.text}>{"Sorry, something went wrong. Please, try again later."}</span>
				<Button label={"Ok"} onClick={hide} />
			</div>
		</ModalWrapper>
	);
};
