//import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Import the updated CSS

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="title"> hey lakshmii!</h1>

      <div className="option-boxes">
        <div className="option-box chat-box" onClick={() => navigate("/chatbot")}>
          💬 How are you? <br />
          <span style={{ fontSize: "1rem", fontWeight: "normal" }}>
            Want to talk? 
          </span>
        </div>

        <div className="option-box music-box" onClick={() => navigate("/playlists/neutral")}>
          🎵 Feeling the vibe? <br />
          <span style={{ fontSize: "1rem", fontWeight: "normal" }}>
            Let us recommend some soothing tunes for you.
          </span>
        </div>
      </div>
   </div>
  );
}

export default Home;
