import React from "react";
import HomeSummary from "../Components/HomeSummary/HomeSummary";
import Cards from "../Components/Cards/Cards";

function Home(props) {
  return (
    <div className="homepage-container">
      <HomeSummary />
      <div className="container">
        <Cards style={{ marginTop: "175px", marginBottom: "168px" }} />
      </div>
    </div>
  );
}

export default Home;
