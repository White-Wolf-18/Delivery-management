import { useNavigate } from "react-router-dom";
import "../Styles/StaffLandingPage.css";
import React from "react";
const clearSearch = () => {
    document.getElementById("search-input").value = ""; // Clears the search input
  };  
const StaffLandingPage = () => {
  const parcels = [
    { number: "1231-1244-24134", service: "Amazon", date: "14-02-2025", name: "Alice", contact: "9876543210" },
    { number: "4747-7874-6874", service: "Flipkart", date: "17-02-2025", name: "Jonas", contact: "123456789" },
    { number: "9093-1430-0439", service: "Myntra", date: "19-02-2025", name: "Edward", contact: "123456789" },
    { number: "1653-4637-9325", service: "Bluedart", date: "21-02-2025", name: "Lucy", contact: "123456789" },
    { number: "1788-9037-6735", service: "Amazon", date: "21-02-2025", name: "Harry", contact: "123456789" },
    { number: "1788-9037-6735", service: "Amazon", date: "21-02-2025", name: "Janice", contact: "123456789" },
    { number: "1788-9037-6735", service: "Amazon", date: "21-02-2025", name: "Alex", contact: "123456789" },
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
            <li><a href="#">HOME</a></li>
            <li><a href="#">PARCEL STATUS</a></li>
            <li><a href="#">COMPLAINTS</a></li>
            <li><a href="#">FEEDBACK</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content Section */}
      <main className="content">
      <h3><i>Upcoming parcels</i></h3>
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
                <th>Delivery service</th>
                <th>Parcel date</th>
                <th>Student Name</th>
                <th>Contact</th>
                <th>Your Status</th>
              </tr>
            </thead>
            <tbody>
              {parcels.map((parcel, index) => (
                <tr key={index}>
                  <td>{parcel.number}</td>
                  <td>{parcel.service}</td>
                  <td>{parcel.date}</td>
                  <td>{parcel.name}</td>
                  <td>{parcel.contact}</td>
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

export default StaffLandingPage;
