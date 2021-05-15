import React, { useState, useEffect, Link } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { REPOS } from "../../../redux/types/githubTypes";
import "./github.scss";

function Github() {
    const [isLoading, setIsLoading] = useState(true)
    // const [commits, setCommits] = useState(0)
    const [repos, setRepos] = useState({});

    const dispatch = useDispatch();

    // Github Credentials
    let user = "Chris-Davies-Web";
    const repoUrl = `https://github.com/${user}/`;
    const callRepos = `https://api.github.com/users/${user}/repos`

    // const callCommits = `https://api.github.com/repos/${user}/${repo}/stats/commit_activity`



    // Get all repos for user then get commits from repos
    useEffect(() => {
        fetch(callRepos, {
            method: 'GET'
        })
            .then(res => res.json())
            .then((result) => setupRepos(result))
            .catch(e => console.log(e))
    }, [callRepos])


    function setupRepos(result) {
        console.log(result)
        setRepos(result);
        dispatch({ type: REPOS, action: result })
        setIsLoading(prev => !prev)
    }


    // // use current access token to call all activities
    // function getCommits(result) {
    //     let total = 0;
    //     result.forEach(repo => {
    //         let callCommits = `https://api.github.com/repos/${user}/${repo.name}/stats/commit_activity`
    //         fetch(callCommits, {
    //             method: 'GET'
    //         })
    //             .then(res => res.json())
    //             .then((result) => {
    //                 countCommits(result, total)
    //             }).catch(e => console.log(e))
    //     })




    // }

    // function countCommits(weeks, total) {
    //     for (let i = 0; i < weeks.length; i++) {
    //         total += parseInt(weeks[i].total);
    //         //   console.log(i, weeks[i].total)
    //     }
    //     console.log('total', total)
    //     // setCommits(commits + total)

    // }

    function GetLatestCommit() {
        if (isLoading) return <>LOADING</>
        if (!isLoading) {
            return (
                <div className="lastest-commit stat-widget">
                    <h3>Last Repo Worked on</h3>
                    <a rel="noopener" target="_blank" href={repoUrl + repos[0].name}>
                        {repos[0].name}
                    </a>
                </div>
            )
        }

    }

    function ShowTotalRepos() {
        if (isLoading) return <>LOADING</>
        if (!isLoading) {
            return (
                <div className="total-repos stat-widget">
                    <h3>Total Repos</h3>
                    <a rel="noopener" target="_blank" href={repoUrl}>
                        Chris-Davies-Web - {repos.length} Repos
                    </a>
                </div>
            )
        }

    }



    return (
        <div className="github-totals">
            <ShowTotalRepos />
            <GetLatestCommit />
        </div >
    );
}

export default Github;