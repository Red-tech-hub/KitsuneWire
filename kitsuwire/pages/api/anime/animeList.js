// pages/api/anime/search.js
import { ANIME } from "@consumet/extensions";

export default async function animeList(req, res) {
    
 const gogoanime = new ANIME.Gogoanime();
 try {
    const results = await gogoanime.fetchAnimeList();
    res.status(200).json(results);
 } catch (error) {
    res.status(500).json({ error: error.message });
 }
}
