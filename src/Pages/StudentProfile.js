import "../Styles/StudentProfile.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const StudentProfile = () => {
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
            <li><a className="pointer-hover"onClick={() => navigate("/addparcel")}>ADD PARCEL</a></li>
            <li><a className="pointer-hover"onClick={() => navigate("/studentcomplaints")}>COMPLAINTS</a></li>
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
                <td>alice_b22xxxxcs@nitc.ac.in</td>
              </tr>
              <tr>
                <td><strong>Roll Number</strong></td>
                <td>B22XXXXCS</td>
              </tr>
              <tr>
                <td><strong>Course</strong></td>
                <td>Bachelor of Technology</td>
              </tr>
              <tr>
                <td><strong>Major</strong></td>
                <td>Computer Science and Engineering</td>
              </tr>
              <tr>
                <td><strong>Hostel</strong></td>
                <td>MLH</td>
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

export default StudentProfile;
