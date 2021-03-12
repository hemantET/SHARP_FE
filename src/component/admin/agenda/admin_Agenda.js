import React, { useState,useEffect } from "react";
import AdminLayout from "../admin_Layout";
import { Link,useHistory } from "react-router-dom";
const AdminAgenda = (props) => {
  const history = useHistory();
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const PostData = () => {
    fetch("/api/v1/agenda/createAgenda", {
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
      }),
    }) 
    // .then((res) => res.json())
    // .then((data) => {
    //   console.log("USER_DATA====>", data);
    //   if (data.data.token) {
    //     history.push("/admin/agenda_show");
    //   }
    // })
  };
  return (
    <div>
      <AdminLayout>
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
         
          <div className="col-md-4" style={{marginBottom:"300px",marginTop:"100PX"}}>
            
            <h1 className="text-center" style={{color:"yellow"}}> ADD AGENDA</h1>
            <br></br>
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
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-warning btn-block "
                onClick={() => PostData()}
              >
                Add Aggenda
              </button>
            </form>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
      </AdminLayout>
    </div>
  );
};
export default AdminAgenda;
