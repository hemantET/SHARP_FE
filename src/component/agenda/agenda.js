import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../layout";
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import paginate from "../Pagination/paginate";
import { gt } from "lodash";

const Agenda = (props) => {
  const [read_More, setReadMore] = useState(false);
  const users = useSelector((state) => state.users);
  console.log("useselector==========>", users[0].user);
  const [open, setOpen] = useState(false);
  // console.log("clickACTIVITY", open);
  const [agenda, setAgenda] = useState([]);
  // const [fav, setFav] = useState();
  // console.log("AGENDA_FAV_DATA",fav)

  const heart = (agendaId) => {
    console.log(agendaId);
    setOpen((open) => !open);
    fetch("/api/v1/agenda/addFavouriteAgenda", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        agenda_id: agendaId,
        user_id: users[0].user._id,
        status: open,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("AGENDA_FAV_DATA", data.data);
        // setFav(data.data.status)
      });
  };
  //READ MORE
  var readMore = (data) => {
    console.log("clickACTIVITY", data);
    setReadMore((read_More) => !read_More);
  };

  //GETTING ALL AGENDA

  const getAgendaData = () => {
    fetch("/api/v1/agenda/getAllAgenda", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAgenda(data.data);
      });
  };

  useEffect(() => {
    getAgendaData();
  }, []);

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
                <Link to="/profile">View My Agenda</Link>
              </div>
            </div>
            <div>
              {agenda.map((value) => {
                return (
                  <div>
                    <div className="agendalistheading">
                      <h1>{value.day}</h1>
                    </div>
                    <div className="cmnlistwrap agendalistwrap red-box">
                      <div className="cmnlist row">
                        <div className="col-lg-12 p-0">
                          <div className="agendatxtwraper">
                            <div className="cmnlisttxt">
                              <h2>
                                {value.time} {value._id}
                              </h2>
                            </div>
                            <div className="agndatxtouter d-flex">
                              <div className="cmnlisttxt col">
                                <h3>
                                  {value.title}
                                  <span
                                    onClick={() => {
                                      heart(value._id);
                                    }}
                                  >
                                    {open ? (
                                      <span className="hrt-img">
                                        <img
                                          className
                                          src={
                                            process.env.PUBLIC_URL +
                                            "/assets/images/heartfill-2.png"
                                          }
                                        />
                                      </span>
                                    ) : (
                                      <span className="hrt-img">
                                        <img
                                          className
                                          src={
                                            process.env.PUBLIC_URL +
                                            "/assets/images/heart-empty.png"
                                          }
                                        />
                                      </span>
                                    )}
                                  </span>
                                </h3>
                                <h3>Main Stage</h3>
                                <div className="faq-excert ">
                                  <p>
                                    {read_More
                                      ? value.description.substring(0, 300)
                                      : value.description}
                                  </p>
                                </div>
                              </div>
                              <div className="agendabtnwrap text-right col-auto p-0">
                                <div className="agendabtnwrap text-right col-auto p-0">
                                  <a
                                    className="faqbtn agendabtn"
                                    href="#"
                                    onClick={(e) => readMore(value)}
                                  >
                                    Learn More{" "}
                                    {read_More
                                      ? value._id && <>&gt;</>
                                      : value._id && <span>&gt;</span>}
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Agenda;
