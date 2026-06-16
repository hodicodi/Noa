import { Router } from "express";
import { PersonalPlaylistService } from "./personalPlaylist.service.ts";

const personalPlaylistRouter = Router();
const personalPlaylistService = new PersonalPlaylistService();

personalPlaylistRouter.get("/", async (req, res) => {
    try {
        const users = await personalPlaylistService.getAllPersonalPlaylist();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch users" });
    }
});


export default personalPlaylistRouter;
