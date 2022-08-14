import React, { Component } from "react";
// import "./App.css";
import logo from "./logo.svg";

export default class App extends Component {


  render() {
    return (
      <>
        <div className="navigation container-fluid">
          <div className="row justify-content-md-center ">
            <div className="col-md-10 col-sm-12">
              <nav className="navbar navbar-default">
                <a className="navbar-brand" href="index.html">
                  <img src={logo} height="22" alt="Logo" />
                </a>
                <div
                  className="button_container"
                  id="toggle"
                  data-bs-toggle="toggle"
                  data-bs-target=".multi-collapse"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample1 multiCollapseExample2"
                >
                  <span className="black top"></span>
                  <span className="black middle"></span>
                  <span className="black bottom"></span>
                </div>
                <div
                  className="collapse navbar-collapse"
                  id="overlay"
                  data-bs-toggle="toggle"
                >
                  <nav className="overlay-menu">
                    <ul>
                      <li>
                        {" "}
                        <a href="about.html">About</a>
                      </li>
                      <li>
                        {" "}
                        <a href="story.html">Story</a>
                      </li>
                      <li>
                        {" "}
                        <a href="services.html">Classes</a>
                      </li>
                      <li>
                        {" "}
                        <a href="contacts.html">Contacts</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="container-fluid pb-5 portfolio-text">
          <div className="row">
            <div className="col-md-7 offset-md-1 col-sm-12">
              <h2>Pole Sport Fitness</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7 offset-md-1 col-sm-12">
              <p className="pb-5 pt-5"> Pole dancing studio</p>
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
                          src="img/photo-3.jpeg"
                          alt="Competition"
                        />
                        <div className="reveal h-100 p-2 d-flex ">
                          <div className="w-100 align-self-center">
                            <p>Competition</p>
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
