import express, { type Router } from 'express';
import { handleAuthentication, handleCallback, handleLogout } from 'oauth-entra-id/express';

export const authRouter: Router = express.Router();

authRouter.post('/authenticate', handleAuthentication()); // Returns {url: authUrl}
authRouter.post('/callback', handleCallback()); // Set tokens in cookies and redirect to frontendUrl
authRouter.post('/logout', handleLogout()); // Delete cookies and returns {url: logoutUrl}