import React, { useContext, useState } from 'react';
import logo from '../../logos/logo.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';


const Login = () => {

 
  
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    


    const handleSignIn = () =>{
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
      .then(response =>{
        const {displayName,email} = response.user;
        const signedIn ={
          isSignedIn:true,
          name:displayName,
          email:email
        }
        setLoggedInUser(signedIn);
        history.replace(from);
      })
  
    }
  
    const handleSignOut = () => {
    
      firebase.auth().signOut()
      .then( res => {
         const signOut ={
           isSignedIn:false,
           name:'',
           email:''
         }
         setLoggedInUser(signOut);
      }).catch(function(error) {
         console.log(error);
      });
  
    }

    return (
        <div style={{marginLeft:'400px'}} >
            <img style={{width:'400px'}}  src={logo} alt=""/>

            <div style={{height:'300px',width:'400px',border:'2px solid lightgray',marginTop:'50px'}}>

                <h3>Login With</h3>
                <div style={{height:'50px',width:'300px',border:'2px solid lightgray',marginTop:'50px'}}>
                {
       loggedInUser.isSignedIn ? <button onClick={handleSignOut}>Google Sign Out</button> :  <button onClick={handleSignIn}><FontAwesomeIcon icon={faCoffee } />Continue with Google</button>
       }
                </div>

            </div>
        </div>
    );
};

export default Login;