import dotenv from "dotenv";
import "reflect-metadata";
import { MigrationInterface, QueryRunner } from "typeorm";
dotenv.config();

const { DB_SCHEMA = "" } = process.env;

export class CreateDB1782977386234 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TYPE ${DB_SCHEMA}."artist_type" AS ENUM('Singer', 'Band', 'Pair')`);
    await queryRunner.query(
      `CREATE TABLE ${DB_SCHEMA}."artist" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "create_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "delete_date" TIMESTAMP WITH TIME ZONE, "name" character varying NOT NULL, "type" ${DB_SCHEMA}."artist_type" NOT NULL DEFAULT 'Singer', CONSTRAINT "UQ_dd5a88442cd2e068463fa03e496" UNIQUE ("name"), CONSTRAINT "PK_74d7294bff9579a42089ccfd82e" PRIMARY KEY ("uuid"))`,
    );
    await queryRunner.query(
      `CREATE TABLE ${DB_SCHEMA}."user" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "create_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "delete_date" TIMESTAMP WITH TIME ZONE, "is_administor" boolean NOT NULL, "name" character varying NOT NULL, "tz" character varying NOT NULL, CONSTRAINT "UQ_065d4d8f3b5adb4a08841eae3c8" UNIQUE ("name"), CONSTRAINT "UQ_892a478baf532e4a9b853e4feb8" UNIQUE ("tz"), CONSTRAINT "PK_a95e949168be7b7ece1a2382fed" PRIMARY KEY ("uuid"))`,
    );
    await queryRunner.query(`CREATE TYPE ${DB_SCHEMA}."personal_playlist_type_enum" AS ENUM('UserPlaylist', 'History', 'LikedSongs')`);
    await queryRunner.query(
      `CREATE TABLE ${DB_SCHEMA}."personal_playlist" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "create_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "delete_date" TIMESTAMP WITH TIME ZONE, "name" character varying NOT NULL, "type" ${DB_SCHEMA}."personal_playlist_type_enum" NOT NULL DEFAULT 'History', "user_uuid" uuid, CONSTRAINT "UQ_80ab51259c3cc3a0bf573e58c3b" UNIQUE ("name"), CONSTRAINT "PK_8e6581d9ad2fff84e7fc087efa8" PRIMARY KEY ("uuid"))`,
    );
    await queryRunner.query(`CREATE TYPE ${DB_SCHEMA}."song_genre_enum" AS ENUM('Rock', 'Pop', 'Hip-hop', 'Country')`);
    await queryRunner.query(
      `CREATE TABLE ${DB_SCHEMA}."song" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "create_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "delete_date" TIMESTAMP WITH TIME ZONE, "name" character varying NOT NULL, "publish_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT ('now'::text)::date, "genre" ${DB_SCHEMA}."song_genre_enum" NOT NULL DEFAULT 'Rock', "s3_url" character varying NOT NULL, "album_uuid" uuid NOT NULL, CONSTRAINT "PK_a0f6ee70290deaf2039ba28ed6a" PRIMARY KEY ("uuid"))`,
    );
    await queryRunner.query(
      `CREATE TABLE ${DB_SCHEMA}."album" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "create_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "delete_date" TIMESTAMP WITH TIME ZONE, "name" character varying NOT NULL, "artist_uuid" uuid, CONSTRAINT "UQ_a73b466bc11b9f56ea029f22c5b" UNIQUE ("name", "artist_uuid"), CONSTRAINT "PK_ac982622311ded526b50a1c2424" PRIMARY KEY ("uuid"))`,
    );
    await queryRunner.query(
      `CREATE TABLE ${DB_SCHEMA}."personal_playlist_songs_song" ("personal_playlist_uuid" uuid NOT NULL, "song_uuid" uuid NOT NULL, CONSTRAINT "PK_7f4a57578dbbef4a6bd5e39d8fa" PRIMARY KEY ("personal_playlist_uuid", "song_uuid"))`,
    );
    await queryRunner.query(`CREATE INDEX "IDX_a9e1f0a511e6d4ee63efb49c28" ON ${DB_SCHEMA}."personal_playlist_songs_song"  ("personal_playlist_uuid") `);
    await queryRunner.query(`CREATE INDEX "IDX_78f97670f405159d093edcfd59" ON ${DB_SCHEMA}."personal_playlist_songs_song"  ("song_uuid") `);
    await queryRunner.query(
      `ALTER TABLE ${DB_SCHEMA}."personal_playlist" ADD CONSTRAINT "FK_5e93d5fce1fbb39c524f99d8561" FOREIGN KEY ("user_uuid") REFERENCES ${DB_SCHEMA}."user"("uuid") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE ${DB_SCHEMA}."song" ADD CONSTRAINT "FK_8de1cdfecda3e8eaabd5dac6865" FOREIGN KEY ("album_uuid") REFERENCES ${DB_SCHEMA}."album"("uuid") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE ${DB_SCHEMA}."album" ADD CONSTRAINT "FK_0189fc8f1e947d330d3bf2618d4" FOREIGN KEY ("artist_uuid") REFERENCES ${DB_SCHEMA}."artist"("uuid") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE ${DB_SCHEMA}."personal_playlist_songs_song" ADD CONSTRAINT "FK_a9e1f0a511e6d4ee63efb49c283" FOREIGN KEY ("personal_playlist_uuid") REFERENCES ${DB_SCHEMA}."personal_playlist"("uuid") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE ${DB_SCHEMA}."personal_playlist_songs_song" ADD CONSTRAINT "FK_78f97670f405159d093edcfd591" FOREIGN KEY ("song_uuid") REFERENCES ${DB_SCHEMA}."song"("uuid") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE ${DB_SCHEMA}."personal_playlist_songs_song" DROP CONSTRAINT "FK_78f97670f405159d093edcfd591"`);
    await queryRunner.query(`ALTER TABLE ${DB_SCHEMA}."personal_playlist_songs_song" DROP CONSTRAINT "FK_a9e1f0a511e6d4ee63efb49c283"`);
    await queryRunner.query(`ALTER TABLE ${DB_SCHEMA}."album" DROP CONSTRAINT "FK_0189fc8f1e947d330d3bf2618d4"`);
    await queryRunner.query(`ALTER TABLE ${DB_SCHEMA}."song" DROP CONSTRAINT "FK_8de1cdfecda3e8eaabd5dac6865"`);
    await queryRunner.query(`ALTER TABLE ${DB_SCHEMA}."personal_playlist" DROP CONSTRAINT "FK_5e93d5fce1fbb39c524f99d8561"`);
    await queryRunner.query(`DROP INDEX ${DB_SCHEMA}."IDX_78f97670f405159d093edcfd59"`);
    await queryRunner.query(`DROP INDEX ${DB_SCHEMA}."IDX_a9e1f0a511e6d4ee63efb49c28"`);
    await queryRunner.query(`DROP TABLE ${DB_SCHEMA}."personal_playlist_songs_song"`);
    await queryRunner.query(`DROP TABLE ${DB_SCHEMA}."album"`);
    await queryRunner.query(`DROP TABLE ${DB_SCHEMA}."song"`);
    await queryRunner.query(`DROP TYPE ${DB_SCHEMA}."song_genre_enum"`);
    await queryRunner.query(`DROP TABLE ${DB_SCHEMA}."personal_playlist"`);
    await queryRunner.query(`DROP TYPE ${DB_SCHEMA}."personal_playlist_type_enum"`);
    await queryRunner.query(`DROP TABLE ${DB_SCHEMA}."user"`);
    await queryRunner.query(`DROP TABLE ${DB_SCHEMA}."artist"`);
    await queryRunner.query(`DROP TYPE ${DB_SCHEMA}."artist_type"`);
  }
}
