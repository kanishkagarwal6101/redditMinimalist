import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { SearchBar } from "./components/searchBar";
import { Memes } from "./components/memes";
import { Popular } from "./components/popular";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
function App() {
  // const fetchpopular = () => {
  //   return <Popular />;
  // };

  // const fetchMemes = () => {
  //   return <Memes />;
  // };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="memes" element={<Memes />} />
          <Route path="popular" element={<Popular />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
