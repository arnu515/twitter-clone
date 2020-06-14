import React from "react";
import {logout} from "../login";

class Logout extends React.Component {
    componentDidMount() {
        logout()
    }

    render() {
        return (
            <div className="w3-container w3-xlarge">
                <p>Please wait, logging you out...</p>
            </div>
        )
    }
}

export default Logout;