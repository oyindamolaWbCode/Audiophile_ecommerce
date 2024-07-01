import React from "react";
import HomeSummary from "../Components/HomeSummary/HomeSummary";
import Cards from "../Components/Cards/Cards";
import XzSpeaker from "../Components/XzSpeakers/XzSpeaker";
import XzSeven from "../Components/XzSeven/XzSeven";
import XEarphone from "../Components/XEarphones/XEarphone";
import AudioGear from "../Components/AudioGear/AudioGear";
import Footer from "../Components/Footer/Footer";

function Home(props) {
  return (
    <>
      <div className="homepage-container">
        <HomeSummary />
      </div>
      <div
        className="container"
        style={{
          backgroundColor: "white",
          paddingTop: "100px",
        }}
      >
        <Cards style={{ marginTop: "175px", marginBottom: "168px" }} />
        <XzSpeaker />
        <XzSeven />
        <XEarphone />
        <AudioGear />
        <Footer />
      </div>
    </>
  );
}

export default Home;
