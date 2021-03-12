import React, { useState } from "react";
import Layout from "../layout";
import { Link } from "react-router-dom";

const Agenda = (props) => {
  const [agenda, setAgenda] = useState([]);

  fetch("/api/v1/agenda/getAllAgenda", {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("jwt"),
    },
  })
    .then((res) => res.json())
    .then((data) => {
      setAgenda(data);
    });
  console.log("AGENDA_INFO=====>", agenda);
  return (
    <div>
      <Layout>
        <div className="content-sec agendapage sideSpacing_allPage">
          <div className="container">
            {/*----==================page main heading start==================----*/}
            <div className="page-heading">
              <h2>Agenda</h2>
              <div className="viewagendabtn">
                <a href="#">View My Agenda</a>
              </div>
            </div>
            {/*----==================page main heading ends==================----*/}
            {/*----==================faq listing section start==================----*/}
            <div className="agendalistheading">
              <h1>Saturday, April 24, 2021</h1>
            </div>
            <div className="cmnlistwrap agendalistwrap red-box">
              <div className="cmnlist row">
                <div className="col-lg-12 p-0">
                  <div className="agendatxtwraper">
                    <div className="cmnlisttxt">
                      <h2>8:00AM</h2>
                    </div>
                    <div className="agndatxtouter d-flex">
                      <div className="cmnlisttxt col">
                        <h3>Exhibit Hall Opens </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cmnlist row">
                <div className="col-lg-12 p-0">
                  <div className="agendatxtwraper">
                    <div className="cmnlisttxt">
                      <h2>9:00AM</h2>
                    </div>
                    <div className="agndatxtouter d-flex">
                      <div className="cmnlisttxt col">
                        <h3>
                          Welcome Intention / Movement Yoga Stretch{" "}
                          <span className="hrt-img">
                            <img
                              className
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/heart-empty.png"
                              }
                            />
                          </span>
                        </h3>
                        <h3>Main Stage</h3>
                        <div className="faq-excert ">
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam, quis nostrud exerci tation
                            ullamcorper suscipit lobortis nisl ut aliquip ex ea
                            commodo consequat. Duis autem vel eum iriure dolor
                            in Lorem ipsum dolor sit amet, consectetuer
                            adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna aliquam erat
                            volutpat. Ut wisi enim ad minim Lorem ipsum dolor
                            sit amet, consectetuer adipiscing elit, sed diam
                            nonummy nibh euismod tincidunt ut laoreet dolore
                            magna aliquam erat volutpat. Ut wisi enim ad minim{" "}
                          </p>
                        </div>
                      </div>
                      <div className="agendabtnwrap text-right col-auto p-0">
                        <a className="faqbtn agendabtn" href="#">
                          Learn More <span>&gt;</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cmnlist row">
                <div className="col-lg-12 p-0">
                  <div className="agendatxtwraper">
                    <div className="agndatxtouter d-flex">
                      <div className="cmnlisttxt col">
                        <h3>
                          Sharp Executive Welcome{" "}
                          <span className="hrt-img">
                            <img
                              className
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/heart-empty.png"
                              }
                            />
                          </span>
                        </h3>
                        <h3>Main Stage</h3>
                      </div>
                      <div className="agendabtnwrap text-right col-auto p-0">
                        <a className="faqbtn agendabtn" href="#">
                          Learn More <span>&gt;</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cmnlist row">
                <div className="col-lg-12 p-0">
                  <div className="agendatxtwraper">
                    <div className="agndatxtouter d-flex">
                      <div className="cmnlisttxt col">
                        <h3>
                          Emcee Introduction{" "}
                          <span className="hrt-img">
                            <img
                              className
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/heart-empty.png"
                              }
                            />
                          </span>
                        </h3>
                        <h3>Main Stage</h3>
                      </div>
                      <div className="agendabtnwrap text-right col-auto p-0">
                        <a className="faqbtn agendabtn" href="#">
                          Learn More <span>&gt;</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cmnlist row">
                <div className="col-lg-12 p-0">
                  <div className="agendatxtwraper">
                    <div className="cmnlisttxt">
                      <h2>9:20AM</h2>
                    </div>
                    <div className="agndatxtouter d-flex">
                      <div className="cmnlisttxt col">
                        <h3>
                          Opening Keynote{" "}
                          <span className="hrt-img">
                            <img
                              className
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/heart-empty.png"
                              }
                            />
                          </span>
                        </h3>
                        <h3>Main Stage</h3>
                      </div>
                      <div className="agendabtnwrap text-right col-auto p-0">
                        <a className="faqbtn agendabtn" href="#">
                          Learn More <span>&gt;</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cmnlist row">
                <div className="col-lg-12 p-0">
                  <div className="agendatxtwraper">
                    <div className="cmnlisttxt">
                      <h2>9:00AM</h2>
                    </div>
                    <div className="agndatxtouter d-flex">
                      <div className="cmnlisttxt col">
                        <h3>
                          Welcome Intention / Movement Yoga Stretch{" "}
                          <span className="hrt-img">
                            <img
                              className
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/heart-empty.png"
                              }
                            />
                          </span>
                        </h3>
                        <h3>Main Stage</h3>
                        <div className="faq-excert ">
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam, quis nostrud exerci tation
                            ullamcorper suscipit lobortis nisl ut aliquip ex ea
                            commodo consequat. Duis autem vel eum iriure dolor
                            in Lorem ipsum dolor sit amet, consectetuer
                            adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna aliquam erat
                            volutpat. Ut wisi enim ad minim Lorem ipsum dolor
                            sit amet, consectetuer adipiscing elit, sed diam
                            nonummy nibh euismod tincidunt ut laoreet dolore
                            magna aliquam erat volutpat. Ut wisi enim ad minim{" "}
                          </p>
                        </div>
                      </div>
                      <div className="agendabtnwrap text-right col-auto p-0">
                        <a className="faqbtn agendabtn" href="#">
                          Learn More <span>&gt;</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cmnlist row">
                <div className="col-lg-12 p-0">
                  <div className="agendatxtwraper">
                    <div className="agndatxtouter d-flex">
                      <div className="cmnlisttxt col">
                        <h3>
                          Sharp Executive Welcome{" "}
                          <span className="hrt-img">
                            <img
                              className
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/heart-empty.png"
                              }
                            />
                          </span>
                        </h3>
                        <h3>Main Stage</h3>
                      </div>
                      <div className="agendabtnwrap text-right col-auto p-0">
                        <a className="faqbtn agendabtn" href="#">
                          Learn More <span>&gt;</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cmnlist row">
                <div className="col-lg-12 p-0">
                  <div className="agendatxtwraper">
                    <div className="agndatxtouter d-flex">
                      <div className="cmnlisttxt col">
                        <h3>
                          Emcee Introduction{" "}
                          <span className="hrt-img">
                            <img
                              className
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/heart-empty.png"
                              }
                            />
                          </span>
                        </h3>
                        <h3>Main Stage</h3>
                      </div>
                      <div className="agendabtnwrap text-right col-auto p-0">
                        <a className="faqbtn agendabtn" href="#">
                          Learn More <span>&gt;</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cmnlist row">
                <div className="col-lg-12 p-0">
                  <div className="agendatxtwraper">
                    <div className="cmnlisttxt">
                      <h2>9:20AM</h2>
                    </div>
                    <div className="agndatxtouter d-flex">
                      <div className="cmnlisttxt col">
                        <h3>
                          Opening Keynote{" "}
                          <span className="hrt-img">
                            <img
                              className
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/heart-empty.png"
                              }
                            />
                          </span>
                        </h3>
                        <h3>Main Stage</h3>
                      </div>
                      <div className="agendabtnwrap text-right col-auto p-0">
                        <a className="faqbtn agendabtn" href="#">
                          Learn More <span>&gt;</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*----==================faq listing section ends==================----*/}
          </div>
        </div>{" "}
      </Layout>
    </div>
  );
};

export default Agenda;
