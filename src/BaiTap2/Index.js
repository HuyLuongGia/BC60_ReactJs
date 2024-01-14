import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";

export default function Index() {
    return (
        <div>
            <h1>Bai Tap 2</h1>
            <Header />
            <div className="flex">
                <Navbar />
                <Content />
            </div>
            <Footer />
        </div>
    );
}
