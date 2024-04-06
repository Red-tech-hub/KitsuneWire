// pages/api/anime/search.js
import { META } from "@consumet/extensions";

export default async function airingScedule(req, res) {
 const anilist = new META.Anilist();
 try {
    // Extract query parameters from the request
    const { page, perPage, notYetAired } = req.query;

    // Convert query parameters to appropriate types
    const pageNumber = parseInt(page, 10) || 1;
    const resultsPerPage = parseInt(perPage, 10) || 20;
    const filterNotYetAired = notYetAired === 'true';

    // Call fetchAiringSchedule with the extracted and converted parameters
    const results = await anilist.fetchAiringSchedule(pageNumber, resultsPerPage, filterNotYetAired);
    console.log(results);
    return res.status(200).json(results); // Explicit return to ensure the function stops here
 } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({ error: error.message }); // Explicit return
 }
}
