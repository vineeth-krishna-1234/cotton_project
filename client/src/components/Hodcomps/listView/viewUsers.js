import React from "react";
import "./viewUsers.css";
import { BsFillPersonFill, BsArrowRight } from "react-icons/bs";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function ViewUsers(props) {
  const actiontype = props.ActionType;
  const [userDetails, setuserDetails] = useState([]);
  const authToken = useSelector((state) => state.authreducer.authToken);
  const config = {
    headers: {
      Authorization: `Token ${authToken}`,
    },
  };
  useEffect(() => {
    let axios = require("axios");
    axios
      .get("http://localhost:8000/Super-user/ratings-list/", config)
      .then((Response) => {
        setuserDetails(Response.data);
      });
  });

  return (
    <div>
      <input></input>
      <label>Search</label>
      <div class="profile-cards">
        {userDetails.length &&
          userDetails.map((obj) => (
            <div class="profile-card">
              <div class="card__icon">
                <BsFillPersonFill />
              </div>
              <p class="card__exit"></p>
              <h2 class="card__title">{obj}</h2>
              <p class="card__apply">
                <Link
                  to={
                    actiontype === "Enter Ratings"
                      ? "/ratingspage"
                      : "/objectives"
                  }
                >
                  <a class="card__link" href="#">
                    {actiontype} <BsArrowRight className="BsArrowRight" />
                  </a>
                </Link>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ViewUsers;
