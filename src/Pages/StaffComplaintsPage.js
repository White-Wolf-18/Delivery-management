import { useNavigate } from "react-router-dom";
import "../Styles/StaffComplaintsPage.css";
import React from "react";  
const StaffComplaintsPage = () => {
  const complaints = [
    { number: "1231-1244-24134", student: "David", contact: "7317499300", complaint: "Parcel to be delivered today not received yet" },
    { number: "4747-7874-6874", student: "Mike", contact: "9876543210", complaint: "Status has not been updated correctly" },
    { number: "9093-1430-0439", student: "Emma", contact: "9898989898", complaint: "Late delivery of the parcel" },
    { number: "1653-4637-9325", student: "Jacob", contact: "7847290556", complaint: "Notification not sent on time" },
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
            <li><a className="cursor-hover"onClick={() => navigate("/staffparcelstatus")}>PARCEL STATUS</a></li>
            <li><a href="#"><u>COMPLAINTS</u></a></li>
            <li><a className="cursor-hover"onClick={() => navigate("/staff-feedbackview")}>FEEDBACK</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content Section */}
      <main className="content">
      <h2><u><i>Student Complaints</i></u></h2>
        <div className="parcel-section">
          <table>
            <thead>
              <tr className="table-header">
                <th>Parcel Order Number</th>
                <th>Student Name</th>
                <th>Contact</th>
                <th>Complaint</th>
                <th>Issue Status</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((comp, index) => (
                <tr key={index}>
                  <td className="clickable-parcel"
                  onClick={() => navigate("/staffparceldetails")}>
                    {comp.number}</td>
                  <td>{comp.student}</td>
                  <td>{comp.contact}</td>
                  <td className="complaint2_info">{comp.complaint}</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="delete-complaint-button">Delete Complaint</button>
      </main>
    </div>
  );
};

export default StaffComplaintsPage;
