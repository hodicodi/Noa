import { ArtistParams, ArtistRes, ArtistsRes, SaveArtistReqBody } from "@shared/src/types/artist.type.ts";
import { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import artistService from "./artist.service.ts";

const artistRouter = Router();

artistRouter.get("/:uuid", async (req: Request<ArtistParams, unknown, unknown>, res: Response<ArtistRes>) => {
  const { uuid } = req.params;
  const artist = await artistService.getArtistById(uuid);
  res.status(StatusCodes.OK).json({ artist });
});

artistRouter.get("/", async (req: Request<unknown, unknown, unknown>, res: Response<ArtistsRes>) => {
  const artists = await artistService.getAllArtists();
  res.status(StatusCodes.OK).json({ artists });
});

artistRouter.post("/", async (req: Request<unknown, unknown, SaveArtistReqBody>, res: Response<ArtistRes>) => {
  const { artist } = req.body;
  const newArtist = await artistService.createArtist(artist);
  res.status(StatusCodes.CREATED).json({ artist: newArtist });
});

export default artistRouter;
