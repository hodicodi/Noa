import * as dotenv from 'dotenv';
import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from './entities/user.entity.ts';
import { UserService } from './Services/user.service.ts';
import { UserController } from './Controllers/user.controller.ts';

dotenv.config()

import express from 'express';
import cors from 'cors';
import { authConfig } from 'oauth-entra-id/express';

const port = process.env.PORT;
console.log(`Server running on port ${port}`);

export const AppDataSource = new DataSource({
type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "my_database",
  entities: [__dirname + "/entities/**/*{.js,.ts}"],
  migrations: [__dirname + "/migrations/**/*{.js,.ts}"],
  synchronize: true, // Set false for production 
  });


AppDataSource.initialize().then(() => {
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
        clientId: process.env.CLIENT_ID!,
        tenantId: process.env.TENANT_ID!,
        scopes: [process.env.AZURE_CLIENT_SCOPE!],
        clientSecret: process.env.AZURE_CLIENT_SECRET!,
      },
      frontendUrl: process.env.FRONTEND_URL!,
      serverCallbackUrl: `${process.env.SERVER_URL}/auth/callback`,
      encryptionKey: process.env.SECRET!,
    }),
  );

  const userRepository = AppDataSource.getRepository(User);
  const userService = new UserService(userRepository);
  const userController = new UserController(userService);

  app.patch("/users/:id/toggle", (req, res) => userController.handleToggleIsAdministor(req, res));


  // Here you can add your routes and other configurations

  const port = Number(process.env.PORT) || 3000;
  app.listen(port, () => {
    console.log(`🚀 Express server running at http://localhost:${port}`);
  });
});
