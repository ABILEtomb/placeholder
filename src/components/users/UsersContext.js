import React, { useState,useEffect} from 'react';
import { createContext } from 'react';


export const UsersContext = createContext();

export const UsersProvider = (props) => {

    const [data, setData] = useState([]);
    const [isloading, setLoading] = useState(true)

   useEffect(() => {
    getData()
   }, []);

function getData() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => {
    setLoading(false)
    console.log(json);
    setData(json)
  })
}

    return (
        <div>
         <UsersContext.Provider value={[data,setData,isloading]}>
            {props.children}
         </UsersContext.Provider> 
        </div>
    );
}
