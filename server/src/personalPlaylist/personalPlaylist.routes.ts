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

personalPlaylistRouter.post("/create-empty-personal-playlist", async (req, res) => {
    try {
        const { personalPlaylistType } = req.body;
        const newPersonalPlaylist = await personalPlaylistService.createPersonalPlaylist(personalPlaylistType);
        res.status(201).json(newPersonalPlaylist);
    } catch (error) {
        res.status(500).json({ error: "Failed to create personal playlist" });
    }
});

personalPlaylistRouter.post("/personal-playlist-add-song", async (req, res) => {
    try {
        const { personalPlaylistUuid, song } = req.body;
        const patchedPersonalPlaylist = await personalPlaylistService.addSongToPersonalPlaylist(personalPlaylistUuid, song);
        res.status(201).json(patchedPersonalPlaylist);
    } catch (error) {
        res.status(500).json({ error: "Failed to create personal playlist" });
    }
});

export default personalPlaylistRouter;
