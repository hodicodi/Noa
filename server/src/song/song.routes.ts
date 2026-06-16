import { Router } from "express";
import { SongService } from "./song.service.ts";

const songRouter = Router();
const songService = new SongService();

songRouter.get("/", async (req, res) => {
    try {
        const users = await songService.getAllSongs();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch users" });
    }
});


export default songRouter;
