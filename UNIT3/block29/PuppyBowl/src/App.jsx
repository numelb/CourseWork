import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import AllPlayers from "./AllPlayers";
import SinglePlayer from "./SinglePlayer";
import NewPlayerForm from "./NewPlayerForm";
import "./index.css";

 export default App = () => {
  return (
    <>
      <nav className="navBar">
        <Link to="/">Home</Link>
        <Link to="/players/:id">Player</Link>
      </nav>
      <NewPlayerForm />
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/players/:id" element={<SinglePlayer />} />
      </Routes>
    </>
  );
};

