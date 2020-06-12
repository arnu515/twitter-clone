import React from "react";

function Alert(props) {
    return (
        <div
            className="w3-pale-red w3-text-red w3-border w3-border-red w3-round-large"
            style={{ padding: "1rem", marginTop: "1rem" }}>
            {props.message}
        </div>
    );
}

export default Alert;
