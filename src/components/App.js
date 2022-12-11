import React, { useEffect } from 'react'
// import Screen from './screen'
import NavBar from './Navbar'
import Screen from './screen'
import Signup from "./Signup";
import { Container } from 'react-bootstrap'
import { AuthProvider } from "../context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import Home from './Home';
import Content from './Content';
import StudentCorner from './StudentCorner'
import MesaActivities from './MesaActivities';
import Gallery from './Gallery'
import Team from './Team'
import Contact from './Contact'
import Alumini from './Alumini';
import { messaging } from '../firebase';
import { getToken } from 'firebase/messaging';
import Drishti from './Drishti'
import DrishtiNavbar from './DrishtiNavbar';
import Drishti2022 from './Drishti2022';
import { ParallaxProvider } from 'react-scroll-parallax';
// import Thankyou from './Thankyou';
import Drishti1 from './Drishti1';
import Drishtii from './drishti/pages/pages/Drishtii'

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
                    <PrivateRoute exact path="/profile-logout">
                        <Route component={Dashboard} />
                    </PrivateRoute>
                    <PrivateRoute exact path="/content">
                        <Route component={Content} />
                    </PrivateRoute>
                    <PrivateRoute exact path="/update-profile">
                        <Route component={UpdateProfile} />
                    </PrivateRoute>
                    <ParallaxProvider>
                        <Route exact path="/" component={Home} />

                        <Route path="/signup" component={Signup} />
                        <Route path="/login" component={Login} />
                        <Route path="/forgot-password" component={ForgotPassword} />

                        <Route path="/student-corner" component={StudentCorner} />


                        <Route path="/mesa-activities" component={MesaActivities} />

                        <Route path="/gallery" component={Gallery} />

                        <Route path="/team" component={Team} />

                        <Route path="/contact" component={Contact} />

                        <Route path="/alumini" component={Alumini} />

                        <Route path="/drishti" component={Drishti} />
                        <Route path="/drishtii" component={Drishtii} />
                        <Route path="/drishti1" component={Drishti1} />

                        <Route path="/drishti2022" component={Drishti2022} />
                        {/* <Route path="/thankyou" component={Thankyou} /> */}



                    </ParallaxProvider>
                </Switch>
            </AuthProvider>
        </Router>
    )
}





export default App