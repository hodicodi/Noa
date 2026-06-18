import { MigrationInterface, QueryRunner } from "typeorm";

export class Generated1781791067389 implements MigrationInterface {
    name = 'Generated1781791067389'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "noa"."personal_playlist_songs_song" ("personal_playlist_personal_playlist_uuid" uuid NOT NULL, "song_song_uuid" uuid NOT NULL, CONSTRAINT "PK_33a1268635833725accb0d7f00e" PRIMARY KEY ("personal_playlist_personal_playlist_uuid", "song_song_uuid"))`);
        await queryRunner.query(`CREATE INDEX "IDX_7591ffd90d9fd85cdd6ba91f63" ON "noa"."personal_playlist_songs_song"  ("personal_playlist_personal_playlist_uuid") `);
        await queryRunner.query(`CREATE INDEX "IDX_514dddbf23ea881022ac060664" ON "noa"."personal_playlist_songs_song"  ("song_song_uuid") `);
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist_songs_song" ADD CONSTRAINT "FK_7591ffd90d9fd85cdd6ba91f63c" FOREIGN KEY ("personal_playlist_personal_playlist_uuid") REFERENCES "noa"."personal_playlist"("personal_playlist_uuid") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist_songs_song" ADD CONSTRAINT "FK_514dddbf23ea881022ac060664f" FOREIGN KEY ("song_song_uuid") REFERENCES "noa"."song"("song_uuid") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist_songs_song" DROP CONSTRAINT "FK_514dddbf23ea881022ac060664f"`);
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist_songs_song" DROP CONSTRAINT "FK_7591ffd90d9fd85cdd6ba91f63c"`);
        await queryRunner.query(`DROP INDEX "noa"."IDX_514dddbf23ea881022ac060664"`);
        await queryRunner.query(`DROP INDEX "noa"."IDX_7591ffd90d9fd85cdd6ba91f63"`);
        await queryRunner.query(`DROP TABLE "noa"."personal_playlist_songs_song"`);
    }

}
