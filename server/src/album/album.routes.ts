import { Request, Response, Router } from "express";
import { albumService } from "./album.service.ts";
import { AlbumParams, AlbumRes, AlbumsRes, SaveAlbumReqBody } from "@shared/src/types/album.types.ts";
import { StatusCodes } from "http-status-codes";


const albumRouter = Router();

albumRouter.get('/:uuid', async (req: Request<AlbumParams, unknown, unknown>, res: Response<AlbumRes>) => {
    try {
        const {uuid} = req.params;
        const album = await albumService.getAlbumById(uuid);
        res.json({album});
        
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    }
});


albumRouter.get("/", async (req: Request<unknown, unknown, unknown>, res: Response<AlbumsRes>) => {
    try {
        const albums = await albumService.getAllAlbum();
        res.json({albums});
    } catch (error) {
        res.status(500);
    }
});


albumRouter.post("/create-album", async (req: Request<unknown, unknown, SaveAlbumReqBody>, res: Response) => {
    try {
        const { name, artistUuid,  songs} = req.body;
        const newAlbum = await albumService.createAlbum(name, songs, artistUuid);
        res.status(201).json({newAlbum});
    } catch (error) {
        res.status(500).json({ error: "Failed to create album" });
    }
});




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
