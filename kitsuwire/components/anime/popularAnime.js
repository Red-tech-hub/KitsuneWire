import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AnimeCard = ({ anime }) => {
  return (
    <div className="anime-card">
      <img src={anime.image} alt={anime.title.english} />
      <div className="anime-details">
        <h2>{anime.title.english}</h2>
        <p>{anime.description}</p>
        <p>Genres: {anime.genres.join(', ')}</p>
        <p>Total Episodes: {anime.totalEpisodes}</p>
        <p>Rating: {anime.rating}</p>
        <p>Status: {anime.status}</p>
        <p>Release Date: {anime.releaseDate}</p>
      </div>
    </div>
  );
};

const PopularAnimePage = () => {
  const [popularAnime, setPopularAnime] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get('/api/anime/popular');
        setPopularAnime(data);
      } catch (error) {
        console.error(error); // Log the error for debugging
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Anime List</h1>
      {popularAnime && (
        <div className="anime-list">
          {popularAnime.results.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PopularAnimePage;
