import { useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import "../Styles/StaffComplaintsPage.css";
import axios from "axios"
import React from "react";  
const StaffComplaintsPage = () => {
  const complaints = [
    { number: "1231-1244-24134", student: "David", contact: "7317499300", complaint: "Parcel to be delivered today not received yet" },
    { number: "4747-7874-6874", student: "Mike", contact: "9876543210", complaint: "Status has not been updated correctly" },
    { number: "9093-1430-0439", student: "Emma", contact: "9898989898", complaint: "Late delivery of the parcel" },
    { number: "1653-4637-9325", student: "Jacob", contact: "7847290556", complaint: "Notification not sent on time" },
  ];
  const navigate = useNavigate();
  const [data , setData] = useState([]);

  useEffect(() => {
    const fun = async () => {
      const temp = await axios.get(" http://localhost:3001/complaint/getAll");
      setData(temp.data);
    }
    fun();
  } , [])

  const [num , setNum] = useState(0);
  
  

  function handleClick(){
    
  }

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
            <li><a href="/staff">HOME</a></li>
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
          
                <th>Complaint</th>
                <th>Issue Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((comp, index) => (
                <tr key={index}>
                  <td className="">
                    {comp.parcelOrderNumber}</td>
                  <td>{comp.email}</td>
                  <td className="">{comp.description}</td>
                  <td>
                    <button id="complaint-btn" onClick={
                      async () => {
                        setNum(comp.parcelOrderNumber);
                        await axios.post("http://localhost:3001/complaint/update" , {num} , {withCredentials: true})
                      }
                    }>Resolved</button>
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

export default StaffComplaintsPage;
