import { MigrationInterface, QueryRunner } from "typeorm";

export class Generated1781774583839 implements MigrationInterface {
    name = 'Generated1781774583839'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "noa"."user" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "is_administor" boolean NOT NULL, "artist_name" text NOT NULL, CONSTRAINT "PK_a95e949168be7b7ece1a2382fed" PRIMARY KEY ("uuid"))`);
        await queryRunner.query(`CREATE TYPE "noa"."personal_playlist_platlist_type_enum" AS ENUM('userPlaylist', 'history', 'likedSongs')`);
        await queryRunner.query(`CREATE TABLE "noa"."personal_playlist" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "platlist_type" "noa"."personal_playlist_platlist_type_enum" NOT NULL DEFAULT 'history', "user_uuid" uuid, CONSTRAINT "PK_8e6581d9ad2fff84e7fc087efa8" PRIMARY KEY ("uuid"))`);
        await queryRunner.query(`CREATE TYPE "noa"."song_genere_enum" AS ENUM('rock', 'pop', 'hip-hop', 'country')`);
        await queryRunner.query(`CREATE TABLE "noa"."song" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "publish_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT ('now'::text)::date, "views" integer NOT NULL, "length" integer NOT NULL, "genere" "noa"."song_genere_enum" NOT NULL DEFAULT 'rock', "personal_playlist_uuid" uuid, "album_uuid" uuid NOT NULL, CONSTRAINT "PK_a0f6ee70290deaf2039ba28ed6a" PRIMARY KEY ("uuid"))`);
        await queryRunner.query(`CREATE TYPE "noa"."artist_artist_type_enum" AS ENUM('singer', 'band', 'pair')`);
        await queryRunner.query(`CREATE TABLE "noa"."artist" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "artist_name" text NOT NULL, "artist_type" "noa"."artist_artist_type_enum" NOT NULL DEFAULT 'singer', CONSTRAINT "PK_74d7294bff9579a42089ccfd82e" PRIMARY KEY ("uuid"))`);
        await queryRunner.query(`CREATE TABLE "noa"."album" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "views" integer NOT NULL, "length" integer NOT NULL, "artist_uuid" uuid, CONSTRAINT "PK_ac982622311ded526b50a1c2424" PRIMARY KEY ("uuid"))`);
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist" ADD CONSTRAINT "FK_5e93d5fce1fbb39c524f99d8561" FOREIGN KEY ("user_uuid") REFERENCES "noa"."user"("uuid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "noa"."song" ADD CONSTRAINT "FK_2f84318d8755e4c6da97ed22873" FOREIGN KEY ("personal_playlist_uuid") REFERENCES "noa"."personal_playlist"("uuid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "noa"."song" ADD CONSTRAINT "FK_8de1cdfecda3e8eaabd5dac6865" FOREIGN KEY ("album_uuid") REFERENCES "noa"."album"("uuid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "noa"."album" ADD CONSTRAINT "FK_0189fc8f1e947d330d3bf2618d4" FOREIGN KEY ("artist_uuid") REFERENCES "noa"."artist"("uuid") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "noa"."album" DROP CONSTRAINT "FK_0189fc8f1e947d330d3bf2618d4"`);
        await queryRunner.query(`ALTER TABLE "noa"."song" DROP CONSTRAINT "FK_8de1cdfecda3e8eaabd5dac6865"`);
        await queryRunner.query(`ALTER TABLE "noa"."song" DROP CONSTRAINT "FK_2f84318d8755e4c6da97ed22873"`);
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist" DROP CONSTRAINT "FK_5e93d5fce1fbb39c524f99d8561"`);
        await queryRunner.query(`DROP TABLE "noa"."album"`);
        await queryRunner.query(`DROP TABLE "noa"."artist"`);
        await queryRunner.query(`DROP TYPE "noa"."artist_artist_type_enum"`);
        await queryRunner.query(`DROP TABLE "noa"."song"`);
        await queryRunner.query(`DROP TYPE "noa"."song_genere_enum"`);
        await queryRunner.query(`DROP TABLE "noa"."personal_playlist"`);
        await queryRunner.query(`DROP TYPE "noa"."personal_playlist_platlist_type_enum"`);
        await queryRunner.query(`DROP TABLE "noa"."user"`);
    }

}
