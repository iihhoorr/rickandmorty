import React, { useEffect, useState, useCallback } from "react";
import Button from "../../UI/Button";
import styles from "./MyWatchListComponent.module.css";
import ListInput from "../../UI/ListInput";
import MyWatchListHeader from "./components/MyWatchListHeader";
import MyWatchListItems from "./components/MyWatchListItems";
import useLocalStorage from "../../hooks/UseLocalStorage";
import { randId } from "../../services/utils/randomId";

const CharactersComponent = () => {
	const [inputValue, setInputValue] = useState("");
	const [list, setList] = useLocalStorage("watchList", []);

	const addEpisode = () => {
		let copy = [...list];
		copy = [
			...copy,
			{
				id: randId(),
				name: inputValue,
				completed: false,
			},
		];
		setList(copy);
		setInputValue("");
	};

	const handleToggle = id => {
		let mapped = list.map(name => {
			return name.id === id ? { ...name, complete: !name.complete } : { ...name };
		});
		setList(mapped);
	};

	const handleDelete = id => {
		let afterDelete = list.filter(obj => obj.id !== id);
		setList(afterDelete);
	};

	console.log("list", list);

	return (
		<div className={styles.watchListContainer}>
			<MyWatchListHeader total={list.length} />
			<div className={styles.addEpisodeContainer}>
				<ListInput value={inputValue} onChange={setInputValue} placeholder={"Type episode"} />
				<Button
					disabled={!inputValue}
					label={"Add episode"}
					onClick={addEpisode}
					btnStyles={styles.addEpisodeButton}
				/>
			</div>
			<MyWatchListItems list={list} handleDelete={handleDelete} handleToggle={handleToggle} />
		</div>
	);
};

export default CharactersComponent;
