import { useState } from 'react'
import {puppyList} from './data.js'
import './App.css'


import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  
  const [featPupId, setFeatPupId] = useState(null)
  console.log("puppyList: ", puppyList);
{()=>{console.log("puppy id: ", puppy.id)}}
  function handleClick() {
    
    // some logic here
  }
  {featPupId && (
    <div>
      <h2>{featuredPup.name}</h2>
      <ul>
        <li>Age: {featuredPup.age}</li>
        <li>Email: {featuredPup.email}</li>
      </ul>
    </div>
  )}
  return (
    <>
      <div className="App">
        { puppies.map((puppy) => {
     return <p onClick={()=>{}} key={puppy.id}>{puppy.name}</p>;
   })}
      </div>
      
          
    </>
  )
}

export default App
