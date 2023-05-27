import { useState, useEffect } from "react";
import axios from "./axios";
import './App.css';

// const API = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const[myData, setMyData] = useState([]);
  const[isError, setIsError] = useState("");


  //using promises
  // useEffect(()=> {
  //   axios.get("https://jsonplaceholder.typicode.com/posts")
  //   .then((res) => setMyData(res.data))
  //   .catch((error)=> 
  //   setIsError(error.message));

  // }, []);



  //Using Async Await


// const getApiData = async () => {
//   try {
//     const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
//   setMyData(res.data);
    
//   } catch (error) {
//     setIsError(error.message);
//   }
  
// };
  
//   useEffect(()=> {
     // create function
//     getApiData();
//   }, []);

  //Best Way
  //1. add API on Top

  const getApiData = async () => {
    try {
      const res = await axios.get("/posts");
    setMyData(res.data);
      
    } catch (error) {
      setIsError(error.message);
    }
    
  };
    
    useEffect(()=> {
      // create function
      getApiData();
    }, []);

  return (
    <>
      <h1>Learn Axios</h1>
      {isError !== "" && <h2>{isError}</h2>}
      <div className="grid">
      {myData.slice(0,12).map((post) => {
          const {id, title, body} = post;
          return(
            
          <div className="card" key ={id}>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
          
          );
        })
      }
      </div>
      
    </>
  )
}

export default App
