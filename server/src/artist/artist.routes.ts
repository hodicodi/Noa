import { ArtistParams, ArtistRes, ArtistsRes, SaveArtistReqBody } from "@shared/src/types/artist.type.ts";
import { Request, Response, Router } from "express";
import { StatusCodes } from 'http-status-codes';
import { artistService } from "./artist.service.ts";

const artistRouter = Router();


artistRouter.get('/:uuid', async (req: Request<ArtistParams, unknown, unknown>, res: Response<ArtistRes>) => {
    try {
        const {uuid} = req.params;
        const artist = await artistService.getArtistById(uuid);
        res.json({artist});
        
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    }
});

artistRouter.get("/", async (req: Request<unknown, unknown, unknown>, res: Response<ArtistsRes>) => {
    try {
        const artists = await artistService.getAllArtist();
        res.json({artists});
    } catch (error) {
        res.status(500);
    }
});


artistRouter.post("/", async (req: Request<unknown, unknown, SaveArtistReqBody>, res: Response) => {
    try {
        const {type, name } = req.body;
        const newArtist = await artistService.createArtist(type, name);
        res.status(201).json({newArtist});
    } catch (error) {
        res.status(500);
    }
});


export default artistRouter;
