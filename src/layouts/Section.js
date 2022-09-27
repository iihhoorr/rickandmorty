import React, { Suspense, lazy } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import routes from "../routes";

const NotFound = lazy(() => import("../layouts/NotFound"));

const Section = () => {

	return (
		<div className="app-layout-right-content">
			<HashRouter>
				<Suspense fallback={<div />}>
					<Switch>
						{routes.map(
							(route, idx) =>
								route.component && (
									<Route
										key={idx}
										path={route.path}
										exact={route.exact}
										name={route.name}
										render={props => <route.component {...props} />}
									/>
								),
						)}
						<Route component={NotFound} />
					</Switch>
				</Suspense>
			</HashRouter>
		</div>
	);
};

export default Section;
