import React from 'react'

function Sidebar() {
  return (
    <>
    <div className='d-flex flex-column gap-3'>
        <img src='src\assets\instagram.text.logo.png' className='logo-img'></img>
        <div><i className="bi bi-house-door"></i>Home</div>
        <div><i className="bi bi-search"></i>Search</div>
        <div><i className="bi bi-compass"></i>Explore</div>
        <div><i className="bi bi-camera-reels"></i>Reels</div>
        <div><i className="bi bi-chat"></i>Message</div>
        <div><i className="bi bi-bell"></i>Notifications</div>
        <div><i className="bi bi-file-plus-fill"></i>Create</div>
        <div><i className="bi bi-person-square"></i>Profile</div>
    </div>  
    <div className='position-fixed bottom-0 d-flex flex-column gap-3 mb-3'>
        <div><i className="bi bi-threads"></i>Threads</div>
        <div><i className="bi bi-three-dots-vertical"></i>More</div>  
    </div>
    </>
  )
}

export default Sidebar