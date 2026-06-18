import { Router } from "express";
import { AlbumService } from "./album.service.ts";

const albumRouter = Router();
const albumService = new AlbumService();

albumRouter.get("/", async (req, res) => {
    try {
        const albums = await albumService.getAllAlbum;
        res.json(albums);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch albums" });
    }
});

albumRouter.get("/album-by-id", async (req, res) => {
    try {
        const {albumUuid} = req.body;
        const album = await albumService.getAlbumById(albumUuid);
        res.json(album);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch album" });
    }
});

albumRouter.post("/create-album", async (req, res) => {
    try {
        const { artistUuid,  songs} = req.body;
        const newAlbum = await albumService.createAlbum(artistUuid, songs);
        res.status(201).json(newAlbum);
    } catch (error) {
        res.status(500).json({ error: "Failed to create personal playlist" });
    }
});


albumRouter.patch("/add-song", async (req, res) => {
    try {
        const { albumUuid, song } = req.body;
        const patchedAlbum = await albumService.addSongToAlbum(albumUuid, song);
        res.status(201).json(patchedAlbum);
    } catch (error) {
        res.status(500).json({ error: "Failed to create personal playlist" });
    }
});


export default albumRouter;
