import React from "react";
import Checkbox from "../../../UI/Checkbox";
import DeleteIcon from "../../../UI/DataTable/components/DeleteIcon";
import styles from "../MyWatchListComponent.module.css";

const MyWatchListItems = ({ handleDelete, handleToggle, list }) => {
	return (
		<div className={styles.myWatchListItemsContainer}>
			{list.map(todo => {
				return (
					<div className={styles.myWatchListItem} key={todo.id}>
						<Checkbox
							disable={todo.complete}
							onChange={() => handleToggle(todo.id)}
							label={todo.name}
							width={"24px"}
							height={"24px"}
						/>
						<DeleteIcon onClick={() => handleDelete(todo.id)} />
					</div>
				);
			})}
		</div>
	);
};

export default MyWatchListItems;
