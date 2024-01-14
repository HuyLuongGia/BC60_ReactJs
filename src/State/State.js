import React, { Component } from "react";

export default class State extends Component {
    renderUI = () => {
        return (
            <>
                <h3>State</h3>
                <button className="btn btn-success">Login</button>
                <h4>Hello username</h4>
                <button className="btn btn-warning">Logout</button>
            </>
        );
    };
    render() {
        return <div></div>;
    }
}
