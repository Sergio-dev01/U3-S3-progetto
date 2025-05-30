import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MusicSection from "./components/MusicSection";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import LibraryFavorites from "./components/LibraryFavorites";

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Sidebar />
        <main className="mainPage container-fluid">
          <div className="row">
            <div className="col-12 col-md-9 offset-md-3">
              <div className="row">
                <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
                  <a href="#">TRENDING</a>
                  <a href="#">PODCAST</a>
                  <a href="#">MOODS AND GENRES</a>
                  <a href="#">NEW RELEASES</a>
                  <a href="#">DISCOVER</a>
                </div>
              </div>

              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <MusicSection artistName="queen" sectionId="rockSection" title="Rock Classics" />
                      <MusicSection artistName="katyperry" sectionId="popSection" title="Pop Culture" />
                      <MusicSection artistName="eminem" sectionId="hipHopSection" title="Hip Hop" />
                    </>
                  }
                />
                <Route path="/library" element={<LibraryFavorites />} />
              </Routes>
            </div>
          </div>
        </main>
        <Player />
      </BrowserRouter>
    </div>
  );
}

export default App;
