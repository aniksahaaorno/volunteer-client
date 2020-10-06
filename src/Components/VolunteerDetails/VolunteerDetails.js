import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Navigation from '../Navigation/Navigation';
import VolunteerDetailsInfo from '../VolunteerDetailsInfo/VolunteerDetailsInfo';

const VolunteerDetails = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [volunteerInfoOwn ,setVolunteerInfoOwn] = useState([]);
   

    useEffect(() => {
            fetch(`http://localhost:5000/details/${loggedInUser.email}`,{
                method:"GET"
            })
            .then(response => response.json())
            .then(data =>{
                   setVolunteerInfoOwn(data);
            
            })
        
    },[])
    

    return (
        <div className="container">

            <Navigation></Navigation>

             <h1 style={{textAlign:"center"}}>Your Selected event : {volunteerInfoOwn.length}</h1>
              {
                  volunteerInfoOwn.map(volunteer => <VolunteerDetailsInfo volunteer={volunteer}></VolunteerDetailsInfo>)
              }
        </div>
    );
};

export default VolunteerDetails;