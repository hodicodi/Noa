import { MigrationInterface, QueryRunner } from "typeorm";

export class Generated1782162823956 implements MigrationInterface {
    name = 'Generated1782162823956'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "noa"."song" RENAME COLUMN "genere" TO "genre"`);
        await queryRunner.query(`ALTER TYPE "noa"."song_genere_enum" RENAME TO "song_genre_enum"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TYPE "noa"."song_genre_enum" RENAME TO "song_genere_enum"`);
        await queryRunner.query(`ALTER TABLE "noa"."song" RENAME COLUMN "genre" TO "genere"`);
    }

}
