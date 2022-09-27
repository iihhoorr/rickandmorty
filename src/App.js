import React, { Suspense } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AppMain from "./layouts/Main";

const App = () => {
	return (
		<HashRouter>
			<Suspense fallback={<div>Loading...</div>}>
				<Switch>
					<Route path="/" render={props => <AppMain {...props} />} />
				</Switch>
			</Suspense>
		</HashRouter>
	);
};

export default App;
