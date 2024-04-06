// pages/api/episodeSources.js
import { META } from "@consumet/extensions";

export default async function episodeSources(req, res) {
 const { id } = req.query;
 if (!id) {
    return res.status(400).json({ error: "Episode ID is required" });
 }

 const anilist = new META.Anilist();
 try {
    const sources = await anilist.fetchEpisodeSources(id);
    res.status(200).json(sources);
 } catch (error) {
    res.status(500).json({ error: error.message });
 }
}
