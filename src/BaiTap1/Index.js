import React, { Component } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Conent from "./Conent";
import Footer from "./Footer";
export default class index extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="flex">
                    <Navbar />
                    <Conent />
                </div>
                <Footer />
            </div>
        );
    }
}
