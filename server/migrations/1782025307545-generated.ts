import { MigrationInterface, QueryRunner } from "typeorm";

export class Generated1782025307545 implements MigrationInterface {
    name = 'Generated1782025307545'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "noa"."user" ("user_uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "is_administor" boolean NOT NULL, "user_name" text NOT NULL, CONSTRAINT "UQ_d34106f8ec1ebaf66f4f8609dd6" UNIQUE ("user_name"), CONSTRAINT "PK_20ba1ec1283433fc53a5311f165" PRIMARY KEY ("user_uuid"))`);
        await queryRunner.query(`CREATE TYPE "noa"."personal_playlist_platlist_type_enum" AS ENUM('userPlaylist', 'history', 'likedSongs')`);
        await queryRunner.query(`CREATE TABLE "noa"."personal_playlist" ("personal_playlist_uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "platlist_type" "noa"."personal_playlist_platlist_type_enum" NOT NULL DEFAULT 'history', "user_user_uuid" uuid, CONSTRAINT "PK_5d4de7619cc52399e6c3f3fe6b6" PRIMARY KEY ("personal_playlist_uuid"))`);
        await queryRunner.query(`CREATE TYPE "noa"."song_genere_enum" AS ENUM('rock', 'pop', 'hip-hop', 'country')`);
        await queryRunner.query(`CREATE TABLE "noa"."song" ("song_uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "song_name" text NOT NULL, "publish_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT ('now'::text)::date, "genere" "noa"."song_genere_enum" NOT NULL DEFAULT 'rock', "album_album_uuid" uuid NOT NULL, CONSTRAINT "PK_6e3374d031ed59cdc5a8b7e0212" PRIMARY KEY ("song_uuid"))`);
        await queryRunner.query(`CREATE TYPE "noa"."artist_artist_type_enum" AS ENUM('singer', 'band', 'pair')`);
        await queryRunner.query(`CREATE TABLE "noa"."artist" ("artist_uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "artist_name" text NOT NULL, "artist_type" "noa"."artist_artist_type_enum" NOT NULL DEFAULT 'singer', CONSTRAINT "UQ_4183c13f4e5724bab2e86a21701" UNIQUE ("artist_name"), CONSTRAINT "PK_be0ca13e1f4cad0e0989d9e7b6e" PRIMARY KEY ("artist_uuid"))`);
        await queryRunner.query(`CREATE TABLE "noa"."album" ("album_uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "album_name" text NOT NULL, "artist_artist_uuid" uuid, CONSTRAINT "UQ_a9bae191d9c84ffdbe1aace3f46" UNIQUE ("album_name"), CONSTRAINT "PK_a7fafb8d045c7ec0bb4ba75ea84" PRIMARY KEY ("album_uuid"))`);
        await queryRunner.query(`CREATE TABLE "noa"."personal_playlist_songs_song" ("personal_playlist_personal_playlist_uuid" uuid NOT NULL, "song_song_uuid" uuid NOT NULL, CONSTRAINT "PK_33a1268635833725accb0d7f00e" PRIMARY KEY ("personal_playlist_personal_playlist_uuid", "song_song_uuid"))`);
        await queryRunner.query(`CREATE INDEX "IDX_7591ffd90d9fd85cdd6ba91f63" ON "noa"."personal_playlist_songs_song"  ("personal_playlist_personal_playlist_uuid") `);
        await queryRunner.query(`CREATE INDEX "IDX_514dddbf23ea881022ac060664" ON "noa"."personal_playlist_songs_song"  ("song_song_uuid") `);
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist" ADD CONSTRAINT "FK_0b735d18910f8a33d30173cc5e7" FOREIGN KEY ("user_user_uuid") REFERENCES "noa"."user"("user_uuid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "noa"."song" ADD CONSTRAINT "FK_83cca5c84ec6e2a4781d532a69e" FOREIGN KEY ("album_album_uuid") REFERENCES "noa"."album"("album_uuid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "noa"."album" ADD CONSTRAINT "FK_070e009713200ceb35bc61e8a74" FOREIGN KEY ("artist_artist_uuid") REFERENCES "noa"."artist"("artist_uuid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist_songs_song" ADD CONSTRAINT "FK_7591ffd90d9fd85cdd6ba91f63c" FOREIGN KEY ("personal_playlist_personal_playlist_uuid") REFERENCES "noa"."personal_playlist"("personal_playlist_uuid") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist_songs_song" ADD CONSTRAINT "FK_514dddbf23ea881022ac060664f" FOREIGN KEY ("song_song_uuid") REFERENCES "noa"."song"("song_uuid") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist_songs_song" DROP CONSTRAINT "FK_514dddbf23ea881022ac060664f"`);
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist_songs_song" DROP CONSTRAINT "FK_7591ffd90d9fd85cdd6ba91f63c"`);
        await queryRunner.query(`ALTER TABLE "noa"."album" DROP CONSTRAINT "FK_070e009713200ceb35bc61e8a74"`);
        await queryRunner.query(`ALTER TABLE "noa"."song" DROP CONSTRAINT "FK_83cca5c84ec6e2a4781d532a69e"`);
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist" DROP CONSTRAINT "FK_0b735d18910f8a33d30173cc5e7"`);
        await queryRunner.query(`DROP INDEX "noa"."IDX_514dddbf23ea881022ac060664"`);
        await queryRunner.query(`DROP INDEX "noa"."IDX_7591ffd90d9fd85cdd6ba91f63"`);
        await queryRunner.query(`DROP TABLE "noa"."personal_playlist_songs_song"`);
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
