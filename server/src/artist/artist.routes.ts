import { ArtistParams, ArtistRes, ArtistsRes, SaveArtistReqBody } from "@shared/src/types/artist.type.ts";
import { Request, Response, Router } from "express";
import { artistService } from "./artist.service.ts";
import { HttpError } from "../errors/httpError.ts";
import { StatusCodes } from "http-status-codes";

const artistRouter = Router();


artistRouter.get('/:uuid', async (req: Request<ArtistParams, unknown, unknown>, res: Response<ArtistRes>, next) => {
    try {
        const {uuid} = req.params;
        const artist = await artistService.getArtistById(uuid);
        if(!artist) {
            throw new HttpError(StatusCodes.NOT_FOUND, "artist not found");
        }
        res.status(StatusCodes.OK).json({artist});
    } catch (error) {
        next(error)
    }
});

artistRouter.get("/", async (req: Request<unknown, unknown, unknown>, res: Response<ArtistsRes>, next) => {
    try {
        const artists = await artistService.getAllArtist();
        if(!artists) {
            throw new HttpError(StatusCodes.NOT_FOUND, "none artists were found");
        }
        res.status(StatusCodes.OK).json({artists});
    } catch (error) {
        next(error)
    }
});


artistRouter.post("/", async (req: Request<unknown, unknown, SaveArtistReqBody>, res: Response, next) => {
    try {
        const {type, name } = req.body;
        const newArtist = await artistService.createArtist(type, name);
        res.status(StatusCodes.CREATED).json({newArtist});
    } catch (error) {
        next(error)
    }
});


export default artistRouter;
