import React from "react";
import Axios from "axios";

function deleteTweet(tid) {
    Axios.delete("/api/deletetweet/" + tid, {headers: { Authorization: "Bearer " +localStorage.getItem("token") }}).then(res => {
        console.log(res.data)
        window.location.reload();
    })
}

function TweetItem(props) {

    return (
        <div
            className="w3-card w3-border w3-border-gray w3-round-large"
            style={{marginTop: "2rem"}}>
            <header className="w3-container w3-opacity w3-light-gray" style={{padding: "1rem"}}>@{props.author}</header>
            <div className="w3-container" style={{padding: "2rem"}}>
                <h2 className="w3-xxlarge">
                    <span className="w3-opacity">{props.title}</span>
                    {props.isOwner &&
                    <button className="w3-right w3-button w3-red w3-large w3-hover-pale-red w3-round-large" onClick={() => deleteTweet(props.id)}>Delete
                    </button>}
                </h2>
                <div dangerouslySetInnerHTML={{__html: props.content}}/>
            </div>
            <footer className="w3-container w3-center w3-large">
                <button className="w3-button" style={{marginRight: "2rem"}}>
                    Like
                </button>
                <button className="w3-button" style={{marginRight: "2rem"}}>
                    Retweet
                </button>
                <button className="w3-button">Reply</button>
            </footer>
        </div>
    );
}

export default TweetItem;
