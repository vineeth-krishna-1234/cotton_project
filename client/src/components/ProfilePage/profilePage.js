import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// files
import StatChart from "./Linechart";
import "./profilePage.css";
import maleimg from "./male.png";
import femaleimg from "./female.png";
import Doughnutchart from "./Doughnutchart";
import { updateUser } from "../../Redux components/authSlicer";

function ProfileComp() {
  const authToken = useSelector((state) => state.authreducer.authToken);
  const userId = useSelector((state) => state.authreducer.userName);
  const dispatch = useDispatch();
  let isHod = 1;
  const [userdetails, setuserdetails] = useState();
  const config = {
    headers: {
      Authorization: `Token ${authToken}`,
    },
  };
  useEffect(() => {
    let axios = require("axios");
    let fetchfunc = async () => {
      await axios
        .get("http://localhost:8000/Application/user_details/", config)
        .then((Response) => {
          dispatch(updateUser(Response.data.user_id));
          isHod = Response.data.is_hod;
          setuserdetails(Response.data);
        });
    };
    fetchfunc();
  }, []);
  return (
    <div id="profile_comp">
      <div id="details_div">
        {userdetails != null && (
          <div id="profile_div">
            <img
              src={userdetails.gender === "male" ? maleimg : femaleimg}
              alt="profile"
              id="profile_img"
            />
            <div id="user_details_header">
              <p>NAME</p>
              <p>GENDER</p>
              <p>UNIT</p>
              <p>EXPERIENCE</p>
              <p>DEPT</p>
              <p>DOJ</p>
              <p>DESIGNATION</p>
            </div>
            <div id="user_details_value">
              {isHod}
              <p>{userdetails.user_id}</p>
              <p>{userdetails.gender}</p>
              <p>{userdetails.unit}</p>
              <p>{userdetails.experience}</p>
              <p>{userdetails.dept}</p>
              <p>{userdetails.doj}</p>
              <p>{userdetails.designation}</p>
            </div>
            {isHod ? "" : <Doughnutchart />}
          </div>
        )}
      </div>
      {isHod ? (
        <div>
          <Link to="/hod-ratings">
            <button className="notifications_span">view users ratings</button>
          </Link>
          <Link to="/hod-objectives">
            <button className="notifications_span">
              view users completion
            </button>
          </Link>
          <Link to="/adduser">
            <button className="notifications_span">add user</button>
          </Link>
          <Link to="/removeuser">
            <button className="notifications_span">remove user</button>
          </Link>
        </div>
      ) : (
        <div>
          <h3>New notifications</h3>
          <div id="notification_div">
            <Link to="/ratingspage">
              <button className="notifications_span">
                Enter the current year's Self Appraisal values
              </button>
            </Link>
            <button className="notifications_span">
              Task completed on previous Years
            </button>
            <Link to="/objectives">
              <button className="notifications_span">
                Task completed in ongoing year
              </button>
            </Link>
          </div>
          <h3>Your stats</h3>
          <div id="compare_chart">
            <StatChart />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileComp;
