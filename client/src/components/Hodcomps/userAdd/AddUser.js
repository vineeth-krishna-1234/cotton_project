import React from "react";

function AddUser() {
  return (
    <div>
      <label>user id</label>
      <input></input>
      <label>user name</label>
      <input></input>
      <label>first name</label>
      <input></input>
      <label>last name</label>
      <input></input>
      <label>gender</label>
      <input type="radio" name="male" value="male"></input>
      <label for="male">male</label>
      <input type="radio" name="female" value="female"></input>
      <label for="female">female</label>
      <br />
      <label>unit</label>
      <input></input>
      <label>experience</label>
      <input type="number"></input>
      <label>department</label>
      <input></input>
      <label>date of join</label>
      <input type="date"></input>
    </div>
  );
}

export default AddUser;
