import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ratingsPage.css";
import { useNavigate } from "react-router";
const totalDetail = [
  {
    heading: "Systems & procedure",
    details:
      "follows established systems,procedure and work methods whil focusing on the assigned tasks and stays result oriented",
  },
  {
    heading: "Takes initiative",
    details:
      "Proactive ,anticipates possible blockades,selfdriven,respects ideas of others,put efforts for better results",
  },
  {
    heading: "Creativity",
    details:
      "With new and innovative ideas,observes,recalls happenings,evaluate,research and finds better way ot work by implepmenting new ideas",
  },
  {
    heading: "Works well in a team",
    details:
      "Effective explicit communication and exibits leadership in activties as a team menmver towardds acheiveing the team goal",
  },
  {
    heading: "Knowledge sharing",
    details:
      "INteracts ,shares best work practive explicitly transparent dealing with collegueus and keeps them updated on recent work releated happenings in organization",
  },
  {
    heading: "Decision making",
    details:
      "Forsees the result analyse and finds the best  positive logical option for acheiving the same by fact-based analysis and whit backup information/data",
  },
  {
    heading: "Cost& quality consciousness",
    details:
      "Understands organization goals,identifies measurable individual foal refines work methods,focus on eliminating waste,conscious on cost effective and impoving efficiency",
  },
  {
    heading: "training & motivation",
    details:
      "Identifies skill gap and arrenges suitable training/inputs to juniors.Motivate team members so thath the best comes out from them",
  },
  {
    heading: "Customer Focus",
    details:
      "Is conscious on the internal?expernal customer need and strive to find ways thath would enhance service/delivery/quality to customers",
  },
  {
    heading: "General conduct & discipline",
    details:
      "Express opinion polietly,adheres to all disciplinary instructions",
  },
];

function RatingsPage() {
  const navigate = useNavigate();
  const isHod = 0;
  const user_assessment_values=[1,2,3,4,5,6,7,8,9,0,]
  const [fields, setFields] = useState({
    assessment_values: {
      field_1: 0,
      field_2: 0,
      field_3: 0,
      field_4: 0,
      field_5: 0,
      field_6: 0,
      field_7: 0,
      field_8: 0,
      field_9: 0,
      field_10: 0,
    },
    hod_assessment_values: {
      field_1: 0,
      field_2: 0,
      field_3: 0,
      field_4: 0,
      field_5: 0,
      field_6: 0,
      field_7: 0,
      field_8: 0,
      field_9: 0,
      field_10: 0,
    },
    apparisal: "",
  });
  const checkingValue = () => {
    for (let key in fields.userData) {
      if (fields.userData[key] > 10 || fields.userData[key] < 0) {
        window.alert("Enter data on  a scale of 10");
        return 0;
      }
    }
    if (
      !(
        fields.apparisal &&
        fields.apparised &&
        fields.appariser &&
        fields.date_submited
      )
    ) {
      window.alert("Enter all fields");
      return 0;
    }

    return 1;
  };
  const dataValidator = (e) => {
    e.preventDefault();
    if (checkingValue()) {
      const passingData = {
        assessment_values: fields.assessment_values,
        apparisal: fields.apparisal,
        apparised: fields.apparised,
        appariser: fields.appariser,
        date_submited: fields.date_submited,
      };
      let authToken = sessionStorage.getItem("authToken");

      axios
        .post("http://localhost:8000/Application/ratings/", passingData, {
          headers: {
            Authorization: `Token ${authToken}`,
          },
        })
        .then((Response) => {
          if (Response.status == 201) {
            window.alert("Submitted");
            navigate("/profile");
          } else {
            window.alert("something went wrong try again");
          }
        });
    } else {
      console.log("not ok");
    }
  };
  return (
    <div id="ratings_div">
      <div id="main-heading">
        <span>
          VALUE Assessment -2020-2021 -Ratings & comments -senior
          officers/officers/dy.officers
        </span>
      </div>

      <table id="form-div">
        <tr>
          <th>NO</th>
          <th>VALUES</th>
          {isHod?<th>self</th>:""}
          <th>{isHod ? "Hod" : "Self"}</th>
        </tr>
        <tbody>
          {totalDetail.length > 0 &&
            totalDetail.map((obj, index) => (
              <>
                <tr>
                  <td>
                    <b>{index + 1}</b>
                  </td>
                  <td>
                    <b>{obj.heading}</b>
                    <br />
                    {obj.details}
                  </td>
                  {isHod?<td>{user_assessment_values[index]}</td>:""}
                  <td>
                    <input
                      onChange={(e) => {
                        setFields({
                          ...fields,
                          assessment_values: {
                            ...fields.assessment_values,
                            [`field_${e.target.id}`]: e.target.value,
                          },
                        });
                      }}
                      id={index + 1}
                      type="number"
                      min="0"
                      max="10"
                      required
                      className="input_field_users"
                    ></input>
                  </td>
                </tr>
                <span className="ruler_span"></span>
              </>
            ))}
        </tbody>
      </table>
      <label>apparisal</label>
      <input type="text"></input>
      <button onClick={dataValidator} id="submit_button">
        Submit
      </button>
      <div>
        <ol id="values-list">
          <li style={{ borderBottom: "10px solid black" }}>Value levels</li>
          <li style={{ borderBottom: "10px solid rgb(55, 255, 0)" }}>
            Role model[9-10]
          </li>
          <li style={{ borderBottom: "10px solid rgb(42, 159, 6)" }}>
            Expert[7-8]
          </li>
          <li style={{ borderBottom: "10px solid rgb(18, 66, 4)" }}>
            Mature[5-6]
          </li>
          <li style={{ borderBottom: "10px solid rgb(72, 4, 6)" }}>
            Beginner[3-4]
          </li>
          <li style={{ borderBottom: "10px solid rgb(236, 16, 23)" }}>
            Negative[1-2]
          </li>
        </ol>
      </div>
    </div>
  );
}

export default RatingsPage;
