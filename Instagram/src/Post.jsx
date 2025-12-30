import React, { useEffect } from 'react'
import { useState } from 'react'
function Post() {
 const[posts,setPost]=useState([]);
 useEffect(()=>
{
    fetch('http://localhost:3001/posts')
    .then((data)=>data.json())
    .then((data)=>setPost(data))
    .catch((error)=>console.log(error));
},[])
  return (
    <div>
        {posts.length >0 ? 
        (<div>
            {posts.map((post)=>(<div  key={post.id}>
                <div className='d-flex'>
                    <img className="dp rounded-circle  "src={post.user.profile_pic}alt='profilepic'></img>
                   <h5>{post.user.username}</h5> 
                </div>
                <div>
                      <img className="post" src={post.image}></img>
                 </div>
                 <div>
                    <i className="bi bi-heart"></i>
                    <i className="bi bi-chat"></i>
                    <i className="bi bi-send"></i>
                    
                </div>

            </div>))}
        </div>):
        (<div>
            Loading Post
        </div>)}
    </div>
  )
}

export default Post