import React, { useState, useEffect } from 'react';
import Strava from '../strava/Strava';
import Github from '../github/Github';
import "./statsContainer.scss";

function StatsContainer() {
    return (
        <div className="stats-container">
            <Strava />
            <Github />
        </div>
    );
}

export default StatsContainer;