import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentLandingPage from "./Pages/StudentLandingPage";
import StaffLandingPage from "./Pages/StaffLandingPage";
import StudentProfile from "./Pages/StudentProfile";
import StaffProfile from "./Pages/StaffProfile";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import StudentComplaints from "./Pages/StudentComplaints";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/studentprofile" element={<StudentProfile />} />
        <Route path="/staffprofile" element={<StaffProfile />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/studentcomplaints" element={<StudentComplaints />} />
      </Routes>
    </Router>
  );
}

export default App;
