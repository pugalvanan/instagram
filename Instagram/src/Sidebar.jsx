import React from 'react'

function Sidebar() {
  return (
    <>
    <div className='d-flex flex-column gap-3'>
        <img src='src\assets\instagram.text.logo.png' className='logo-img'></img>
        <div><i class="bi bi-house-door"></i>Home</div>
        <div><i class="bi bi-search"></i>Search</div>
        <div><i class="bi bi-compass"></i>Explore</div>
        <div><i class="bi bi-camera-reels"></i>Reels</div>
        <div><i class="bi bi-chat"></i>Message</div>
        <div><i class="bi bi-bell"></i>Notifications</div>
        <div><i class="bi bi-file-plus-fill"></i>Create</div>
        <div><i class="bi bi-person-square"></i>Profile</div>
    </div>  
    <div className='position-fixed bottom-0 d-flex flex-column gap-3 mb-3'>
        <div><i class="bi bi-threads"></i>Threads</div>
        <div><i class="bi bi-three-dots-vertical"></i>More</div>
    </div>
    </>
  )
}

export default Sidebar