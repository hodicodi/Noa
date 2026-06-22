import { MigrationInterface, QueryRunner } from "typeorm";

export class Generated1782160769436 implements MigrationInterface {
    name = 'Generated1782160769436'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "noa"."artist" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "type" "noa"."artist_type" NOT NULL DEFAULT 'singer', CONSTRAINT "UQ_dd5a88442cd2e068463fa03e496" UNIQUE ("name"), CONSTRAINT "PK_74d7294bff9579a42089ccfd82e" PRIMARY KEY ("uuid"))`);
        await queryRunner.query(`CREATE TABLE "noa"."user" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "is_administor" boolean NOT NULL, "user_name" character varying NOT NULL, "id" character varying NOT NULL, CONSTRAINT "UQ_d34106f8ec1ebaf66f4f8609dd6" UNIQUE ("user_name"), CONSTRAINT "UQ_cace4a159ff9f2512dd42373760" UNIQUE ("id"), CONSTRAINT "PK_a95e949168be7b7ece1a2382fed" PRIMARY KEY ("uuid"))`);
        await queryRunner.query(`CREATE TYPE "noa"."personal_playlist_type_enum" AS ENUM('userPlaylist', 'history', 'likedSongs')`);
        await queryRunner.query(`CREATE TABLE "noa"."personal_playlist" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" "noa"."personal_playlist_type_enum" NOT NULL DEFAULT 'history', "user_uuid" uuid, CONSTRAINT "PK_8e6581d9ad2fff84e7fc087efa8" PRIMARY KEY ("uuid"))`);
        await queryRunner.query(`CREATE TABLE "noa"."song" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "publish_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT ('now'::text)::date, "genere" "noa"."song_genere_enum" NOT NULL DEFAULT 'rock', "album_uuid" uuid NOT NULL, CONSTRAINT "PK_a0f6ee70290deaf2039ba28ed6a" PRIMARY KEY ("uuid"))`);
        await queryRunner.query(`CREATE TABLE "noa"."album" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "artist_uuid" uuid, CONSTRAINT "UQ_65a8cb530a4c10f87feaf6891b6" UNIQUE ("name"), CONSTRAINT "PK_ac982622311ded526b50a1c2424" PRIMARY KEY ("uuid"))`);
        await queryRunner.query(`CREATE TABLE "noa"."personal_playlist_songs_song" ("personal_playlist_uuid" uuid NOT NULL, "song_uuid" uuid NOT NULL, CONSTRAINT "PK_7f4a57578dbbef4a6bd5e39d8fa" PRIMARY KEY ("personal_playlist_uuid", "song_uuid"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a9e1f0a511e6d4ee63efb49c28" ON "noa"."personal_playlist_songs_song"  ("personal_playlist_uuid") `);
        await queryRunner.query(`CREATE INDEX "IDX_78f97670f405159d093edcfd59" ON "noa"."personal_playlist_songs_song"  ("song_uuid") `);
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist" ADD CONSTRAINT "FK_5e93d5fce1fbb39c524f99d8561" FOREIGN KEY ("user_uuid") REFERENCES "noa"."user"("uuid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "noa"."song" ADD CONSTRAINT "FK_8de1cdfecda3e8eaabd5dac6865" FOREIGN KEY ("album_uuid") REFERENCES "noa"."album"("uuid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "noa"."album" ADD CONSTRAINT "FK_0189fc8f1e947d330d3bf2618d4" FOREIGN KEY ("artist_uuid") REFERENCES "noa"."artist"("uuid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist_songs_song" ADD CONSTRAINT "FK_a9e1f0a511e6d4ee63efb49c283" FOREIGN KEY ("personal_playlist_uuid") REFERENCES "noa"."personal_playlist"("uuid") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist_songs_song" ADD CONSTRAINT "FK_78f97670f405159d093edcfd591" FOREIGN KEY ("song_uuid") REFERENCES "noa"."song"("uuid") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist_songs_song" DROP CONSTRAINT "FK_78f97670f405159d093edcfd591"`);
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist_songs_song" DROP CONSTRAINT "FK_a9e1f0a511e6d4ee63efb49c283"`);
        await queryRunner.query(`ALTER TABLE "noa"."album" DROP CONSTRAINT "FK_0189fc8f1e947d330d3bf2618d4"`);
        await queryRunner.query(`ALTER TABLE "noa"."song" DROP CONSTRAINT "FK_8de1cdfecda3e8eaabd5dac6865"`);
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist" DROP CONSTRAINT "FK_5e93d5fce1fbb39c524f99d8561"`);
        await queryRunner.query(`DROP INDEX "noa"."IDX_78f97670f405159d093edcfd59"`);
        await queryRunner.query(`DROP INDEX "noa"."IDX_a9e1f0a511e6d4ee63efb49c28"`);
        await queryRunner.query(`DROP TABLE "noa"."personal_playlist_songs_song"`);
        await queryRunner.query(`DROP TABLE "noa"."album"`);
        await queryRunner.query(`DROP TABLE "noa"."song"`);
        await queryRunner.query(`DROP TABLE "noa"."personal_playlist"`);
        await queryRunner.query(`DROP TYPE "noa"."personal_playlist_type_enum"`);
        await queryRunner.query(`DROP TABLE "noa"."user"`);
        await queryRunner.query(`DROP TABLE "noa"."artist"`);
    }

}
