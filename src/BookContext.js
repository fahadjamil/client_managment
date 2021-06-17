import React,{createContext} from "react";



export const BookContext=createContext(
    {
        authToken: false
        ,client:false
        ,employee:false

    }
);

