import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../logos/logo.png';
import './Navigation.css'

const Navigation = () => {

    const history = useHistory();

    const handleRegister = () => {
       history.push('/register');
    };

    return (
        <div className="col-md-12" style={{marginRight:'100px'}}>
            <nav>
                <a href="/home"><img style={{height:"50px",marginRight:'100px'}} src={logo} alt=""/></a>
                <a href="/home">Home</a>
                <a href="">Donation</a>
                <a href="">Events</a>
                <a href="/volunteer">Blog</a>
                <button onClick={handleRegister} className="btn btn-primary btn">Register</button>
                <button className="btn btn-dark btn">Admin</button>
            </nav>

        </div>
    );
};

export default Navigation;