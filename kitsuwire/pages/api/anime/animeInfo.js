// pages/api/anime/search.js
import { META } from "@consumet/extensions";

export default async function animeInfo(req, res) {
 const anilist = new META.Anilist();
 try {
    const { id } = req.query;
    const results = await anilist.fetchAnimeInfo(id);
    console.log(results);
    return res.status(200).json(results); // Explicit return to ensure the function stops here
 } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({ error: error.message }); // Explicit return
 }
}
