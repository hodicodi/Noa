import { Router } from "express";
import userRouter from "./user/user.routes.ts";
import artistRouter from "./artist/artist.routes.ts";
import personalPlaylistRouter from "./personal-playlist/personalPlaylist.routes.ts";
import albumRouter from "./album/album.routes.ts";
import { errorHandler } from "./middleware/errorHandler.ts";
import {
  USERS_PATH,
  ARTISTS_PATH,
  PERSONAL_PLAYLISTS_PATH,
  ALBUMS_PATH,
  SONGS_PATH,
} from "@shared/src/const/paths.const.ts";
import songRouter from "./song/song.routes.ts";

const rootRouter = Router();

rootRouter.use(USERS_PATH, userRouter);
rootRouter.use(ARTISTS_PATH, artistRouter);
rootRouter.use(PERSONAL_PLAYLISTS_PATH, personalPlaylistRouter);
rootRouter.use(ALBUMS_PATH, albumRouter);
rootRouter.use(SONGS_PATH, songRouter);
rootRouter.use(errorHandler);

export default rootRouter;
