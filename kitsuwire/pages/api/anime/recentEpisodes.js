import { ANIME } from "@consumet/extensions";

export default async function recentEpisodes(req, res) {
 const gogoanime = new ANIME.Gogoanime();

 try {
    const data = await gogoanime.fetchRecentEpisodes().then(data => {
        console.log(data);
    });
    res.status(200).json(data);
 } catch (error) {
    res.status(500).json({ error: error.message });
 }
}