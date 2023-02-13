import React, { useState,useEffect} from 'react';
import { createContext } from 'react';


export const PostsContext = createContext();

export const PostsProvider = (props) => {

    const [data, setData] = useState([]);
    const [isloading, setLoading] = useState(true)

   useEffect(() => {
    getData()
   }, []);

function getData() {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => {
    setLoading(false)
    console.log(json);
    setData(json)
  })
}

    return (
        <div>
         <PostsContext.Provider value={[data,setData,isloading]}>
            {props.children}
         </PostsContext.Provider> 
        </div>
    );
}

