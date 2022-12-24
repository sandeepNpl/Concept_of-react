import React from 'react'

const greet = (props) => {
  return (
    <div>
        Hello {props.name}
        <br/>
        NickName={props.nickName}
    </div>
  )
}

export default greet
