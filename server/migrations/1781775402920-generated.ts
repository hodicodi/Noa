import { MigrationInterface, QueryRunner } from "typeorm";

export class Generated1781775402920 implements MigrationInterface {
    name = 'Generated1781775402920'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist" DROP CONSTRAINT "FK_5e93d5fce1fbb39c524f99d8561"`);
        await queryRunner.query(`ALTER TABLE "noa"."song" DROP CONSTRAINT "FK_2f84318d8755e4c6da97ed22873"`);
        await queryRunner.query(`ALTER TABLE "noa"."song" DROP CONSTRAINT "FK_8de1cdfecda3e8eaabd5dac6865"`);
        await queryRunner.query(`ALTER TABLE "noa"."album" DROP CONSTRAINT "FK_0189fc8f1e947d330d3bf2618d4"`);
        await queryRunner.query(`ALTER TABLE "noa"."user" RENAME COLUMN "uuid" TO "user_uuid"`);
        await queryRunner.query(`ALTER TABLE "noa"."user" RENAME CONSTRAINT "PK_a95e949168be7b7ece1a2382fed" TO "PK_20ba1ec1283433fc53a5311f165"`);
        await queryRunner.query(`ALTER TABLE "noa"."artist" RENAME COLUMN "uuid" TO "artist_uuid"`);
        await queryRunner.query(`ALTER TABLE "noa"."artist" RENAME CONSTRAINT "PK_74d7294bff9579a42089ccfd82e" TO "PK_be0ca13e1f4cad0e0989d9e7b6e"`);
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist" DROP CONSTRAINT "PK_8e6581d9ad2fff84e7fc087efa8"`);
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist" DROP COLUMN "uuid"`);
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist" DROP COLUMN "user_uuid"`);
        await queryRunner.query(`ALTER TABLE "noa"."song" DROP CONSTRAINT "PK_a0f6ee70290deaf2039ba28ed6a"`);
        await queryRunner.query(`ALTER TABLE "noa"."song" DROP COLUMN "uuid"`);
        await queryRunner.query(`ALTER TABLE "noa"."song" DROP COLUMN "personal_playlist_uuid"`);
        await queryRunner.query(`ALTER TABLE "noa"."song" DROP COLUMN "album_uuid"`);
        await queryRunner.query(`ALTER TABLE "noa"."album" DROP CONSTRAINT "PK_ac982622311ded526b50a1c2424"`);
        await queryRunner.query(`ALTER TABLE "noa"."album" DROP COLUMN "uuid"`);
        await queryRunner.query(`ALTER TABLE "noa"."album" DROP COLUMN "artist_uuid"`);
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist" ADD "personal_playlist_uuid" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist" ADD CONSTRAINT "PK_5d4de7619cc52399e6c3f3fe6b6" PRIMARY KEY ("personal_playlist_uuid")`);
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist" ADD "user_user_uuid" uuid`);
        await queryRunner.query(`ALTER TABLE "noa"."song" ADD "song_uuid" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "noa"."song" ADD CONSTRAINT "PK_6e3374d031ed59cdc5a8b7e0212" PRIMARY KEY ("song_uuid")`);
        await queryRunner.query(`ALTER TABLE "noa"."song" ADD "personal_playlist_personal_playlist_uuid" uuid`);
        await queryRunner.query(`ALTER TABLE "noa"."song" ADD "album_album_uuid" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "noa"."album" ADD "album_uuid" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "noa"."album" ADD CONSTRAINT "PK_a7fafb8d045c7ec0bb4ba75ea84" PRIMARY KEY ("album_uuid")`);
        await queryRunner.query(`ALTER TABLE "noa"."album" ADD "artist_artist_uuid" uuid`);
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist" ADD CONSTRAINT "FK_0b735d18910f8a33d30173cc5e7" FOREIGN KEY ("user_user_uuid") REFERENCES "noa"."user"("user_uuid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "noa"."song" ADD CONSTRAINT "FK_a05e88c0272e155e79715da94a7" FOREIGN KEY ("personal_playlist_personal_playlist_uuid") REFERENCES "noa"."personal_playlist"("personal_playlist_uuid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "noa"."song" ADD CONSTRAINT "FK_83cca5c84ec6e2a4781d532a69e" FOREIGN KEY ("album_album_uuid") REFERENCES "noa"."album"("album_uuid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "noa"."album" ADD CONSTRAINT "FK_070e009713200ceb35bc61e8a74" FOREIGN KEY ("artist_artist_uuid") REFERENCES "noa"."artist"("artist_uuid") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "noa"."album" DROP CONSTRAINT "FK_070e009713200ceb35bc61e8a74"`);
        await queryRunner.query(`ALTER TABLE "noa"."song" DROP CONSTRAINT "FK_83cca5c84ec6e2a4781d532a69e"`);
        await queryRunner.query(`ALTER TABLE "noa"."song" DROP CONSTRAINT "FK_a05e88c0272e155e79715da94a7"`);
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist" DROP CONSTRAINT "FK_0b735d18910f8a33d30173cc5e7"`);
        await queryRunner.query(`ALTER TABLE "noa"."album" DROP COLUMN "artist_artist_uuid"`);
        await queryRunner.query(`ALTER TABLE "noa"."album" DROP CONSTRAINT "PK_a7fafb8d045c7ec0bb4ba75ea84"`);
        await queryRunner.query(`ALTER TABLE "noa"."album" DROP COLUMN "album_uuid"`);
        await queryRunner.query(`ALTER TABLE "noa"."song" DROP COLUMN "album_album_uuid"`);
        await queryRunner.query(`ALTER TABLE "noa"."song" DROP COLUMN "personal_playlist_personal_playlist_uuid"`);
        await queryRunner.query(`ALTER TABLE "noa"."song" DROP CONSTRAINT "PK_6e3374d031ed59cdc5a8b7e0212"`);
        await queryRunner.query(`ALTER TABLE "noa"."song" DROP COLUMN "song_uuid"`);
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist" DROP COLUMN "user_user_uuid"`);
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist" DROP CONSTRAINT "PK_5d4de7619cc52399e6c3f3fe6b6"`);
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist" DROP COLUMN "personal_playlist_uuid"`);
        await queryRunner.query(`ALTER TABLE "noa"."album" ADD "artist_uuid" uuid`);
        await queryRunner.query(`ALTER TABLE "noa"."album" ADD "uuid" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "noa"."album" ADD CONSTRAINT "PK_ac982622311ded526b50a1c2424" PRIMARY KEY ("uuid")`);
        await queryRunner.query(`ALTER TABLE "noa"."song" ADD "album_uuid" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "noa"."song" ADD "personal_playlist_uuid" uuid`);
        await queryRunner.query(`ALTER TABLE "noa"."song" ADD "uuid" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "noa"."song" ADD CONSTRAINT "PK_a0f6ee70290deaf2039ba28ed6a" PRIMARY KEY ("uuid")`);
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist" ADD "user_uuid" uuid`);
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist" ADD "uuid" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist" ADD CONSTRAINT "PK_8e6581d9ad2fff84e7fc087efa8" PRIMARY KEY ("uuid")`);
        await queryRunner.query(`ALTER TABLE "noa"."artist" RENAME CONSTRAINT "PK_be0ca13e1f4cad0e0989d9e7b6e" TO "PK_74d7294bff9579a42089ccfd82e"`);
        await queryRunner.query(`ALTER TABLE "noa"."artist" RENAME COLUMN "artist_uuid" TO "uuid"`);
        await queryRunner.query(`ALTER TABLE "noa"."user" RENAME CONSTRAINT "PK_20ba1ec1283433fc53a5311f165" TO "PK_a95e949168be7b7ece1a2382fed"`);
        await queryRunner.query(`ALTER TABLE "noa"."user" RENAME COLUMN "user_uuid" TO "uuid"`);
        await queryRunner.query(`ALTER TABLE "noa"."album" ADD CONSTRAINT "FK_0189fc8f1e947d330d3bf2618d4" FOREIGN KEY ("artist_uuid") REFERENCES "noa"."artist"("uuid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "noa"."song" ADD CONSTRAINT "FK_8de1cdfecda3e8eaabd5dac6865" FOREIGN KEY ("album_uuid") REFERENCES "noa"."album"("uuid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "noa"."song" ADD CONSTRAINT "FK_2f84318d8755e4c6da97ed22873" FOREIGN KEY ("personal_playlist_uuid") REFERENCES "noa"."personal_playlist"("uuid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist" ADD CONSTRAINT "FK_5e93d5fce1fbb39c524f99d8561" FOREIGN KEY ("user_uuid") REFERENCES "noa"."user"("uuid") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
