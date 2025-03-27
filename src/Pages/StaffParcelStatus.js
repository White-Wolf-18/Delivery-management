import { useNavigate } from "react-router-dom";
import "../Styles/StaffParcelStatus.css";
import React from "react";
const clearSearch = () => {
    document.getElementById("search-input").value = ""; // Clears the search input
  };  
const StaffParcelStatus = () => {
  const parcels = [
    { number: "1231-1244-24134", name: "Alice", rollno: "B220001CS" },
    { number: "4747-7874-6874", name: "Jonas", rollno: "B210987EC" },
    { number: "9093-1430-0439", name: "Edward", rollno: "B230056EE" },
    { number: "1653-4637-9325", name: "Lucy", rollno: "M230067CS" },
    { number: "1788-9037-6735", name: "Harry", rollno: "B241023ME" },
    { number: "1788-9037-6735", name: "Janice", rollno: "B220267CS" },
    { number: "1788-9037-6735", name: "Alex", rollno: "M240145EC" },
  ];
  const navigate = useNavigate();
  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <div className="top-section">
          <div className="profile-circle" onClick={() => navigate("/staffprofile")}>A</div>
          <h1 className="title">DELIVERY MANAGEMENT</h1>
          <div className="Logout-symbol"></div>
        </div>
        <nav className="nav-bar">
          <ul className="nav-links">
            <li><a href="/">HOME</a></li>
            <li><a href="#"><u>PARCEL STATUS</u></a></li>
            <li><a href="#">COMPLAINTS</a></li>
            <li><a href="#">FEEDBACK</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content Section */}
      <main className="content">
      <h3><i>Received parcels</i></h3>
      <div className="search-container">
        <span className="search-icon">🔍</span>
        <input type="text" id="search-input" className="search-input" placeholder="Search" />
        <span className="clear-icon" onClick={clearSearch}>❌</span>
      </div>
        <div className="parcel-section">
          <table>
            <thead>
              <tr className="table-header">
                <th>Parcel number</th>
                <th>Student Name</th>
                <th>Roll Number</th>
                <th>Received by Student</th>
              </tr>
            </thead>
            <tbody>
              {parcels.map((parcel, index) => (
                <tr key={index}>
                  <td>{parcel.number}</td>
                  <td>{parcel.name}</td>
                  <td>{parcel.rollno}</td>
                  <td className="text-center">
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

export default StaffParcelStatus;
