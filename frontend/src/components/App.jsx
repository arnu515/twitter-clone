import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import Login from "./Login";
import Register from "./Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./MainPage";
import {check} from "../login";
import Logout from "./Logout";

function App() {
    let [login, setLogin] = React.useState(false);

    check().then(r => setLogin(r))

    return (
        <React.Fragment>
            <Navbar />
            <Router>
                <Route path="/" exact>
                    {login ? <MainPage/> : <Home/>}
                </Route>
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/logout" exact component={Logout} />
            </Router>
        </React.Fragment>
    );
}

export default App;
