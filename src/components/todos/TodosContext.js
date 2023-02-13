import React, { useState,useEffect} from 'react';
import { createContext } from 'react';


export const TodosContext = createContext();

export const TodosProvider = (props) => {

    const [data, setData] = useState([]);

    const [isloading, setLoading] = useState(true)
   useEffect(() => {
    getData()
   }, []);

function getData() {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => {
    setLoading(false)
    console.log(json);
    setData(json)
  })
}

    return (
        <div>
         <TodosContext.Provider value={[data,setData,isloading]}>
            {props.children}
         </TodosContext.Provider> 
        </div>
    );
}
