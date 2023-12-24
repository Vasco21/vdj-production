import React from "react";
import "../Styles/Dashboard.css";

const Dashboard = ({ title, artist }) => {

  return (
    <div>
        <h1 className="Dashboard">Welcome to <span className="production">Vdj Production</span></h1>
        <div className="song-display">
            <div className="video-container">
                <div className="backshape">

                <iframe
                    title="YouTube Video"
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/msVS2WZVgZE?si=SmcKhc13iZAERDTv"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
                <div className="overlay"><h5>BEST FEATURE FOR YOU</h5></div>
                <div className="overlays"><p>It is one of the most upbeat songs about life, You might yourself come back fighting after listening to this one.</p></div>
                </div>
            </div>
            <div className="song-info">
                <h2 className="song-title">{title}</h2>
                <p className="artist-name">{artist}</p>
            </div>
            <div className="video-container">
                <div className="backshape">

                <iframe
                    title="YouTube Video"
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/8swHRRT6gnk?si=_jmUpveznz0Iqwsg"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
                <div className="overlay"><h5>NEW FEATURE FOR YOU</h5></div>
                <div className="overlays"><p>It is one of the most upbeat songs about life, You might yourself come back fighting after listening to this one.</p></div>
                </div>
            </div>
            
            
        </div>
    </div>
  );
};

export default Dashboard;
