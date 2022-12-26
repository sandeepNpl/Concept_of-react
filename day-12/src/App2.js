import React from 'react';
import {Formik} from 'formik'
import TextField from './TextField';
import userloginSchema from './userSchemaValidate'

const App2 = () => {
  return (
    <div>
      <Formik initialValues={{email:"", password:""}}
       onSubmit = {(data)=>{
        console.log("form Submited");
        console.log(data) 
      }}
      validationSchema = {userloginSchema}

      >
        {({handleSubmit,errors,handleChange,values})=>{
            {/* errors */}
            return(
             <form onSubmit={handleSubmit}>
                <label>Email:</label> 
                <TextField name="email" />
                <br/>
                <label>Password:</label>
                <TextField name="password" />
                <br/>
                <input type="submit"></input>
            </form>
            )
        }}
      </Formik>
    </div>
  )
}

export default App2
