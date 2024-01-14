import React, { Component } from "react";

export default class ListKey extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listUser: [
                { id: 1, name: "Nguyen" },
                { id: 2, name: "Lam" },
                { id: 3, name: "Phuc" },
            ],
        };
    }

    renderListUser = () => {
        return this.state.listUser.map((item) => {
            return (
                <li key={item.id}>
                    {item.id} - {item.name}
                </li>
            );
        });
    };

    render() {
        return (
            <div>
                <h3>ListKey</h3>
                <ul>{this.renderListUser()}</ul>
            </div>
        );
    }
}
