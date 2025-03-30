import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentLandingPage from "./Pages/StudentLandingPage";
import StaffLandingPage from "./Pages/StaffLandingPage";
import StudentProfile from "./Pages/StudentProfile";
import StaffProfile from "./Pages/StaffProfile";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import StudentComplaints from "./Pages/StudentComplaints";
import AddParcelPage from "./Pages/AddParcelPage";
import StaffParcelStatus from "./Pages/StaffParcelStatus";
import StudentParcelDetails from "./Pages/StudentParcelDetails";
import StaffParcelDetails from "./Pages/StaffParcelDetails";
import StaffFeedbackView from "./Pages/StaffFeedbackView";
import StaffComplaintsPage from "./Pages/StaffComplaintsPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StaffLandingPage />} />
        <Route path="/studentprofile" element={<StudentProfile />} />
        <Route path="/staffprofile" element={<StaffProfile />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/studentcomplaints" element={<StudentComplaints />} />
        <Route path="/addparcel" element={<AddParcelPage />} />
        <Route path="/staffparcelstatus" element={<StaffParcelStatus />} />
        <Route path="/studentparceldetails" element={<StudentParcelDetails />} />
        <Route path="/staffparceldetails" element={<StaffParcelDetails />} />
        <Route path="/staff-feedbackview" element={<StaffFeedbackView />} />
        <Route path="/staffcomplaints" element={<StaffComplaintsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
