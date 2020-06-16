import React from "react";

function NotFound() {
    return (<div className="w3-container w3-center" style={{margin: "3rem"}}>
        <h1 className="w3-jumbo">404</h1>
        <p className="w3-xxlarge">The page you were searching for was not found. Double check your URL and try again</p>
        <button type="button" className="w3-button w3-blue" onClick={() => window.location = "/"}>&laquo; Back</button>
    </div>)
}

export default NotFound;