import * as dotenv from 'dotenv';
dotenv.config()

import express from 'express';
import cors from 'cors';
import { authConfig } from 'oauth-entra-id/express';
import pgPromise from 'pg-promise';


const port = process.env.PORT;
console.log(`Server running on port ${port}`);


function bootstrap() {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(
    cors({
      origin: process.env.FRONTEND_URL,
      methods: 'GET,POST,PUT,DELETE,OPTIONS',
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true, // <-- Allow credentials to be included in CORS requests
    }),
  );
  // Other configurations...

  app.use(
    authConfig({
      azure: {
        clientId: process.env.CLIENT_ID,
        tenantId: process.env.TENANT_ID,
        scopes: [process.env.AZURE_CLIENT_SCOPE],
        clientSecret: process.env.AZURE_CLIENT_SECRET,
      },
      frontendUrl: process.env.FRONTEND_URL,
      serverCallbackUrl: `${process.env.SERVER_URL}/auth/callback`,
      encryptionKey: process.env.SECRET,
    }),
  );

  const pgp = pgPromise();
  const db = pgp('postgres://postgres:postgres@localhost:5432/postgres');
  console.log("db:"+ db.any('SELECT * FROM users'));

  // Here you can add your routes and other configurations
  const port = Number(process.env.PORT) || 3000;
  app.listen(port, () => {
    console.log(`🚀 Express server running at http://localhost:${port}`);
  });
}



bootstrap();


