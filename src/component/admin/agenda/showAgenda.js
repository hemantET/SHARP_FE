import React, { useState, useEffect } from "react";
import AdminLayout from "../admin_Layout";
import { Link } from "react-router-dom";

const ShowAgenda = (props) => {
  const [open, setOpen] = useState(false);

  // -------------------------Collecting All Agenda------------------------

  const [agenda, setAgenda] = useState([]);
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [agendaId, setAgendaId] = useState("");
  console.log("dttd===<", day, time, title, description, agendaId, open);
  // -----------------------------Fetching Agenda From Server------------------
  const getAgendaData = () => {
    fetch("/api/v1/agenda/getAllAgenda", {
      headers: {
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
  console.log("ADMIN_AGENDA_INFO=====>", agenda);

  //   ---------------------------------DELETE AGENDA------------------------------------

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
        console.log("DELETE RESULT===>", result);
        getAgendaData();
        const newData = agenda.filter((item) => {
          return item._id !== result._id;
        });
        setAgenda(newData);
      });
  };

  //   -----------------------------UPDATE AGENDA----------------------------------
  const updateAgenda = (data) => {
    console.log("UpdateID========>", data);
    setDay(data.day);
    setTime(data.time);
    setTitle(data.title);
    setdescription(data.description);
    setAgendaId(data._id);
    setOpen((open) => !open);
  };

  const Update_Agenda_Data = (agendaId) => {
    console.log("UPDATE RESULT===>", agendaId);
    fetch(`/api/v1/agenda/updateAgenda/${agendaId}`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        day,
        time,
        title,
        description
      }),
    })
      .then((res) => res.json())
      .then((result) => {
          console.log("ahsgdjkas",result)
         
        // getAgendaData();
        // const newData = agenda.filter((item) => {
        //   return item._id == result._id;
        // });
        // setAgenda(newData);
      });
  };

  var showEditForm = () => {
    return <h1>yes done</h1>;
  };
  return (
    <div>
      <AdminLayout>
        <div style={{ padding: "150px", width: "1200px" }}>
          <div>
            <button
              className="btn btn-sm btn-warning "
              style={{ float: "right" }}
            >
              <Link to="/admin/agenda_create" style={{ color: "white" }}>
                <b>Add Agenda</b>
              </Link>
            </button>
          </div>
          {open ? null : (
            <table
              class="table "
              style={{ marginTop: "80px", marginBottom: "200px" }}
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
                {agenda ? agenda.map((value) => {
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
                          Delete
                        </button>
                        <br />
                        <br />

                        <div>
                          {/* Button trigger modal */}
                          <button
                            //type="button"
                            onClick={() => updateAgenda(value)}
                            className="btn btn-sm btn-danger"
                            //   data-toggle="modal"
                            //   data-target="#exampleModal"
                          >
                            Edit
                          </button>
                          {/* Modal */}
                        </div>
                      </td>
                    </tr>
                  );
                }):null}
              </tbody>
            </table>
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
                      onClick={Update_Agenda_Data(agendaId)}
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
