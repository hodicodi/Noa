import { Router } from 'express';
import userRouter from './user/user.routes.ts';
import artistRouter from './artist/artist.routes.ts';
import personalPlaylistRouter from './personalPlaylist/personalPlaylist.routes.ts';
import albumRouter from './album/album.routes.ts';
import { errorHandler } from './middleware/errorHandler.ts';

const rootRouter = Router();

const routes = {
    users: '/users',
    artists: 'artists',
    personalPlaylists: '/personalPlaylists',
    albums: '/albums'
};

rootRouter.use('/users', userRouter);
rootRouter.use('/artists', artistRouter);
rootRouter.use('/personalPlaylists', personalPlaylistRouter);
rootRouter.use('/albums', albumRouter);
rootRouter.use(errorHandler);


export default rootRouter;

