import * as React from "react";

const CharactersModule = React.lazy(() => import("./modules/CharactersModule/CharactersComponent"));
const EpisodeModule = React.lazy(() => import("./modules/EpisodeModule/EpisodeComponent"));
const LocationsModule = React.lazy(() => import("./modules/LocationsModule/LocationsComponent"));
const MyWatchListModule = React.lazy(() => import("./modules/MyWatchListModule/MyWatchListComponent"));

const routes = [
	{
		path: "/characters",
		name: "Characters",
		component: CharactersModule,
	},
	{
		path: "/episode",
		name: "Episode",
		component: EpisodeModule,
	},
	{
		path: "/locations",
		name: "Locations",
		component: LocationsModule,
	},
	{
		path: "/watchlist",
		name: "My watch list",
		component: MyWatchListModule,
	},
];

export default routes;
