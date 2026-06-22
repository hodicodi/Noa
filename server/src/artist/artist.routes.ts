import { Router } from "express";
import { ArtistService } from "./artist.service.ts";
import { Request, Response } from 'express';
import { ArtistRes } from "@shared/src/types/artist.type.ts";
import { StatusCodes, ReasonPhrases } from 'http-status-codes';

const artistRouter = Router();
const artistService = new ArtistService();


artistRouter.get('/:artistUuid', async (req: Request<ArtistParams, unknown, unknown>, res: Response<ArtistRes>) => {
    try {
        const {artistUuid} = req.params;
        const artist = await artistService.getArtistById(artistUuid);
        res.json({artist});
        
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    }
});

artistRouter.get("/", async (req, res) => {
    try {
        const artists = await artistService.getAllArtist();
        res.json(artists);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch artists" });
    }
});

interface ArtistParams {
  artistUuid: string;
}


artistRouter.post("/", async (req, res) => {
    try {
        const {artistType, artistName } = req.body;
        const newArtist = await artistService.createArtist(artistType, artistName);
        res.status(201).json(newArtist);
    } catch (error) {
        res.status(500).json({ error: "Failed to create artist" });
    }
});


export default artistRouter;
