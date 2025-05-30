import React, { useEffect, useState } from "react";
import AlbumCard from "./AlbumCard";

const MusicSection = ({ artistName, sectionId, title }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`)
      .then((res) => res.json())
      .then((data) => {
        setSongs(data.data.slice(0, 4));
      })
      .catch((err) => console.error("Errore nel caricamento:", err));
  }, [artistName]);

  return (
    <div className="row">
      <div className="col-10">
        <div id={sectionId}>
          <h2 className="text-white mt-5 mb-3">{title}</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
            {songs.map((song) => (
              <AlbumCard key={song.id} song={song} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicSection;
