import React, { useEffect } from 'react'
import { AuthProvider } from "../context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import Home from './Home';
// import Content from './Content';
import MesaActivities from './MesaActivities.js';
import Gallery from './Gallery'
import Team from './Team'
import Contact from './Contact'
import Collaberation from './Collaberation'

// import Drishtii from './drishti/pages/pages/Drishtii'


// 500 100

function App() {
    // async function requestPermission() {
    //     const permission = await Notification.requestPermission()
    //     if(permission === "granted") {
    //         // Generate Token
    //         // const token = await getToken(messaging, { vapidKey: 'BOhKKbX8KVB4NOQLaXpvRObKmp_LHFmu19uQXNtCeQD_AqTlNpV2JRganOJ2l_MKJkKG8e-B2Dr110JTmZFYpOw' });
    //         // console.log("Token Gen", token);
    //         // Send this token  to server ( db)
    //     } else if(permission === "denied") {
    //         alert("You denied for the notification");
    //     }
    // }
    // useEffect(() => {
    //     // Req user for notification permission
    //     requestPermission();
    // }, []);


    return (
        <Router>
            <AuthProvider>
                <Switch>

                    <Route exact path="/" component={Home} />


                    <Route path="/mesa-activities" component={MesaActivities} />

                    <Route path="/gallery" component={Gallery} />

                    <Route path="/team" component={Team} />

                    <Route path="/contact" component={Contact} />
                    <Route path="/collaberation" component={Collaberation} />

                </Switch>
            </AuthProvider>
        </Router>
    )
}





export default App