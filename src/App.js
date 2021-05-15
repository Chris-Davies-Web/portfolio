import React, { useState, useEffect } from 'react';
import StatsContainer from "./components/stats/statsContainer/StatsContainer";
import Routes from "./components/layout/Routes";
import "./shared/style.scss";
// import Navigation from "./components/layout/Navigation";

function App() {
  return (
    <div className="app">
      {/* <Navigation /> */}
      <Routes />
      <StatsContainer />
    </div>
  );
}

export default App;