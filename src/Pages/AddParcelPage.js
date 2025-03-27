import "../Styles/AddParcelPage.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const AddParcelPage = () => {
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
            <li><a href="#"><u>ADD PARCEL</u></a></li>
            <li><a className="point-hover" onClick={() => navigate("/studentcomplaints")}>COMPLAINTS</a></li>
          </ul>
        </nav>
      </header>

      {/* Add parcel Form */}
      <main className="content">
        <div className="parcel-title2">
           <h2><i>ADD PARCEL</i></h2>
           <div className="add-symbol"></div>
        </div>

        <div className="add-parcel-section">
          <h4>Enter Delivery service name<span style={{ color: 'red' }}>*</span></h4>
          <input className="parcel-input" type="text" placeholder="Enter service name" />
          <h4>Enter Parcel order Number<span style={{ color: 'red' }}>*</span></h4>
          <input className="parcel-input" type="text" placeholder="Enter order number" />
          <h4>Enter Date of delivery<span style={{ color: 'red' }}>*</span></h4>
          <input className="parcel-input" type="text" placeholder="Enter delivery date" />
          <h4>Description of Parcel, if any</h4>
          <textarea className="parcel-description" placeholder="Describe your parcel"></textarea><br></br>
          <h4>OTP, if provided</h4>
          <input className="parcel-input" type="text" placeholder="Enter OTP" />
        </div>
        <button className="submit-button">Submit</button>
      </main>
    </div>
  );
};

export default AddParcelPage;
