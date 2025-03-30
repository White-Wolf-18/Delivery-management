import { useNavigate } from "react-router-dom";
import "../Styles/StaffFeedbackView.css";
import React from "react";
const clearSearch = () => {
    document.getElementById("search-input").value = ""; // Clears the search input
  };  
const StaffFeedbackView = () => {
  const parcels = [
    { number: "1231-1244-24134", student: "David", rollno: "B22XXXXCS", rating: "5", feedback: "Got the parcel on time" },
    { number: "4747-7874-6874", student: "Mike", rollno: "B23XXXXME", rating: "4", feedback: "-" },
    { number: "9093-1430-0439", student: "Emma", rollno: "B23XXXXPE", rating: "4.5", feedback: "-" },
    { number: "1653-4637-9325", student: "Jacob", rollno: "M24XXXXCS", rating: "3", feedback: "Notification not sent on time" },
    { number: "1788-9037-6735", student: "Helen", rollno: "B21XXXXEE", rating: "5", feedback: "-" },
    { number: "1788-9037-6735", student: "Lucy", rollno: "B24XXXXEC", rating: "4.5", feedback: "-" },
    { number: "1788-9037-6735", student: "Charles", rollno: "B23XXXXCS", rating: "3.5", feedback: "-" },
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
            <li><a className="cursor-hover" onClick={() => navigate("/staffparcelstatus")}>PARCEL STATUS</a></li>
            <li><a className="cursor-hover" onClick={() => navigate("/staffcomplaints")}>COMPLAINTS</a></li>
            <li><a href="#"><u>FEEDBACK</u></a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content Section */}
      <main className="content">
      <h2><u><i>Student Feedbacks</i></u></h2>
        <div className="parcel-section">
          <table>
            <thead>
              <tr className="table-header">
                <th>Parcel Order Number</th>
                <th>Student Name</th>
                <th>Roll Number</th>
                <th>Rating (Out of 5)</th>
                <th>Feedback</th>
              </tr>
            </thead>
            <tbody>
              {parcels.map((parcel, index) => (
                <tr key={index}>
                  <td className="clickable-parcel"
                  onClick={() => navigate("/staffparceldetails")}>
                    {parcel.number}</td>
                  <td>{parcel.student}</td>
                  <td>{parcel.rollno}</td>
                  <td>{parcel.rating}</td>
                  <td className="feedback_info">{parcel.feedback}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default StaffFeedbackView;
