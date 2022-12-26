import React from 'react';
import {useField} from 'formik';


const TextField = (props) => {

    const [field, meta] = useField(props.name);
  return (
    <div>
        <input  type="text" {...field}{...props}></input>
        <div style={{color:"red"}}>{meta.error}</div>
    </div>
  )
}

export default TextField
