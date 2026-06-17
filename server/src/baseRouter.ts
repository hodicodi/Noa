import { Router } from 'express';
import userRouter from './user/user.routes.ts';
import artistRouter from './artist/artist.routes.ts';

const rootRouter = Router();

rootRouter.use('/users', userRouter);
rootRouter.use('/artists', artistRouter);


export default rootRouter;

