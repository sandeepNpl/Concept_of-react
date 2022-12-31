import React, { createContext } from 'react';
import Header from './components/Header';


let UserContext =  createContext(null);
const App = () => {

  return (
    <UserContext.Provider value={{name:"Sandip",age:"22",location:"USA"}}> 
      <Header/>
    </UserContext.Provider>
  )
}

export default App;
export  {UserContext};
