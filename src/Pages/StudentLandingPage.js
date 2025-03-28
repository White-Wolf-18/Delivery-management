import { useNavigate } from "react-router-dom";
import "../Styles/StudentLandingPage.css";
import React from "react";
const StudentLandingPage = () => {
  const parcels = [
    { number: "1231-1244-24134", service: "Amazon", date: "14-02-2025", staffStatus: "Received" },
    { number: "4747-7874-6874", service: "Flipkart", date: "17-02-2025", staffStatus: "Pending" },
    { number: "9093-1430-0439", service: "Myntra", date: "19-02-2025", staffStatus: "Pending" },
    { number: "1653-4637-9325", service: "Bluedart", date: "21-02-2025", staffStatus: "Pending" },
    { number: "1788-9037-6735", service: "Amazon", date: "21-02-2025", staffStatus: "Pending" },
    { number: "1788-9037-6735", service: "Amazon", date: "21-02-2025", staffStatus: "Pending" },
    { number: "1788-9037-6735", service: "Amazon", date: "21-02-2025", staffStatus: "Pending" },
  ];
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
            <li><a href="#"><u>HOME</u></a></li>
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
                  onClick={() => navigate("/studentparceldetails")}>
                  {parcel.number}</td>
                  <td>{parcel.service}</td>
                  <td>{parcel.date}</td>
                  <td className={parcel.staffStatus === 'Received' ? 'received' : 'pending'}>
                    {parcel.staffStatus}
                  </td>
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

export default StudentLandingPage;
