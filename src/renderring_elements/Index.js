import React, { Component } from "react";

export default class Index extends Component {
    userName = "HuyLuong";
    age = 22;

    showInfor = () => {
        return (
            <div>
                I'm {this.userName} - Age: {this.age}
            </div>
        );
    };

    render() {
        return (
            <div>
                <h3>Rendering Elements</h3>
                {this.showInfor()}
            </div>
        );
    }
}
