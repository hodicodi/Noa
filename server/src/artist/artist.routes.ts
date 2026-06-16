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


export default artistRouter;
