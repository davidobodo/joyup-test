import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from "./pages/dashboard/Dashboard";

const App = () => {
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    );
};

export default App;
