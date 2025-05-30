import React from "react";
import { useSelector } from "react-redux";
import AlbumCard from "./AlbumCard";

const LibraryFavorites = () => {
  const likedSongs = useSelector((state) => state.favorites.likedSongs);

  return (
    <div className="container mt-4">
      <div className="text-start mb-5 mt-5">
        <h2 className="text-light">Your Library - Favorite Songs</h2>
      </div>
      <div className="row justify-content-start">
        {likedSongs.length === 0 && <p className="text-light">Non hai brani nei preferiti.</p>}
        {likedSongs.map((song) => (
          <div key={song.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <AlbumCard song={song} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LibraryFavorites;
