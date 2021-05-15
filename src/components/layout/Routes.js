import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { About } from "../routes/About";
import { Cool } from "../routes/Cool";
import { Work } from "../routes/Work";
import { Home } from "../routes/Home";
import { Stats } from "../routes/Stats";
import "./nav.scss";

import Typing from 'react-typing-animation';

function Routes() {
    return (
        <Router>
            <div className="main-container">
                <nav>
                    <ul>
                        <li>
                            <Link to="/"><Typing speed={100}>Home</Typing></Link>
                        </li>
                        <li>
                            <Link to="/about"><Typing speed={100}><Typing.Delay ms={500} />ABOUT ME</Typing></Link>
                        </li>
                        <li>
                            <Link to="/work"><Typing speed={100}><Typing.Delay ms={1000} />Work</Typing></Link>
                        </li>
                        <li>
                            <Link to="/cool"><Typing speed={100}><Typing.Delay ms={1500} />Cool</Typing></Link>
                        </li>

                        <li>
                            <Link to="/stats"><Typing speed={100}><Typing.Delay ms={2000} />Stats</Typing></Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/cool">
                        <Cool />
                    </Route>
                    <Route path="/work">
                        <Work />
                    </Route>

                    <Route path="/stats">
                        <Stats />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>

            </div>
        </Router>
    )
}

export default Routes;