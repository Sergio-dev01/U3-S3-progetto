import React from "react";
import { useSelector } from "react-redux";

const Player = () => {
  const currentSong = useSelector((state) => state.player.currentSong);

  console.log("Current song in Player:", currentSong);

  return (
    <div className="container-fluid fixed-bottom bg-container pt-1 bg-dark">
      <div className="row h-100">
        <div className="col-lg-10 offset-lg-2">
          <div className="row h-100 flex-column justify-content-center align-items-center">
            <div className="col-6 col-md-4 playerControls">
              <div className="d-flex justify-content-between">
                <a href="#">
                  <img src="/playerButton/shuffle.png" alt="shuffle" />
                </a>
                <a href="#">
                  <img src="/playerButton/prev.png" alt="prev" />
                </a>
                <a href="#">
                  <img src="/playerButton/play.png" alt="play" />
                </a>
                <a href="#">
                  <img src="/playerButton/next.png" alt="next" />
                </a>
                <a href="#">
                  <img src="/playerButton/repeat.png" alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
              {currentSong ? (
                <div className="text-white mt-2 text-center">
                  <strong>
                    {currentSong.title} by {currentSong.artist.name}{" "}
                  </strong>
                </div>
              ) : (
                <div className="text-white mt-2 text-center">
                  <strong>No song selected </strong>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
