import React, { useEffect } from 'react'
import { AuthProvider } from "../context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import Home from './Home';
import MesaActivities from './MesaActivities.js';
import Gallery from './Gallery'
import Team from './Team'
import Contact from './Contact'
import Collaberation from './Collaberation'
import Team2 from './Team2'

function App() {


    return (
        <Router>
            <AuthProvider>
                <Switch>

                    <Route exact path="/" component={Home} />


                    <Route path="/mesa-activities" component={MesaActivities} />

                    <Route path="/gallery" component={Gallery} />

                    <Route path="/team" component={Team} />
                    <Route path="/team2" component={Team2} />

                    <Route path="/contact" component={Contact} />
                    <Route path="/collaberation" component={Collaberation} />

                </Switch>
            </AuthProvider>
        </Router>
    )
}





export default App