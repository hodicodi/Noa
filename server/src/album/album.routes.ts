import { Request, Response, Router } from "express";
import { albumService } from "./album.service.ts";
import { AddSongReqBody, AlbumParams, AlbumRes, AlbumsRes, SaveAlbumReqBody } from "@shared/src/types/album.types.ts";
import { StatusCodes } from "http-status-codes";
import { HttpError } from "../errors/httpError.ts";


const albumRouter = Router();

albumRouter.get('/:uuid', async (req: Request<AlbumParams, unknown, unknown>, res: Response<AlbumRes>, next) => {
    try {
        const {uuid} = req.params;
        const album = await albumService.getAlbumById(uuid);
        if(!album) {
            throw new HttpError(StatusCodes.NOT_FOUND, "album not found");
        }
        res.status(StatusCodes.OK).json({album});
    } catch (error) {
        next(error)
    }
});


albumRouter.get("/", async (req: Request<unknown, unknown, unknown>, res: Response<AlbumsRes>, next) => {
    try {
        const albums = await albumService.getAllAlbum();
        if(!albums) {
            throw new HttpError(StatusCodes.NOT_FOUND, "none artists were found");
        }
        res.status(StatusCodes.OK).json({albums});
    } catch (error) {
        next(error)
    }
});


albumRouter.post("/create-album", async (req: Request<unknown, unknown, SaveAlbumReqBody>, res: Response, next) => {
    try {
        const { name, artistUuid,  songs} = req.body;
        const newAlbum = await albumService.createAlbum(name, songs, artistUuid);
        res.status(StatusCodes.CREATED).json({newAlbum});
    } catch (error) {
        next(error)
    }
});




albumRouter.patch("/add-song", async (req: Request<unknown, unknown, AddSongReqBody>, res: Response, next) => {
    try {
        const { uuid, song } = req.body;
        const patchedAlbum = await albumService.addSongToAlbum(uuid, song);
        res.status(StatusCodes.CREATED).json(patchedAlbum);
    } catch (error) {
        next(error)
    }
});


export default albumRouter;
