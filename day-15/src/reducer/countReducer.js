const countReducer = (state,action)=>{

    switch(action.type){
      case "Increase":
        return {count:state.count+1};
      
      case "Decrease":
        return {count:state.count-1};

      case "Double":
        return {count:state.count+2} ;  
    }
 }  

 export {countReducer}
    