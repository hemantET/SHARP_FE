import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Slider from "react-slick";
const MainStage = (props) => {
  var settings = {
    arrows:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnDotsHover:true
  };
  return (
    <div>
      <div className="slide-container">
        <Slider {...settings}>
          <div className="each-slide">
            <span>
              {/* -------------------------------MAINSTAGE_CARD_START------------------ */}
              <div
                className="content-sec mainstagewrap"
                style={{ marginTop: "10px", padding: "0px" }}
              >
                <div className="mainstagelistwrap">
                  <div className="container">
                    <div className="mainstagelist row">
                      <div className="col-lg-4 p-0">
                        <div className="mainstagelistimg">
                          <img
                            className="img-fluid"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/mainstagelistimg.png"
                            }
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 p-0">
                        <div className="mainstagelisttxt">
                          <h2>
                            LOREM IPSUM DOLOR SIT AMET, CONSECTETUER | 9:00 AM
                          </h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam, quis nostrud exerci tation
                            ullamcorper suscipit lobortis Lorem ipsum dolor sit
                            amet, consectetuer adipiscing elit, sed diam nonummy
                            nibh euismod tincidunt ut laoreet dolore magna
                            aliquam erat volutpat. Ut wisi enim ad minim veniam,
                            quis nostrud exerci tation ullamcorper suscipit
                            lobortis
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* -------------------------------MAINSTAGE_CARD_END------------------ */}
            </span>
          </div>
          <div className="each-slide">
            <span>
              {/* -------------------------------MAINSTAGE_CARD_START------------------ */}
              <div
                className="content-sec mainstagewrap"
                style={{ marginTop: "10px", padding: "0px" }}
              >
                <div className="mainstagelistwrap">
                  <div className="container">
                    <div className="mainstagelist row">
                      <div className="col-lg-4 p-0">
                        <div className="mainstagelistimg">
                          <img
                            className="img-fluid"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/mainstagelistimg.png"
                            }
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 p-0">
                        <div className="mainstagelisttxt">
                          <h2>
                            LOREM IPSUM DOLOR SIT AMET, CONSECTETUER | 9:00 AM
                          </h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam, quis nostrud exerci tation
                            ullamcorper suscipit lobortis Lorem ipsum dolor sit
                            amet, consectetuer adipiscing elit, sed diam nonummy
                            nibh euismod tincidunt ut laoreet dolore magna
                            aliquam erat volutpat. Ut wisi enim ad minim veniam,
                            quis nostrud exerci tation ullamcorper suscipit
                            lobortis
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* -------------------------------MAINSTAGE_CARD_END------------------ */}
            </span>
          </div>
          <div className="each-slide">
            <span>
              {/* -------------------------------MAINSTAGE_CARD_START------------------ */}
              <div
                className="content-sec mainstagewrap"
                style={{ marginTop: "10px", padding: "0px" }}
              >
                <div className="mainstagelistwrap">
                  <div className="container">
                    <div className="mainstagelist row">
                      <div className="col-lg-4 p-0">
                        <div className="mainstagelistimg">
                          <img
                            className="img-fluid"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/mainstagelistimg.png"
                            }
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 p-0">
                        <div className="mainstagelisttxt">
                          <h2>
                            LOREM IPSUM DOLOR SIT AMET, CONSECTETUER | 9:00 AM
                          </h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam, quis nostrud exerci tation
                            ullamcorper suscipit lobortis Lorem ipsum dolor sit
                            amet, consectetuer adipiscing elit, sed diam nonummy
                            nibh euismod tincidunt ut laoreet dolore magna
                            aliquam erat volutpat. Ut wisi enim ad minim veniam,
                            quis nostrud exerci tation ullamcorper suscipit
                            lobortis
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* -------------------------------MAINSTAGE_CARD_END------------------ */}
            </span>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default MainStage;
