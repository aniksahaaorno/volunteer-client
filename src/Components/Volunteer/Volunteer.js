import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import {  useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/logo.png';
import './Volunteer.css';

const Volunteer = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {organization} = useParams();

     var history = useHistory();

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const volunteerDetails = {...loggedInUser,...data};
        

        
        fetch('http://localhost:5000/volunteerDetails',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(volunteerDetails)
        })
        .then(data => {
          console.log('Success:', data);
          history.push('/volunteerDetailsInfo');
        })
        .catch((error) => {
          console.error('Error:', error);
        });

    

    };
  
   

    return (
        <div className="container">
 <div className="volunteer">

       <img style={{height:'100px'}} src={logo} alt=""/>

      <div className="form">

                   <h3>Register as a Volunteer</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                
                <input className="form-control" name="fullName" defaultValue={loggedInUser.name} ref={register} placeholder="Full Name" />
                <br/>
                <input className="form-control" name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Username or Email" />
                <br/>
                <input className="form-control" type="date" name="date" ref={register({ required: true })} placeholder="Date" />
                {errors.exampleRequired && <span>This field is required</span>}
                <br/>
                <input className="form-control" name="description" ref={register({ required: true })} placeholder="Description" />
                {errors.exampleRequired && <span>This field is required</span>}
                <br/>
                <input className="form-control" name="Organize" defaultValue={organization} ref={register({ required: true })} placeholder="Organize books at the library" />
                {errors.exampleRequired && <span>This field is required</span>}
                <br/>
                <input className="btn btn-primary" type="submit" value="Registration" />
                    </form>
  </div>
      </div>
        </div>
    );
};

export default Volunteer;