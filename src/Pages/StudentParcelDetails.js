import "../Styles/StudentParcelDetails.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentParcelDetails = () => {
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
        {/* <nav className="nav-bar">
          <ul className="nav-links">
            <li><a href="/">HOME</a></li>
            <li><a className="pointer-hover" onClick={() => navigate("/addparcel")}>ADD PARCEL</a></li>
            <li><a className="pointer-hover" onClick={() => navigate("/studentcomplaints")}>COMPLAINTS</a></li>
          </ul>
        </nav> */}
        </header>
         {/* Main Content Section */}
      <main className="content">
        <h2 className="parcel-detail-title"><i>Parcel Details</i></h2>
        <div className="detail-section">
          <table>
            <tbody>
              <tr>
                <td><strong>Delivery Service Name</strong></td>
                <td>Amazon</td>
              </tr>
              <tr>
                <td><strong>Parcel order Number</strong></td>
                <td>1231-1244-24134</td>
              </tr>
              <tr>
                <td><strong>Date of delivery</strong></td>
                <td>14-02-2025</td>
              </tr>
              <tr>
                <td><strong>Description of parcel</strong></td>
                <td className="parcel_info">Nike shoes blue and white</td>
              </tr>
              <tr>
                <td><strong>OTP</strong></td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="button-section">
        <button className="button back-btn" onClick={() => navigate(-1)}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCElEQVR4nO2WvYrCQBRGY+1PIRi02M5iS+3tfCiL1ecQxRfY3cbKchcVEcVtFExr5w9speXCkWGvEEVMouYKktOEKeY7c+/MJLGsiEcC2MAP0NWWzvhnpCXNAFOROkD2OaUGYMLt7GTRTaBsKYpP+QbyXmL3oTJP29eKjzPiQAF4A1aS9QuUQpe7spLAu0ueDyIfXyuWrBjwIVlffibYsufDW8Suytci93fg7gVQFXFDW1wQsaMtToh4qy1OHS72o1rd1hbXRFzRbvMG+ANetKTmBfIp1bY0Kz1IF0A67GtTlD017TUsgddLkwZAP8C4jzcdIOe1WhPUCzg+9yMwB+qen8KICCsk9pWmbwXtUJ6RAAAAAElFTkSuQmCC"
                            alt="back-logo" className="back-img" /><span className="back">Back</span></button>
        <button className="button edit-btn">Edit details</button>
        </div>
      </main>
        </div>
    );
};

export default StudentParcelDetails;
