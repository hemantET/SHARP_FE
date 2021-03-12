import React, { useState } from "react";
import AdminLayout from "../admin_Layout";
import { Link } from "react-router-dom";

const ShowAgenda = (props) => {


// -------------------------Collecting All Agenda------------------------

  const [agenda, setAgenda] = useState([]);

// -----------------------------Fetching Agenda From Server------------------
  fetch("/api/v1/agenda/getAllAgenda", {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("jwt"),
    },
  })
    .then((res) => res.json())
    .then((data) => {
      setAgenda(data.data);
    });
  console.log("ADMIN_AGENDA_INFO=====>", agenda);


  const deleteAgenda = (postid) => {
    fetch(`/api/v1/agenda/deleteAgenda/${postid}`, {
        method: "delete",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          const newData = agenda.filter((item) => {
            return item._id !== result._id;
          });
          setAgenda(newData);
        });
  }
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
                {
                    agenda.map((value)=>{
                       
                       return(<tr>
                        <th>{value.day}</th>
                        <td>{value.time}</td>
                        <td>{value.title}</td>
                        <td>{value.description}</td>
                         <td><button className="btn btn-sm btn-danger"  onClick={() => deleteAgenda(value._id)}>Delete</button></td> 
                      </tr>)
                    })
                }
             
            </tbody>
          </table>
        </div>
      </AdminLayout>
    </div>
  );
};
export default ShowAgenda;
