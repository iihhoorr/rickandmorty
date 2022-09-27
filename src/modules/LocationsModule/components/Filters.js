import React, { useState, useEffect } from "react";
import { parse } from "query-string";
import ModalWrapper from "../../../UI/ModalWrapper";

import styles from "../LocationsComponent.module.css";
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
		name: urlParams?.name || "",
		type: urlParams?.type || "",
		dimension: urlParams?.dimension || "",
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
					id={"Filters_name"}
					label={"Name"}
					value={inputValue.name}
					placeholder={"Enter name"}
					onChange={value => setInputValue("name", value)}
					type="input"
				/>
				<TextFormInput
					id={"Filters_type"}
					label={"Type"}
					value={inputValue.type}
					placeholder={"Enter type"}
					onChange={value => setInputValue("type", value)}
					type="input"
				/>
				<TextFormInput
					id={"Filters_dimension"}
					label={"Dimension"}
					value={inputValue.dimension}
					placeholder={"Enter dimension"}
					onChange={value => setInputValue("dimension", value)}
					type="input"
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
