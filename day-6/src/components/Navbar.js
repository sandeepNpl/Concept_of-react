import React from 'react'
import Mininavbar from './Mininavbar'

const Navbar = (props) => {
  return (
    <div>

        <Mininavbar message ={props.message}/>
      
    </div>
  )
}

export default Navbar
