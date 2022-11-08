import React from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { NavBar, Actors, Movies, MoviesInfo, Profiles } from "./index.js";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <div className="root">
        <NavBar />
        <main className="content">
        <div className="toolBar" />
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/Actors:id" element={<Actors />} />
            <Route path="/Movies:id" element={<Movies />} />
            <Route path="/Profiles:id" element={<Profiles />} />
            <Route path="/MoviesInfo:id" element={<MoviesInfo />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
