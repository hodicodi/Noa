import "reflect-metadata";
import { DataSource } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { Album } from "./album/album.entity.ts";
import { Artist } from "./artist/artist.entity.ts";
import { PersonalPlaylist } from "./personal-playlist/personalPlaylist.entity.ts";
import { Song } from "./song/song.entity.ts";
import { User } from "./user/user.entity.ts";

const {
  DB_HOST = "",
  DB_PORT = "",
  DB_USER = "",
  DB_PASSWORD = "",
  DB_NAME = "",
  DB_SCHEMA = "",
} = process.env;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST || "localhost",
  port: parseInt(DB_PORT || "5432"),
  username: DB_USER || "postgres",
  password: DB_PASSWORD || "postgres",
  database: DB_NAME || "postgres",
  schema: DB_SCHEMA || "noa",
  entities: [User, Song, Album, Artist, PersonalPlaylist],
  migrations: ["migrations/*"],
  synchronize: false, 
  migrationsTransactionMode: "each",
  namingStrategy: new SnakeNamingStrategy(),
});
