import React from "react";
import { useSelector } from "react-redux";

export const Stats = () => {
    const activities = useSelector(state => state.strava.activities.action);
    const firstActivity = activities[0];
    const stats = useSelector(state => state.strava.stats);
    const github = useSelector(state => state.github.repos);
    console.log('stats - act', activities)
    console.log('stats - github', github)
    return (
        <div>
            <h1>My stats</h1>
            <p>Running</p>
            <p>Latest run</p>
            <p>{firstActivity.name}</p>
            <p>{(firstActivity.distance / 100).toFixed(2)} km</p>
            <p>{firstActivity.achievement_count} achievements</p>
            <p>{firstActivity.total_elevation_gain}m elevation</p>
        </div>
    )
}
