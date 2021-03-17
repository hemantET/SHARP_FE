import React, { useState, useEffect } from "react";
import AdminLayout from "../admin_Layout";
import { Link } from "react-router-dom";
import Pagination from "../../Pagination/Pagination";
import { paginate } from "../../Pagination/paginate";
import ReactPaginate from 'react-paginate';
import _ from "lodash";
const ShowAgenda = (props) => {
  const [open, setOpen] = useState(false);

  // -------------------------Collecting All Agenda------------------------

  const [agenda, setAgenda] = useState([]);
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [agendaId, setAgendaId] = useState("");
  const [profile_img, setImage] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  console.log("dttd===<", day, time, title, description, agendaId, open);
  // -----------------------------Fetching Agenda From Server------------------

  var handlePageChange = (page) => {
    setCurrentPage({ currentPage: page });
  };

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
    setTimeout(() => {
      getAgendaData();
    }, [agenda]);
  }, 2000);

  console.log("ADMIN_AGENDA_INFO=====>", agenda);

  // ---------------------------------DELETE AGENDA------------------------------------

  const deleteAgenda = (postid) => {
    console.log("DeleteID", postid);
    fetch(`/api/v1/agenda/deleteAgenda/${postid}`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        alert("DELETED SUCCESFULLY");
        console.log("DELETE RESULT===>", result);
        getAgendaData();
        const newData = agenda.filter((item) => {
          return item._id !== result._id;
        });
        setAgenda(newData);
      });
  };

  // -----------------------------UPDATE AGENDA----------------------------------
  const updateAgenda = (data) => {
    console.log("UpdateID========>", data.profile_img);
    setDay(data.day);
    setTime(data.time);
    setTitle(data.title);
    setdescription(data.description);
    setAgendaId(data._id);
    setImage(data.profile_img);

    // setImage(URL.createObjectURL(data.profile_img))
    // this.setState({
    // image: URL.createObjectURL(event.target.files[0])
    // });

    setOpen((open) => !open);
  };

  const Update_Agenda_Data = (e) => {
    console.log("UPDATE RESULT===>", agendaId);
    fetch(`/api/v1/agenda/updateAgenda/${agendaId}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        day,
        time,
        title,
        description,
        profile_img,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("ahsgdjkas", result);
        setTimeout(() => {
          getAgendaData();
        }, 2000);
      });
  };

  const searchData = (e) => {
    console.log("ee", e);
    fetch(`/api/v1/agenda/search/?q=${e}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data.data);
        setAgenda(data.data);
      });
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      console.log("image", event.target.files[0]);
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  console.log("image", profile_img);
  if (agenda.length === 0) <p>No AGENDA IN DATA BASE</p>;
  var movies = paginate(agenda, currentPage, pageSize);
  return (
    <div>
      <AdminLayout>
        <div style={{ padding: "150px", width: "1200px" }}>
          <div></div>
          {open ? null : (
            <>
              <div class="form-group has-search">
                <span class="fa fa-search form-control-feedback"></span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search here"
                  onChange={(e) => searchData(e.target.value)}
                />
              </div>
              <button
                className="btn btn-sm btn-warning "
                style={{ float: "right" }}
              >
                <Link to="/admin/agenda_create" style={{ color: "white" }}>
                  <b>Add Agenda</b>
                </Link>
              </button>
              <table
                class="table table-bordered  "
                style={{ marginTop: "80px",fontFamily:"arial"
                ,marginBottom: "200px",borderCollapse:"collapse" }}
              >
                <thead class="thead-light">
                  <tr>
                    <th scope="col">Day</th>
                    <th scope="col">Time</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {agenda
                    ? agenda.map((value) => {
                        return (
                          <tr>
                            <th>{value.day}</th>
                            <td>{value.time}</td>
                            <td>{value.title}</td>
                            <td>{value.description}</td>
                            <td>
                              <button
                                className="btn btn-sm btn-danger"
                                onClick={() => deleteAgenda(value._id)}
                              >
                                <i style={{fontSize:"24px"}} className="fa">&#xf014;</i>
                              </button>
                              <br />
                              <br />

                              <div>
                                <button
                                  onClick={() => updateAgenda(value)}
                                  className="btn btn-sm btn-primary "
                                >
                                  
                                  <i style={{fontSize:"24px"}} className="material-icons">&#xe254;</i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    : null}
                </tbody>
                {/* <Pagination
                  itemsCount={agenda.length}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                /> */}
              </table>
            </>
          )}

          <div>
            {open ? (
              <div>
                <div style={{ marginTop: "50px" }}>
                  <form>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Days</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Days"
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Time</label>
                      <input
                        type="time"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                      />
                    </div>
                    <img
                      id="target"
                      src={profile_img}
                      style={{ width: "200px" }}
                    />
                    <div className="form-group">
                      <input
                        id="imageUpload"
                        type="file"
                        name="profile_photo"
                        placeholder="Photo"
                        onChange={onImageChange}
                        required=""
                        capture
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Title</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Description</label>
                      <textarea
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setdescription(e.target.value)}
                      />
                    </div>
                    <button
                      className="btn btn-block btn-warning"
                      style={{ color: "white" }}
                      onClick={Update_Agenda_Data}
                    >
                      Edit Agenda
                    </button>
                  </form>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </AdminLayout>
    </div>
  );
};
export default ShowAgenda;
