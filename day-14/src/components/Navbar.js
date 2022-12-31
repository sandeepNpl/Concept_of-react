import React from 'react';
import MiniNavbar from './MiniNavbar';

const Navbar = (props) => {
  return (
    <div>
      <MiniNavbar data={props.data} />
    </div>
  )
}

export default Navbar
