import React from "react";
import "./objectiveForm.css";
function ObjectiveForm() {
  return (
    <div>
      <div id="objectives_page">
        <p>
          <h3>PRECOT MERIDIAN LIMITED</h3>
          <h3>OBJECTIVES/GOALS FOR THE YEAR 2020-2021</h3>
        </p>

        <table>
          <tr>
            <th>SI.NO</th>
            <th>Objectives / Goal Fixed</th>
            <th>Description of the Objectives / Goals (if any)</th>
            <th>Unit of Measurements (NOs / % / Ratio /Date,etc)</th>
            <th>Target Date</th>
            <th>
              Achievement Status(Exceedingly achieved / Fully achieved /
              Partially achieved / Not achieved)
            </th>
          </tr>
          <tr>
            <td>1</td>
            <td>New Development</td>
            <td>
              Application/Report development of HR,PH,PP and other modules in
              SAP/Non SAP
            </td>
            <td>5 No</td>
            <td>Quartely</td>
            <td>Fully achieved</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Resolve ticketing</td>
            <td>Regular support issues in attendance, PH and SAP BI modules</td>
            <td>High-4hrs Medium-8hrs Low-24hrs</td>
            <td>Monthly</td>
            <td>Partially achieved. Need speed.</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Documentation</td>
            <td>
              To achieve 80% of document preparation for all new development and
              corrections
            </td>
            <td>70%</td>
            <td>Quartely</td>
            <td>Partially achieved.</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Learning & Implementation</td>
            <td>1</td>
            <td>1No</td>
            <td>Monthly</td>
            <td>Partially achieved. 1. SAP ABAP 2. Adobe partially</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Customer feedback</td>
            <td>To achieve Customer feedback</td>
            <td>180%</td>
            <td>Monthly</td>
            <td>Partially achieved</td>
          </tr>
        </table>
      </div>

      <div>
        <table>
          <tr>
            <th>Appraisee(Self Assessment)</th>
            <th>Appraiser's Assessment</th>
            <th>Reviewer's Comments</th>
          </tr>
          <tr>
            <td></td>
            <td>
              Good in. Net & VB programming. Managing Functional area like
              attendance, BI reports. Need to improve on understanding the
              business requirement to self support.And also need to learn new
              Technologies to meet current requirements. For cost saving and
              simplification should focus on using open source tools to develop
              programs as such as possible to reduce the cost.
            </td>
            <td></td>
          </tr>
        </table>
      </div>

      <div>
        <table>
          <tr>
            <th>SI. NO</th>
            <th>Development Plan</th>
            <th>Description</th>
            <th>Target Date</th>
          </tr>
          <tr>
            <td>1</td>
            <td>New learning</td>
            <td>
              SAP advanced ABAP, Adobe Forms development,Open source tools to
              simplify development or codes less programming etc.
            </td>
            <td>Jun-21</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Program Development</td>
            <td>
              Automate attendance, canteen, payroll master and HR activities
              through simple programs
            </td>
            <td>Sep-21</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Document Preparation</td>
            <td>
              Prepare documents for all development like logic,tables
              used,conditions & scope to refer in future for enhancements or
              further developments.
            </td>
            <td>Dec-21</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default ObjectiveForm;
