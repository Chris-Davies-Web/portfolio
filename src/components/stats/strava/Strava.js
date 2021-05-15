import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { ACTIVITIES, STATS } from "../../../redux/types/stravaTypes";
import "./strava.scss";
import runningSVG from "../../../shared/assets/images/running.gif";

function Strava() {
    const [isLoading, setIsLoading] = useState(true);
    const [activities, setActivities] = useState({});

    const [athlete, setAthlete] = useState({});

    const dispatch = useDispatch();
    //setActivities(useSelector(state => state.strava.activities));

    //Strava Credentials
    let clientID = "55907";
    let athleteID = "71622969";
    let clientSecret = "5fe61d8d8cd14cd7e89584ded8411dc3cfb56587";

    // refresh token and call address
    const refreshToken = "fd9eb1f33c2cb7d11320333c2a6fbb4fb6cf4b74";
    const callRefresh = `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`

    // endpoint for read-all activities. temporary token is added in getActivities()
    const callActivities = `https://www.strava.com/api/v3/athlete/activities?access_token=`
    const callAthlete = `https://www.strava.com/api/v3/athletes/${athleteID}/stats?access_token=`

    // Conversion metrics
    const kmToMile = 1.609;

    // Use refresh token to get current access token
    useEffect(() => {
        console.log('activities', activities)
        fetch(callRefresh, {
            method: 'POST'
        })
            .then(res => res.json())
            .then(result => getStravaData(result.access_token))
    }, [callRefresh]);

    function getStravaData(accessToken) {
        getActivities(accessToken);
        getStats(accessToken)
    }

    // Use refresh token to get current access token
    // useEffect(() => {
    //     console.log('activities', activities)
    //     fetch(callAthlete, {
    //         method: 'POST'
    //     })
    //         .then(res => res.json())
    //         .then(result => getActivities(result.access_token))
    // }, [callAthlete]);

    function getStats(accessToken) {

        fetch(callAthlete + accessToken)
            .then(res => res.json())
            .then(data => setupStats(data))
            .catch(e => console.log(e))
    }

    function setupStats(data) {
        console.log('data stats', data)
        dispatch({ type: STATS, action: data });
    }

    // use current access token to call all activities
    function getActivities(accessToken) {
        // console.log(callActivities + access)
        fetch(callActivities + accessToken)
            .then(res => res.json())
            .then(data => setupActivities(data))
            .catch(e => console.log(e))
    }

    function setupActivities(data) {
        console.log('activities data', data)
        dispatch({ type: ACTIVITIES, action: data });
        setActivities(data);
        setIsLoading(prev => !prev);
    }

    function convertToMiles(distance) {
        return (distance.toFixed(2) / 1000 / kmToMile).toFixed(2);
    }


    const getActivityDistanceInkm = (distance) => {
        return `${(distance.toFixed(2) / 1000).toFixed(2)} km`

    }
    const getActivityDistanceInMiles = (distance) => {
        return `${convertToMiles(distance)} miles`
    }

    const showTotalDistances = () => {
        if (isLoading) return <>LOADING</>
        if (!isLoading) {
            let distance = 0;
            for (let i = 0; i < activities.length; i++) {
                if (activities[i].type === "Run") {
                    distance += activities[i].distance
                }
            }

            return {
                km: getActivityDistanceInkm(distance),
                miles: getActivityDistanceInMiles(distance)
            }

        }

    }

    // const totalsWidget = () => {
    //     return `
    //     <div className="strava-totals">
    //     ${getTotalDistance().miles}
    //     <br />
    //     ${getTotalDistance().km}
    //     </div>`
    // }

    // function showActivities() {
    //     if (isLoading) return <>LOADING</>
    //     if (!isLoading) {
    //         console.log(activities)
    //         //  activities.forEach((activity) => console.log(activity))

    //         return activities.length
    //     }
    // }



    return (
        <div className="strava-totals">
            <div className="strava-running stat-widget">
                <div className="animation">
                    <img src={runningSVG} />
                </div>
                <div className="distances">
                    <p>
                        <span className="title red">Last 30 days</span>
                        <div>
                            <span className="fade-1">{showTotalDistances().km}</span>
                            <span className="fade-2">{showTotalDistances().miles}</span>
                        </div>
                    </p>
                    <p>
                        <span className="title red">This year</span>
                        <div>
                            <span className="fade-1">{showTotalDistances().km}</span>
                            <span className="fade-2">{showTotalDistances().miles}</span>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Strava;