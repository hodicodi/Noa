import { Router } from "express";
import { AlbumService } from "./album.service.ts";
import { GetAlbumRequest } from "@shared/src/types/album.types.ts";


const albumRouter = Router();
const albumService = new AlbumService();

albumRouter.get("/", async (req, res) => {
    try {
        const albums = await albumService.getAllAlbum();
        res.json(albums);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch albums" });
    }
});

/*
albumRouter.get<unknown, unknown, unknown, GetAlbumRequest>("/album-by-id", async (req, res) => {
    try {
        const {albumUuid} = req.params;
        const album = await albumService.getAlbumById(albumUuid);
        res.json(album);
    } catch (ersror) {
        res.status(500).json({ error: "Failed to fetch album" });
    }
});


/*

albumRouter.post("/create-album", async (req, res) => {
    try {
        const { albumName, artistUuid,  songs} = req.body;
        const newAlbum = await albumService.createAlbum(albumName, artistUuid, songs);
        res.status(201).json(newAlbum);
    } catch (error) {
        res.status(500).json({ error: "Failed to create album" });
    }
});

*/


albumRouter.patch("/add-song", async (req, res) => {
    try {
        const { albumUuid, song } = req.body;
        const patchedAlbum = await albumService.addSongToAlbum(albumUuid, song);
        res.status(201).json(patchedAlbum);
    } catch (error) {
        res.status(500).json({ error: "Failed to add song to album" });
    }
});


export default albumRouter;
