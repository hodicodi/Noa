import { Router } from "express";
import { ArtistService } from "./artist.service.ts";

const artistRouter = Router();
const artistService = new ArtistService();

artistRouter.get("/", async (req, res) => {
    try {
        const users = await artistService.getAllArtist();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch users" });
    }
});

artistRouter.post("/", async (req, res) => {
    try {
        const {artistType } = req.body;
        const newArtist = await artistService.createArtist(artistType);
        res.status(201).json(newArtist);
    } catch (error) {
        res.status(500).json({ error: "Failed to create user" });
    }
});


export default artistRouter;
