import React, { Component } from "react";

export default class HandlingEvent extends Component {
    handlingDemoClick = () => {
        console.log("Huy");
    };

    handlingDemoClickParams = (username) => {
        console.log(username);
    };

    render() {
        return (
            <div>
                <h3>HandlingEvent</h3>
                <button
                    className="btn btn-success"
                    onClick={this.handlingDemoClick}
                >
                    Demo Click
                </button>
                <button
                    className="btn btn-warning"
                    onClick={() => {
                        this.handlingDemoClickParams("HuyLuongGia");
                    }}
                >
                    DemoClickParams
                </button>
            </div>
        );
    }
}
