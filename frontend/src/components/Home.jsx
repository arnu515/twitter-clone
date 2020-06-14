import React from "react";

function Home() {
    return (
        <React.Fragment>
            <div
                className="w3-container w3-center w3-blue"
                style={{ padding: "2rem" }}>
                <h1 className="w3-jumbo">Quickr - Quick Twitter</h1>
                <button
                    className="w3-button w3-pink"
                    style={{ marginRight: "1rem" }}
                    onClick={() => (window.location = "/login")}>
                    Login
                </button>
                <button
                    className="w3-button w3-pink"
                    onClick={() => (window.location = "/register")}>
                    Register
                </button>
            </div>

            <div
                className="w3-container w3-blue"
                style={{ padding: "2rem", marginTop: "2rem" }}>
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer consectetur libero nibh, non sodales urna malesuada
                    nec. Sed tortor eros, blandit eget fringilla at, gravida a
                    nibh. Etiam dui nulla, aliquam vitae purus a, auctor
                    malesuada arcu. Vestibulum venenatis orci nisl, sed
                    elementum leo tincidunt eget. Nullam convallis nisi in.
                </p>
            </div>

            <div
                className="w3-container w3-blue"
                style={{ padding: "2rem", marginTop: "2rem" }}>
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer consectetur libero nibh, non sodales urna malesuada
                    nec. Sed tortor eros, blandit eget fringilla at, gravida a
                    nibh. Etiam dui nulla, aliquam vitae purus a, auctor
                    malesuada arcu. Vestibulum venenatis orci nisl, sed
                    elementum leo tincidunt eget. Nullam convallis nisi in.
                </p>
            </div>

            <div
                className="w3-container w3-blue"
                style={{ padding: "2rem", marginTop: "2rem" }}>
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer consectetur libero nibh, non sodales urna malesuada
                    nec. Sed tortor eros, blandit eget fringilla at, gravida a
                    nibh. Etiam dui nulla, aliquam vitae purus a, auctor
                    malesuada arcu. Vestibulum venenatis orci nisl, sed
                    elementum leo tincidunt eget. Nullam convallis nisi in.
                </p>
            </div>
        </React.Fragment>
    );
}

export default Home;
