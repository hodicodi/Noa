import { Router } from "express";
import { AlbumService } from "./album.service.ts";

const albumRouter = Router();
const albumService = new AlbumService();

albumRouter.get("/", async (req, res) => {
    try {
        const users = await albumService.getAllAlbum;
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch users" });
    }
});


export default albumRouter;
