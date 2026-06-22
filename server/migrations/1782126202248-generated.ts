import { MigrationInterface, QueryRunner } from "typeorm";

export class Generated1782126202248 implements MigrationInterface {
    name = 'Generated1782126202248'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TYPE "noa"."artist_artist_type_enum" RENAME TO "artist_artist_type_enum_old"`);
        await queryRunner.query(`CREATE TYPE "noa"."artist_type" AS ENUM('singer', 'band', 'pair')`);
        await queryRunner.query(`ALTER TABLE "noa"."artist" ALTER COLUMN "artist_type" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "noa"."artist" ALTER COLUMN "artist_type" TYPE "noa"."artist_type" USING "artist_type"::"text"::"noa"."artist_type"`);
        await queryRunner.query(`ALTER TABLE "noa"."artist" ALTER COLUMN "artist_type" SET DEFAULT 'singer'`);
        await queryRunner.query(`DROP TYPE "noa"."artist_artist_type_enum_old"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "noa"."artist_artist_type_enum_old" AS ENUM('singer', 'band', 'pair')`);
        await queryRunner.query(`ALTER TABLE "noa"."artist" ALTER COLUMN "artist_type" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "noa"."artist" ALTER COLUMN "artist_type" TYPE "noa"."artist_artist_type_enum_old" USING "artist_type"::"text"::"noa"."artist_artist_type_enum_old"`);
        await queryRunner.query(`ALTER TABLE "noa"."artist" ALTER COLUMN "artist_type" SET DEFAULT 'singer'`);
        await queryRunner.query(`DROP TYPE "noa"."artist_type"`);
        await queryRunner.query(`ALTER TYPE "noa"."artist_artist_type_enum_old" RENAME TO "artist_artist_type_enum"`);
    }

}
