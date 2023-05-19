import React from 'react'

type AppProps = {
    message : string,
    count: number,
    disabled : boolean,

    // array of a type

    names: string[];

    status: "waiting" | "success"

    obj: {
        id: string;
        title: string;
    };


    // array of object

    objArr :  {
        id: string,
        title: string;
    }[];

    obj2 : object;

    obj3 : {};

    dict1: {
        
    }






    // 
}

export const Practice = ({message, count, disabled}) => {
  return (
    <div>Practice</div>
  )
}
