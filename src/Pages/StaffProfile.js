import "../Styles/StaffProfile.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const StaffProfile = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <div className="top-section">
          <div className="profile-circle">A</div>
          <h1 className="title">DELIVERY MANAGEMENT</h1>
          <div className="Logout-symbol"></div>
        </div>
        <nav className="nav-bar">
          <ul className="nav-links">
            <li><a href="/">HOME</a></li>
            <li><a className="cursor-hover" onClick={() => navigate("/staffparcelstatus")}>PARCEL STATUS</a></li>
            <li><a className="cursor-hover" onClick={() => navigate("/staffcomplaints")}>COMPLAINTS</a></li>
            <li><a className="cursor-hover" onClick={() => navigate("/staff-feedbackview")}>FEEDBACK</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content Section */}
      <main className="content">
        <h2 className="profile-title"><i>My Profile</i></h2>
        <div className="profile-section">
          <table>
            <tbody>
              <tr>
                <td><strong>Name</strong></td>
                <td>Alice</td>
              </tr>
              <tr>
                <td><strong>NITC Email Address</strong></td>
                <td>alice@nitc.ac.in</td>
              </tr>
              <tr>
                <td><strong>Staff ID</strong></td>
                <td>XXXXXXXX</td>
              </tr>
              <tr>
                <td><strong>Gender</strong></td>
                <td>Female</td>
              </tr>
              <tr>
                <td><strong>Mobile Number</strong></td>
                <td>9876543210</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button className="edit-button">Edit details</button>
      </main>
    </div>
  );
};

export default StaffProfile;
