import React, { useEffect, useState, useCallback } from "react";
import { parse } from "query-string";
import httpService from "../../services/http/httpService";
import styles from "./LocationsComponent.module.css";
import Table from "../../UI/DataTable/Table";
import ListTextField from "../../UI/ListTextField";
import LocationsHeader from "./components/LocationsHeader";
import Filters from "./components/Filters";
import { INIT_PAGINATION, INIT_SORT, setUrlParams } from "../../helpers";

const bodyLocations = [
	{ source: "id", label: "id", tooltip: false, sort: false },
	{ source: "name", label: "Name", tooltip: true, sort: false },
	{ source: "type", label: "Type", tooltip: true, sort: false },
	{ source: "dimension", label: "Dimension", tooltip: true, sort: false },
];

const CharactersComponent = ({ history, location }) => {
	const [locations, setLocations] = useState([]);
	const [total, setTotal] = useState(0);
	const [totalPages, setTotalPages] = useState(0);
	const [showModalFilters, setShowModalFilters] = useState(false);

	const urlParams = parse(location.search);
	const checkUrlParams = Object.keys(urlParams).length ? urlParams : INIT_PAGINATION;
	const searchValue = checkUrlParams?.searchValue || "";

	useEffect(() => {
		getCharatctersList({ ...checkUrlParams, ...searchValue });
	}, [location]);

	const getCharatctersList = param => {
		httpService
			.getLocationsList(param)
			.then(res => {
				setLocationsList(res);
			})
			.catch(error => {
				setLocations([]);
				setTotal(0);
				setTotalPages(0);
				console.log("error", error);
			});
	};

	const setLocationsList = data => {
		setLocations([...data.results]);
		setTotal(data.info.count);
		setTotalPages(data.info.pages);
	};

	const controlModalFilters = () => setShowModalFilters(!showModalFilters);

	const changePagination = (key, value) => {
		if (key === "page" && (value < 0 || value >= total.totalPages)) {
			return;
		}
		setUrlParams(history, { ...checkUrlParams, [key]: Number(value) });
	};

	const applyFilters = data => {
		setUrlParams(history, { ...INIT_PAGINATION, ...data });
	};

	const clearFilters = () => setUrlParams(history, { ...INIT_PAGINATION });

	return (
		<div className={styles.locationsContainer}>
			<LocationsHeader
				checkUrlParams={checkUrlParams}
				total={total}
				clearFilters={clearFilters}
				onClick={controlModalFilters}
			/>
			<Filters
				location={location}
				show={showModalFilters}
				controlModalFilters={controlModalFilters}
				applyFilters={applyFilters}
				getCharatctersList={() => getCharatctersList({ ...checkUrlParams })}
			/>
			<Table
				sort={INIT_SORT}
				pagination={checkUrlParams}
				changePagination={changePagination}
				totalPages={totalPages}
				total={total}
				items={locations}>
				{bodyLocations.map(item => (
					<ListTextField
						key={item.label}
						source={item.source}
						label={item.label}
						width={item.width}
						tooltip={item.tooltip}
						sort={item.sort}
					/>
				))}
			</Table>
		</div>
	);
};

export default CharactersComponent;
