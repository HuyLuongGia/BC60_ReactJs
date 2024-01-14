import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import Wwd from "./Wwd";
import List from "./List";
import Contact from "./Contact";
import Footer from "./Footer";

export default function BaiTap3() {
    return (
        <div>
            <Header />
            <Carousel />
            <div className="container">
                <div className="row">
                    <Wwd />
                    <Contact />
                </div>
                <List />
            </div>
            <Footer />
        </div>
    );
}
