import { Router } from 'express';
import userRouter from './user/user.routes.ts';
import artistRouter from './artist/artist.routes.ts';
import personalPlaylistRouter from './personal-playlist/personalPlaylist.routes.ts';
import albumRouter from './album/album.routes.ts';
import { errorHandler } from './middleware/errorHandler.ts';
import {usersRoute, artistRoute, albumsRoute, personalPlaylistsRoute, songsRoute} from "@shared/src/const/routes.const.ts"

const rootRouter = Router();



rootRouter.use(usersRoute, userRouter);
rootRouter.use(artistRoute, artistRouter);
rootRouter.use(personalPlaylistsRoute, personalPlaylistRouter);
rootRouter.use(albumsRoute, albumRouter);
rootRouter.use(errorHandler);


export default rootRouter;

