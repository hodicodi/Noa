import { Router } from "express";
import { ArtistService } from "./artist.service.ts";

const artistRouter = Router();
const artistService = new ArtistService();

artistRouter.get("/", async (req, res) => {
    try {
        const artists = await artistService.getAllArtist();
        res.json(artists);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch artists" });
    }
});

/*
artistRouter.get("/", async (req, res) => {
    try {
        const {}
        const artist = await artistService.getArtistById();
        res.json(albums);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch albums" });
    }
});
*/

artistRouter.post("/", async (req, res) => {
    try {
        const {artistType, artistName } = req.body;
        const newArtist = await artistService.createArtist(artistType, artistName);
        res.status(201).json(newArtist);
    } catch (error) {
        res.status(500).json({ error: "Failed to create artist" });
    }
});


export default artistRouter;
