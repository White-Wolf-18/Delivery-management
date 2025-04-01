import "../Styles/FeedbackForm.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
const FeedbackForm = () => {
    const navigate = useNavigate();
    const [form , setForm] = useState({
      description: ""
    });

    async function handleForm(){
      const response = await axios.post("http://localhost:3001/feedback/createFeedback" , form);
      navigate("/");
    }

    return (
        <div className="container">
      {/* Header Section */}
      <header className="header">
        <div className="top-section">
          <div className="profile-circle" onClick={() => navigate("/studentprofile")}>A</div>
          <h1 className="title">DELIVERY MANAGEMENT</h1>
          <div className="Logout-symbol"></div>
        </div>
        </header>
         {/* Main Content Section */}
         <main className="content">
        <h2 className="complaint-title"><i>Feedback Form</i></h2>
        <div className="complaint-section">
          <h4>What do you rate our service?</h4>
          <div class="star-rating-input">
  <input type="radio" id="star5" name="rating" value="5" /><label for="star5" title="5 stars">★</label>
  <input type="radio" id="star4" name="rating" value="4" /><label for="star4" title="4 stars">★</label>
  <input type="radio" id="star3" name="rating" value="3" /><label for="star3" title="3 stars">★</label>
  <input type="radio" id="star2" name="rating" value="2" /><label for="star2" title="2 stars">★</label>
  <input type="radio" id="star1" name="rating" value="1" /><label for="star1" title="1 star">★</label>
</div>
        <br/>
          <h4>Enter your feedback if any</h4>
          <input onChange={(e) => {
            setForm(prev => (
              {...prev , description: e.target.value}
            ))
          }} className="complaint-description" placeholder="Give your feedback"></input><br></br>
          <button className="place-complaint-button" onClick={handleForm}>Submit feedback</button>
        </div>
        </main>
        </div>
    );
};

export default FeedbackForm;
