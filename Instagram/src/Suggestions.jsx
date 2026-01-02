import React, { useEffect, useState } from 'react'

function Suggestions() 
{
    const [profile, setProfile]=useState(null);
    const [suggestions ,SetSuggestions]=useState([]);
    useEffect(()=>
    {
        fetch('http://localhost:3001/profile')
        .then(data=>data.json())
        .then(data=>setProfile(data))
        .catch(error=>console.log(error))

        fetch('http://localhost:3001/suggestions')
        .then(data=>data.json())
        .then(data=>SetSuggestions(data))
        .catch(error=>console.log(error))
    },[])
   

  return (
    <div> 
        {profile ? <div className='d-flex'>
            
                    <img className="dp rounded-circle  "src={profile.profile_pic}alt='profilepic'></img>
                   <h5>{profile.username}</h5> 
                </div>  
           : <p>Loading</p>     
        }
        </div>
  )
}

export default Suggestions