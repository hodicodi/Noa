import { MigrationInterface, QueryRunner } from "typeorm";

export class Generated1781601474724 implements MigrationInterface {
    name = 'Generated1781601474724'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "noa"."album" ("uuid" SERIAL NOT NULL, "views" integer NOT NULL, "length" integer NOT NULL, CONSTRAINT "PK_ac982622311ded526b50a1c2424" PRIMARY KEY ("uuid"))`);
        await queryRunner.query(`CREATE TYPE "noa"."artist_artisttype_enum" AS ENUM('singer', 'band', 'pair')`);
        await queryRunner.query(`CREATE TABLE "noa"."artist" ("uuid" SERIAL NOT NULL, "artistType" "noa"."artist_artisttype_enum" NOT NULL DEFAULT 'singer', CONSTRAINT "PK_74d7294bff9579a42089ccfd82e" PRIMARY KEY ("uuid"))`);
        await queryRunner.query(`CREATE TYPE "noa"."song_genere_enum" AS ENUM('rock', 'pop', 'hip-hop', 'country')`);
        await queryRunner.query(`CREATE TABLE "noa"."song" ("uuid" SERIAL NOT NULL, "publishDate" date NOT NULL DEFAULT ('now'::text)::date, "views" integer NOT NULL, "length" integer NOT NULL, "genere" "noa"."song_genere_enum" NOT NULL DEFAULT 'rock', "album" integer, CONSTRAINT "PK_a0f6ee70290deaf2039ba28ed6a" PRIMARY KEY ("uuid"))`);
        await queryRunner.query(`CREATE TYPE "noa"."personal_playlist_platlisttype_enum" AS ENUM('userPlaylist', 'history', 'likedSongs')`);
        await queryRunner.query(`CREATE TABLE "noa"."personal_playlist" ("uuid" SERIAL NOT NULL, "views" integer NOT NULL, "length" integer NOT NULL, "platlistType" "noa"."personal_playlist_platlisttype_enum" NOT NULL DEFAULT 'userPlaylist', CONSTRAINT "PK_8e6581d9ad2fff84e7fc087efa8" PRIMARY KEY ("uuid"))`);
        await queryRunner.query(`CREATE TABLE "noa"."user" ("uuid" SERIAL NOT NULL, "isAdministor" boolean NOT NULL, CONSTRAINT "PK_a95e949168be7b7ece1a2382fed" PRIMARY KEY ("uuid"))`);
        await queryRunner.query(`ALTER TABLE "noa"."album" ADD CONSTRAINT "FK_ac982622311ded526b50a1c2424" FOREIGN KEY ("uuid") REFERENCES "noa"."artist"("uuid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "noa"."song" ADD CONSTRAINT "FK_a0f6ee70290deaf2039ba28ed6a" FOREIGN KEY ("uuid") REFERENCES "noa"."artist"("uuid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "noa"."song" ADD CONSTRAINT "FK_cbe91b82c68681e16a3973fdf43" FOREIGN KEY ("album") REFERENCES "noa"."album"("uuid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist" ADD CONSTRAINT "FK_8e6581d9ad2fff84e7fc087efa8" FOREIGN KEY ("uuid") REFERENCES "noa"."user"("uuid") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist" DROP CONSTRAINT "FK_8e6581d9ad2fff84e7fc087efa8"`);
        await queryRunner.query(`ALTER TABLE "noa"."song" DROP CONSTRAINT "FK_cbe91b82c68681e16a3973fdf43"`);
        await queryRunner.query(`ALTER TABLE "noa"."song" DROP CONSTRAINT "FK_a0f6ee70290deaf2039ba28ed6a"`);
        await queryRunner.query(`ALTER TABLE "noa"."album" DROP CONSTRAINT "FK_ac982622311ded526b50a1c2424"`);
        await queryRunner.query(`DROP TABLE "noa"."user"`);
        await queryRunner.query(`DROP TABLE "noa"."personal_playlist"`);
        await queryRunner.query(`DROP TYPE "noa"."personal_playlist_platlisttype_enum"`);
        await queryRunner.query(`DROP TABLE "noa"."song"`);
        await queryRunner.query(`DROP TYPE "noa"."song_genere_enum"`);
        await queryRunner.query(`DROP TABLE "noa"."artist"`);
        await queryRunner.query(`DROP TYPE "noa"."artist_artisttype_enum"`);
        await queryRunner.query(`DROP TABLE "noa"."album"`);
    }

}
