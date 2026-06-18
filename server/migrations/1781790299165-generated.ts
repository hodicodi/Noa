import { MigrationInterface, QueryRunner } from "typeorm";

export class Generated1781790299165 implements MigrationInterface {
    name = 'Generated1781790299165'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "noa"."song" DROP CONSTRAINT "FK_a05e88c0272e155e79715da94a7"`);
        await queryRunner.query(`CREATE TABLE "noa"."album_songs_song" ("album_album_uuid" uuid NOT NULL, "song_song_uuid" uuid NOT NULL, CONSTRAINT "PK_a0e8db02f0e066e8c457451b05f" PRIMARY KEY ("album_album_uuid", "song_song_uuid"))`);
        await queryRunner.query(`CREATE INDEX "IDX_25baccecf56d19e5bd343d52ea" ON "noa"."album_songs_song"  ("album_album_uuid") `);
        await queryRunner.query(`CREATE INDEX "IDX_b55c5f3caa89bb5eeba6cf973c" ON "noa"."album_songs_song"  ("song_song_uuid") `);
        await queryRunner.query(`ALTER TABLE "noa"."song" DROP COLUMN "personal_playlist_personal_playlist_uuid"`);
        await queryRunner.query(`ALTER TABLE "noa"."album_songs_song" ADD CONSTRAINT "FK_25baccecf56d19e5bd343d52ea2" FOREIGN KEY ("album_album_uuid") REFERENCES "noa"."album"("album_uuid") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "noa"."album_songs_song" ADD CONSTRAINT "FK_b55c5f3caa89bb5eeba6cf973cb" FOREIGN KEY ("song_song_uuid") REFERENCES "noa"."song"("song_uuid") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "noa"."album_songs_song" DROP CONSTRAINT "FK_b55c5f3caa89bb5eeba6cf973cb"`);
        await queryRunner.query(`ALTER TABLE "noa"."album_songs_song" DROP CONSTRAINT "FK_25baccecf56d19e5bd343d52ea2"`);
        await queryRunner.query(`ALTER TABLE "noa"."song" ADD "personal_playlist_personal_playlist_uuid" uuid`);
        await queryRunner.query(`DROP INDEX "noa"."IDX_b55c5f3caa89bb5eeba6cf973c"`);
        await queryRunner.query(`DROP INDEX "noa"."IDX_25baccecf56d19e5bd343d52ea"`);
        await queryRunner.query(`DROP TABLE "noa"."album_songs_song"`);
        await queryRunner.query(`ALTER TABLE "noa"."song" ADD CONSTRAINT "FK_a05e88c0272e155e79715da94a7" FOREIGN KEY ("personal_playlist_personal_playlist_uuid") REFERENCES "noa"."personal_playlist"("personal_playlist_uuid") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
