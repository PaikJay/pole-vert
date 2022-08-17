import React, { Component } from "react";
import "./App.css";
import Nav from "./common/nav/Nav";
import logo from "./logo-black2.svg";

export default class App extends Component {


  render() {
    return (
      <>
      <Nav logo={logo}/>
      
        <div className="container-fluid pb-5 portfolio-text">
          <div className="row">
            <div className="col-md-7 offset-md-1 col-sm-12">
              <h2>Pole Sport Fitness</h2>
            </div>
          </div>
        
        </div>

        <div className="scrollblock">
          <div className="container-fluid pt-10">
            <div className="row justify-content-md-center ">
              <div className="col-md-10 col-sm-12">
                <div className="card-columns">
                  <div className="card card-hover h-100">
                    <div className="card-body">
                      <a href="index.html">
                        <img
                          className="card-img-top"
                          src="img/photo-1.jpeg"
                          alt="Classes"
                        />
                        <div className="reveal h-100 p-2 d-flex ">
                          <div className="w-100 align-self-center">
                            <p> Classes</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="card card-hover h-100">
                    <div className="card-body">
                      <a href="index.html">
                        <img
                          className="card-img-top"
                          src="img/photo-2.jpeg"
                          alt="Instructor"
                        />
                        <div className="reveal h-100 p-2 d-flex ">
                          <div className="w-100 align-self-center">
                            <p>Instructors</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="card card-hover h-100">
                    <div className="card-body">
                      <a href="index.html">
                        <img
                          className="card-img-top"
                          src="img/photo-4.png"
                          alt="SportFit"
                        />
                        <div className="reveal h-100 p-2 d-flex ">
                          <div className="w-100 align-self-center">
                            <p>Pole Sport Gear</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="card card-hover h-100">
                    <div className="card-body">
                      <a href="index.html">
                        <img
                          className="card-img-top"
                          src="img/photo-3.jpeg"
                          alt="Gym studio"
                        />
                        <div className="reveal h-100 p-2 d-flex ">
                          <div className="w-100 align-self-center">
                            <p>Low Impact Fitness</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
