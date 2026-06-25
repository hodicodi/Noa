import { GeneralParams } from "@shared/src/types/general.types.ts";
import {
  PersonalPlaylistRes,
  PersonalPlaylistsRes,
  SavePersonalPlaylistReqBody
} from "@shared/src/types/personalPlaylist.types.ts";
import { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import PersonalPlaylistService from "./personalPlaylist.service.ts";


const personalPlaylistRouter = Router();

personalPlaylistRouter.get(
  "/:uuid",
  async (req: Request<GeneralParams, unknown, unknown>, res: Response<PersonalPlaylistRes>) => {
    const { uuid } = req.params;
    const personalPlaylist = await PersonalPlaylistService.getPersonalPlaylistById(uuid);

    res.status(StatusCodes.OK).json({ personalPlaylist });
  },
);

personalPlaylistRouter.get("/", async (eq: Request<unknown, unknown, unknown>, res: Response<PersonalPlaylistsRes>) => {
  const personalPlaylists = await PersonalPlaylistService.getAllPersonalPlaylists();

  res.status(StatusCodes.OK).json({ personalPlaylists });
});

personalPlaylistRouter.post("/", async (req: Request<unknown, unknown, SavePersonalPlaylistReqBody>, res: Response<PersonalPlaylistRes>) => {
  const { personalPlaylist } = req.body;
  const newPersonalPlaylist = await PersonalPlaylistService.createPersonalPlaylist(personalPlaylist);
  res.status(StatusCodes.CREATED).json({personalPlaylist: newPersonalPlaylist});
});

export default personalPlaylistRouter;
