import React, { Component } from "react";
import "./App.css";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import HomePage from "./pages/home-page";
import NotFoundPage from "./pages/404-page";
import AppPage from "./pages/app-page";

class App extends Component {
	render() {
		return (
			//Routers to Home page and Application page. Other urls will be redirected to 404 not found page.
			<Router>
				<Switch>
					<Route exact path="/home" component={HomePage} />
					<Route exact path="/app" component={AppPage} />
					<Route exact path="/404" component={NotFoundPage} />
					<Redirect exact from="/" to="/home" />
					<Redirect to="/404" />
				</Switch>
			</Router>
		);
	}
}

export default App;
