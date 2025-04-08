import { useNavigate } from "react-router-dom";
import "../Styles/StudentLandingPage.css";
import axios from "axios"
import React, { useEffect, useState } from "react";
const StudentLandingPage = () => {

  const navigate = useNavigate();
  const [parcels , setParcels] = useState([]);

  useEffect(function(){
    const tempData = async () => {
      const parcelData = await axios.get("http://localhost:3001/parcel" , {withCredentials: true});
      const hello = parcelData.data;
      setParcels(hello);
    }
    tempData();
  } , [])

  async function logOut(){
    await axios.get("http://localhost:3001/student/logout" , {withCredentials: true});
    navigate("/")
  }

  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <div className="top-section">
          <div className="profile-circle" onClick={() => navigate("/studentprofile")}>A</div>
          <h1 className="title">DELIVERY MANAGEMENT</h1>
          <button onClick={logOut}>Logout</button>
        </div>
        <nav className="nav-bar">
          <ul className="nav-links">
            <li><a href="/home"><u>HOME</u></a></li>
            <li><a className="pointer-hover" onClick={() => navigate("/addparcel")}>ADD PARCEL</a></li>
            <li><a className="pointer-hover" onClick={() => navigate("/studentcomplaints")}>COMPLAINTS</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content Section */}
      <main className="content">
        <h2>WELCOME ALICE</h2>
        <h3>Your parcels</h3>
        <div className="parcel-section">
          <table>
            <thead>
              <tr className="table-header">
                <th>Parcel number</th>
                <th>Delivery service</th>
                <th>Parcel date</th>
                <th>Staff Status</th>
                <th>Your Status</th>
              </tr>
            </thead>
            <tbody>
              {parcels.map((parcel, index) => (
                <tr key={index}>
                  <td className="clickable-parcel"
                  onClick={() => {
                    navigate("/studentparceldetails/" + parcel.parcelOrderNumber)
                  }}>
                  {parcel.parcelOrderNumber}</td>
                  <td>{parcel.serviceName}</td>
                  <td>{parcel.dateOfDeleivery}</td>
                  <td>{parcel.receptionStatus ? "Received" : "Pending"}</td>
                  <td className="text-center" onClick={() => navigate("/feedbackform")}>
                    <input type="checkbox" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};


export default StudentLandingPage
