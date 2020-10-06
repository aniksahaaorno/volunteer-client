import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home'
import Login from './Components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Volunteer from './Components/Volunteer/Volunteer';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import VolunteerDetails from './Components/VolunteerDetails/VolunteerDetails';

export const UserContext = createContext();


function App() {

 const [loggedInUser,setLoggedInUser] = useState({
    isSignedIn:false,
    name:'',
    email:'',
    password:'',
  })
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
           <Router>
              <Switch>
                  <Route path='/home'>
                     <Home></Home>
                  </Route>
                   <Route path="/register">
                         <Login></Login>
                   </Route>
                   <PrivateRoute path="/volunteer/:organization">
                           <Volunteer></Volunteer>
                   </PrivateRoute>
                   <Route path="/volunteerDetailsInfo">
                         <VolunteerDetails></VolunteerDetails>
                   </Route>
                   <Route path="/">
                          <Home></Home>
                   </Route>
              </Switch>
           </Router>

    </UserContext.Provider>       
  );
}

export default App;
