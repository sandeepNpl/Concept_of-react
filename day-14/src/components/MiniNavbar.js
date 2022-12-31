import React, { useContext } from 'react';
import { UserContext } from '../App';

const MiniNavbar = () => {
    let cont = useContext(UserContext)
    console.log(cont);
  return (
    <div>
      <button>{cont.name}</button>
      <button>{cont.age}</button>
      <button>{cont.location }</button>
      
      
    </div>
  )
}

export default MiniNavbar
