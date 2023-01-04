import React, { useReducer} from 'react';
import {countReducer} from "./reducer/countReducer"
const App = () => {

  const ACTION_TYPE ={
    
  }
 
  const [state, dispatch]= useReducer(countReducer,{count:0});
  return (
    <div>
      <button onClick={()=>{dispatch({type:"Increase"})}}>+</button>
      <br/>
      <button onClick={()=>{dispatch({type:"Decrease"})}}>-</button>
      <br/>
      <button onClick={()=>{dispatch({type:"Double"})}}>+2</button>
      <br/>
      {state.count}
    </div>
  )
}

export default App;