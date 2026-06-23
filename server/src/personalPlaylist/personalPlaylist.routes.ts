import { Request, Response, Router } from "express";
import { PersonalPlaylistService } from "./personalPlaylist.service.ts";
import { PersonalPlaylistParams, PersonalPlaylistRes, PersonalPlaylistsRes, SavePersonalPlaylistsReqBody} from "@shared/src/types/personalPlaylist.types.ts";
import { HttpError } from "../errors/httpError.ts";
import { StatusCodes } from "http-status-codes";
import { AddSongReqBody } from "@shared/src/types/album.types.ts";


const personalPlaylistRouter = Router();

personalPlaylistRouter.get('/:uuid', async (req: Request<PersonalPlaylistParams, unknown, unknown>, res: Response<PersonalPlaylistRes>, next) => {
    try {
        const {uuid} = req.params;
        const personalPlaylist = await PersonalPlaylistService.getPersonalPlaylistById(uuid);
        if(!personalPlaylist) {
            throw new HttpError(StatusCodes.NOT_FOUND, "personalPlaylist not found");
        }
        res.status(StatusCodes.OK).json({personalPlaylist});
    } catch (error) {
        next(error)
    }
});

personalPlaylistRouter.get("/", async (eq: Request<unknown, unknown, unknown>, res: Response<PersonalPlaylistsRes>, next) => {
    try {
        const personalPlaylists = await PersonalPlaylistService.getAllPersonalPlaylist();
        if(!personalPlaylists) {
            throw new HttpError(StatusCodes.NOT_FOUND, "none personal playlists were found");
        }
        res.status(StatusCodes.OK).json({personalPlaylists});
    } catch (error) {
        next(error)
    }
});

personalPlaylistRouter.post("/create-empty-personal-playlist", async (req: Request<unknown, unknown, SavePersonalPlaylistsReqBody>, res: Response, next) => {
    try {
        const { type } = req.body;
        const newPersonalPlaylist = await PersonalPlaylistService.createPersonalPlaylist(type);
        res.status(StatusCodes.CREATED).json(newPersonalPlaylist);
    } catch (error) {
        next(error)
    }
});

personalPlaylistRouter.post("/personal-playlist-add-song", async (req: Request<unknown, unknown, AddSongReqBody>, res: Response, next) => {
    try {
        const { uuid, song } = req.body;
        const patchedPersonalPlaylist = await PersonalPlaylistService.addSongToPersonalPlaylist(uuid, song);
        res.status(StatusCodes.CREATED).json(patchedPersonalPlaylist);
    } catch (error) {
        next(error)
    }
});

export default personalPlaylistRouter;
