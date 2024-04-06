// pages/api/episodeServers

//PROBABLY NOT NEEDED
import { ANIME } from "@consumet/extensions";

export default async function episodeServers(req, res) {
 const { id } = req.query;
 if (!id) {
    return res.status(400).json({ error: "Episode ID is required" });
 }

 const gogoanime = new ANIME.Gogoanime();
 try {
    const sources = await gogoanime.fetchEpisodeSources(id);
    res.status(200).json(sources);
 } catch (error) {
    res.status(500).json({ error: error.message });
 }
}
