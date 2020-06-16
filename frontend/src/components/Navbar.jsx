import React from "react";

function Navbar() {
    let x = localStorage.getItem("token")
    let a = {name: x ? "Settings" : "Login", link: x ? "/settings" : "/login"}
    let b = {name: x ? "Logout" : "Register", link: x ? "/logout" : "/register"}

    return (
        <div className="w3-bar w3-black">
            <a className="w3-bar-item w3-button" href="/">
                Quickr
            </a>
            <div style={{ float: "right" }}>
                <a className="w3-bar-item w3-button" href={a.link}>
                    {a.name}
                </a>
                <a className="w3-bar-item w3-button" href={b.link}>
                    {b.name}
                </a>
            </div>
        </div>
    );
}

export default Navbar;
