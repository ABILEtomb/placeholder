import React, { useState,useEffect} from 'react';
import { createContext } from 'react';


export const AlbumsContext = createContext();

export const AlbumsProvider = (props) => {

    const [data, setData] = useState([]);
    const [isloading, setLoading] = useState(true)
   useEffect(() => {
    getData()
   }, []);

function getData() {
  fetch('https://jsonplaceholder.typicode.com/albums')
  .then(response =>
    response.json()
   ).then(json => {
    setLoading(false)
    console.log(json);
    setData(json)
  })
}

    return (
        <div>
         <AlbumsContext.Provider value={[data,setData,isloading]}>
            {props.children}
         </AlbumsContext.Provider> 
        </div>
    );
}


