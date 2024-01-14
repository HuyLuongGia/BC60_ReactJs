import React, { Component } from "react";

export default class ExamCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            urlImage: "./images/red-car.jpg",
        };
    }

    changeUrlImage = (urlImage) => {
        // console.log(urlImage);
        this.setState({
            urlImage: urlImage,
        });
    };

    render() {
        return (
            <div className="container">
                ExamCar
                <div className="row">
                    <div className="col-md-6">
                        <img src={this.state.urlImage} className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <button
                            className="btn btn-danger"
                            onClick={() => {
                                this.changeUrlImage("./images/red-car.jpg");
                            }}
                        >
                            Red
                        </button>
                        <button
                            className="btn btn-dark"
                            onClick={() => {
                                this.changeUrlImage("./images/black-car.jpg");
                            }}
                        >
                            Black
                        </button>
                        <button
                            className="btn btn-light"
                            onClick={() => {
                                this.changeUrlImage("./images/silver-car.jpg");
                            }}
                        >
                            Silver
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
