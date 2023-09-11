import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>ENG Chat</span>
      <div className='user'>
        <img src='https://images.pexels.com/photos/1007066/pexels-photo-1007066.jpeg?auto=compress&cs=tinysrgb&w=800' alt=''></img>
        <span>Uzi</span>
        <button>logout</button>
      </div>

    </div>
  )
}

export default Navbar