import React, { useState, useEffect } from "react";
import { parse } from "query-string";
import ModalWrapper from "../../../UI/ModalWrapper";

import styles from "../CharactersComponent.module.css";
import Button from "../../../UI/Button";
import TextFormInput from "../../../UI/TextFormInput";

const cleanFilters = data => {
	return Object.keys(data).forEach(key => {
		if (data[key] === "") {
			delete data[key];
		}
	});
};

const Filters = ({ location, show, controlModalFilters, applyFilters }) => {
	const urlParams = parse(location.search);
	const initState = {
		species: urlParams?.species || "",
		status: urlParams?.status || "",
		gender: urlParams?.gender || "",
	};
	const [inputValue, setInput] = useState(initState);
	const setInputValue = (key, value) => {
		setInput(prev => ({ ...prev, [key]: value }));
	};

	useEffect(() => {
		setInput(initState);
	}, [show]);

	const onApply = () => {
		cleanFilters(inputValue);
		applyFilters(inputValue);
		controlModalFilters();
		setInput("");
	};

	return (
		<ModalWrapper show={show} onClose={controlModalFilters} title={"Filters"}>
			<>
				<TextFormInput
					id={"Filters_species"}
					label={"Species"}
					value={inputValue.species}
					placeholder={"Enter species"}
					onChange={value => setInputValue("species", value)}
					type="input"
				/>
				<TextFormInput
					id={"Filters_status"}
					label={"Status"}
					value={inputValue.status}
					placeholder={"Enter status"}
					onChange={value => setInputValue("status", value)}
					type="dropdownSelect"
				/>
				<TextFormInput
					id={"Filters_gender"}
					label={"Gender"}
					value={inputValue.gender}
					placeholder={"Enter gender"}
					onChange={value => setInputValue("gender", value)}
					type="dropdownSelect"
				/>
				<div className={styles.modalAddBtnContainer}>
					<Button label={"Cancel"} onClick={controlModalFilters} />
					<Button label={"Apply"} onClick={onApply} />
				</div>
			</>
		</ModalWrapper>
	);
};
export default Filters;
