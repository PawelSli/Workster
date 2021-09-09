import './App.css';
import {Route, Switch} from "react-router";
import { Router} from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute";

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <PrivateRoute exact path="/addDish"/>
                    <PrivateRoute exact path="/profile"/>
                    <Route exact path="/api/auth/signup"/>
                    <Route exact path="/api/auth/signin"/>
                    <Route exact path="/search"/>
                    <Route exact path="/recipe/*"/>
                    <Route exact path="/"/>
                </Switch>
            </Router>

        </div>
    );
}

export default App;
