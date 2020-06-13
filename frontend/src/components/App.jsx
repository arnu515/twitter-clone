import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import Login from "./Login";
import Register from "./Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./MainPage";

function App() {
    return (
        <React.Fragment>
            <Navbar />
            <Router>
                <Route path="/" exact component={MainPage} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
            </Router>
        </React.Fragment>
    );
}

export default App;
