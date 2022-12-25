import React from 'react'

const App = () => {
    const handleSubmit = (e) =>{
        console.log("form Submited");

    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email"></input>
        <br/>
        <input type="text" name="password"></input>
        <br/>
        <input type="text" name="address"></input>
        <br/>
        <input type="text" name="contact"></input>
        <br/>
        <input type="submit" />
      </form>     
    </div>
  )
}

export default App
