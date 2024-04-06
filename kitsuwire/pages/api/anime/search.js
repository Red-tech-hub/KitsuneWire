// pages/api/anime/search.js
import { META } from "@consumet/extensions";

export default async function searchAnime(req, res) {
 const { query } = req.query;
 if (!query) {
    return res.status(400).json({ error: "Query parameter is required" });
 }

 const anilist = new META.Anilist();
 try {
    const results = await anilist.search(query);
    res.status(200).json(results);
 } catch (error) {
    res.status(500).json({ error: error.message });
 }
}
