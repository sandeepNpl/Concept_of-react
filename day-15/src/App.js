import React, { useReducer} from 'react'
const App = () => {
 const reducer = (state,action)=>{

    switch(action){
      case "Increase":
        return {count:state.count+1};
      
      case "Decrease":
        return {count:state.count-1};

      case "Double":
        return {count:state.count+2} ;  
    }
 }  
    

  const [state, dispatch]= useReducer(reducer,{count:0});
  return (
    <div>
      <button onClick={()=>{dispatch("Increase")}}>+</button>
      <br/>
      <button onClick={()=>{dispatch("Decrease")}}>-</button>
      <br/>
      <button onClick={()=>{dispatch("Double")}}>+2</button>
      <br/>
      {state.count}
    </div>
  )
}

export default App;