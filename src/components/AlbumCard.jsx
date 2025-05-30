import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentSong } from "../redux/actions/playerActions";
import { toggleLike } from "../redux/actions/favoritesActions";

const AlbumCard = ({ song }) => {
  console.log("click su canzone:", song);
  const dispatch = useDispatch();

  const likedSongs = useSelector((state) => state.favorites?.likedSongs || []);
  const isLiked = likedSongs.some((s) => s.id === song.id);

  const handleClick = () => {
    dispatch(setCurrentSong(song));
  };

  const handleLikeClick = (e) => {
    e.stopPropagation();
    dispatch(toggleLike(song));
  };

  return (
    <div className="col text-center mb-4" onClick={handleClick} style={{ cursor: "pointer" }}>
      <img className="img-fluid" src={song.album.cover_medium} alt="track" />

      <div className="d-flex justify-content-evenly align-items-center mt-2">
        <p className="text-white mt-2">
          Track: "{song.title}"<br />
          Artist: {song.artist.name}
        </p>
        <button
          onClick={handleLikeClick}
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: isLiked ? "red" : "white",
            fontSize: "24px",
            cursor: "pointer",
          }}
          aria-label={isLiked ? "Unlike" : "Like"}
        >
          {isLiked ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
};

export default AlbumCard;
