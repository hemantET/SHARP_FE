import React, { useState, useEffect, useContext } from "react";

import { Link } from "react-router-dom";

const [data, setData] = useState([]);

export default getData = () => {
  fetch("/test", {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
