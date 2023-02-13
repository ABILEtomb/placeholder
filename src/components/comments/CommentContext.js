import React, { useState,useEffect} from 'react';
import { createContext } from 'react';


export const CommentContext = createContext();

export const CommentProvider = (props) => {

    const [data, setData] = useState([]);
    const [isloading, setLoading] = useState(true)

   useEffect(() => {
    getData()
   }, []);

function getData() {
  fetch('https://jsonplaceholder.typicode.com/comments')
  .then(response => response.json())
  .then(json => {
    setLoading(false)
    console.log(json);
    setData(json)
  })
}

    return (
        <div>
         <CommentContext.Provider value={[data,setData,isloading]}>
            {props.children}
         </CommentContext.Provider> 
        </div>
    );
}


