import React from 'react';

const VolunteerDetailsInfo = (props) => {
    const {Organize,date,_id} = props.volunteer;

    function handleDelete (){
console.log('clicked');

        fetch(`http://localhost:5000/delete/${_id}`,{
            method: 'DELETE'
        })
        .then(result => {
            console.log(result);
        })
        .catch(err =>{
            console.log(err);
        })
    }



    return (
             <div style={{display:'flex',marginTop:'20px'}}>
              <img style={{height:"320px",width:'274px'}} src={require(`../../images/${Organize}.png`)} alt=""/>   
                 <div>
                 <h1>{Organize}</h1>
                 <h3>{date}</h3>
                 </div>
                 <button onClick={handleDelete} className="btn btn-danger">Cancel</button>
             </div>
       
    );
};

export default VolunteerDetailsInfo;