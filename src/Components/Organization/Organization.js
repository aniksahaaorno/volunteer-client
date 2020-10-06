import React from 'react';
import { Link } from 'react-router-dom';
import './Organization.css'
var randomColor = require('randomcolor');

const Organization = ({organization}) => {
    var color = randomColor();
    return (
        <div className="col-md-3">
           <Link to={`/volunteer/${organization.name}`}> <img style={{height:"320px",width:'274px'}} src={require(`../../images/${organization.pic}`)} alt=""/>
              <h1 className="organizationName"  style={{backgroundColor:color}}>{organization.name}</h1></Link>  
        </div>
    );
};

export default Organization;