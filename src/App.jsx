import React, { lazy, Suspense } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import SiteLoader from "./components/siteLoader/SiteLoader";

const Dashboard = lazy(() => import("./pages/dashboard/Dashboard" /* webpackChunkName: "Dashboard" */));

const App = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<SiteLoader />}>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/business-settings" component={Dashboard} />
                    <Route exact path="/products" component={Dashboard} />
                    <Route exact path="/schedule-posts" component={Dashboard} />
                    <Route exact path="/post-animator" component={Dashboard} />
                    <Route exact path="/messenger-users" component={Dashboard} />
                    <Route exact path="/order-history" component={Dashboard} />
                    <Route exact path="/messenger-settings" component={Dashboard} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;
