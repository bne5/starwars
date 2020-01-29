import React from 'react';

const navLiStyles = {
  listStyleType: 'none'
}



const NavBar = () => {
  return (
    <nav className='Nav'>
      <ul style={navLiStyles}>
        <li>Home</li>
        <li>Search</li>
        <li>About</li>
      </ul>
    </nav>
  )
}

export default NavBar;
