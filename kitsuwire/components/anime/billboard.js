import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AnimeCard = ({ anime }) => {
  return (
    <div className="anime-card">
      <div className="anime-details">
        <h2>{anime.title.english}</h2>
        <p>{anime.description}</p>
        <div>
          {anime.trailer.id && (
            <iframe
              width="1920"
              height="1080"
              src={`https://www.youtube.com/embed/${anime.trailer.id}?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&controls=0&mute=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500"
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
};

const BillboardPage = () => {
  const [popularAnime, setPopularAnime] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get('/api/anime/popular');
        const modifiedData = data.results.map((anime) => ({
          title: anime.title,
          description: anime.description,
          trailer: anime.trailer,
        }));
        setPopularAnime(modifiedData);
      } catch (error) {
        console.error(error); 
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Anime List</h1>
      {popularAnime && (
        <div className="anime-list">
          {popularAnime.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BillboardPage;
