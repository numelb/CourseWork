import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Blue from './components/blue';
import Red from './components/red';
import Home from './components/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div id="container">
      <h1></h1>
      <div id="navbar">
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/">Home</Link>
      </div>
      <div id="main-section">
      <Routes>
      <Route path="/blue" Red={<h1>Blue</h1>} />
      <Route path="/red" Blue={<h1>Red</h1>} /> 
      <Route path="/" Home={<h1>Home</h1>} />
   </Routes>

      </div>
    </div>
    </>
  )
}

export default App
