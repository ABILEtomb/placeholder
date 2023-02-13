import React, { useState,useEffect} from 'react';
import { createContext } from 'react';


export const PhotosContext = createContext();

export const PhotosProvider = (props) => {

    const [data, setData] = useState([]);
    const [isloading, setLoading] = useState(true)

   useEffect(() => {
    getData()
   }, []);

function getData() {
  fetch('https://jsonplaceholder.typicode.com/photos?_limit=100')
  .then(response => response.json())
  .then(json => {
    setLoading(false)
    console.log(json);
    setData(json)
  })
}

    return (
        <div>
         <PhotosContext.Provider value={[data,setData,isloading]}>
            {props.children}
         </PhotosContext.Provider> 
        </div>
    );
}


