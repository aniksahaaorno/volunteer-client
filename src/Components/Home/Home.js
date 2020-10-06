import React from 'react';
import Navigation from '../Navigation/Navigation';
import Organization from '../Organization/Organization';

const Home = () => {
    
     const organization =[
         {
             name:'animalShelter',
             pic:'animalShelter.png'
         },
         {
            name:'babySit',
            pic:'babySit.png'
        },
        {
            name:'birdHouse',
            pic:'birdHouse.png'
        },
        {
            name:'childSupport',
            pic:'childSupport.png'
        },
        {
            name:'cleanWater',
            pic:'cleanWater.png'
        },
        {
            name:'clearnPark',
            pic:'clearnPark.png'
        },
        {
           name:'clothSwap',
           pic:'clothSwap.png'
       },
       {
           name:'driveSafety',
           pic:'driveSafety.png'
       },
       {
           name:'extraVolunteer',
           pic:'extraVolunteer.png'
       },
       {
           name:'foodCharity',
           pic:'foodCharity.png'
       },
       {
        name:'goodEducation',
        pic:'goodEducation.png'
    },
    {
       name:'ITHelp',
       pic:'ITHelp.png'
   },
   {
       name:'libraryBooks',
       pic:'libraryBooks.png'
   },
   {
       name:'musicLessons',
       pic:'musicLessons.png'
   },
   {
       name:'newBooks',
       pic:'newBooks.png'
   },
   {
       name:'refuseShelter',
       pic:'refuseShelter.png'
   },
   {
      name:'riverClean',
      pic:'riverClean.png'
  },
  {
      name:'schoolSuffiles',
      pic:'schoolSuffiles.png'
  },
  {
      name:'studyGroup',
      pic:'studyGroup.png'
  },
  {
      name:'stuffedAnimals',
      pic:'stuffedAnimals.png'
  },
       
     ]


    return (

        <div className="container">
            <Navigation></Navigation>
 
            
            <h3 style={{marginTop:'30px'}}>I GROW BY HELPING PEOPLE IN NEED.</h3>
            <input type="text" name="Search" id="" placeholder="Search..."/>
            <button className="btn-primary">Search</button>

            
            <div className="row" style={{marginTop:"40px"}}>
           {
                organization.map(organization => <Organization organization={organization}></Organization>)
            }

           </div>
        

        </div>
    );
};

export default Home;