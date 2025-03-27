import "../Styles/StudentComplaints.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const StudentComplaints = () => {
    const navigate = useNavigate();
  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <div className="top-section">
          <div className="profile-circle" onClick={() => navigate("/studentprofile")}>A</div>
          <h1 className="title">DELIVERY MANAGEMENT</h1>
          <div className="Logout-symbol"></div>
        </div>
        <nav className="nav-bar">
          <ul className="nav-links">
            <li><a href="/">HOME</a></li>
            <li><a className="pointer-hover" onClick={() => navigate("/addparcel")}>ADD PARCEL</a></li>
            <li><a href="#">COMPLAINTS</a></li>
          </ul>
        </nav>
      </header>

      {/* Complaint Form */}
      <main className="content">
        <h2 className="complaint-title"><i>Complaint</i></h2>
        <div className="complaint-section">
          <h4>Enter Parcel Order Number</h4>
          <input type="text" placeholder="Enter order number" />
          <h4>What is your complaint?</h4>
          <textarea className="complaint-description" placeholder="Describe your complaint"></textarea><br></br>
          <button className="place-complaint-button">Place Complaint</button>
        </div>

        {/* Complaints List */}
        <h2 className="your-complaints-title"><i>Your Complaints</i></h2>
        <div className="complaints-list">
          <table>
            <thead>
              <tr>
                <th>Parcel Order Number</th>
                <th>Complaint</th>
                <th>Resolved</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>3422-7565-3499</td>
                <td><div className="complaint_info">Parcel to be delivered today not received yet</div></td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>6783-0876-9116</td>
                <td><div className="complaint_info">Status has not been updated correctly</div></td>
                <td>No</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default StudentComplaints;
