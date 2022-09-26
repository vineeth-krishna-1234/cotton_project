import React from "react";
import "./LoginPage.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateToken } from "../../Redux components/authSlicer";

function LoginPage() {
  const [usercred, setusercred] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {}, [navigate]);
  let submitHandler = (e) => {
    e.preventDefault();
    const axios = require("axios");
    const fetchdata = async () => {
      await axios
        .post("http://localhost:8000/Authentication/login/", usercred)
        .then((Response) => {
          if (Response.status === 200) {
            dispatch(updateToken(Response.data));
            navigate("/profile");
          }
        })
        .catch((error) => {
          window.alert("Wrong credentials");
        });
    };
    fetchdata();
  };
  return (
    <div id="login_div">
      <div className="center">
        <h1>Login</h1>
        <form>
          <div className="text-field">
            <input
              type="text"
              required
              onChange={(e) => {
                setusercred({
                  username: e.target.value,
                  password: usercred.password,
                });
              }}
            />
            <label>Username</label>
          </div>
          <div className="text-field">
            <input
              type="password"
              required
              onChange={(e) => {
                setusercred({
                  username: usercred.username,
                  password: e.target.value,
                });
              }}
            />
            <label>Password</label>
          </div>
          <input type="submit" value="login" onClick={submitHandler} />
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
