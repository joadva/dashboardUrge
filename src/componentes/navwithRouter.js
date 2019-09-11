import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from "./Main";

function Home() {
    return <h2></h2>;
}

function Reports() {
    return <h2></h2>;
}
function Order() {
    return <h2></h2>;
}

function Clients() {
    return <h2></h2>;
}


function DriverAndVehicles() {
    return <h2></h2>;
}

function AppRouter() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about/">Reports</Link>
                        </li>
                        <li>
                            <Link to="/users/">Order</Link>
                        </li>
                        <li>
                            <Link to="/users/">Clients</Link>
                        </li>
                        <li>
                            <Link to="/users/">DriverAndVehicles</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/" exact component={Home} />
                <Route path="/about/" component={Reports} />
                <Route path="/users/" component={Order} />
                <Route path="/about/" component={Clients} />
                <Route path="/users/" component={DriverAndVehicles} />
            </div>
        </Router>
    );
}

export default AppRouter;