import { MigrationInterface, QueryRunner } from "typeorm";

export class Generated1782310648883 implements MigrationInterface {
    name = 'Generated1782310648883'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "noa"."user" RENAME COLUMN "user_name" TO "name"`);
        await queryRunner.query(`ALTER TABLE "noa"."user" RENAME CONSTRAINT "UQ_d34106f8ec1ebaf66f4f8609dd6" TO "UQ_065d4d8f3b5adb4a08841eae3c8"`);
        await queryRunner.query(`ALTER TABLE "noa"."album" ADD CONSTRAINT "UQ_a73b466bc11b9f56ea029f22c5b" UNIQUE ("name", "artist_uuid")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "noa"."album" DROP CONSTRAINT "UQ_a73b466bc11b9f56ea029f22c5b"`);
        await queryRunner.query(`ALTER TABLE "noa"."user" RENAME CONSTRAINT "UQ_065d4d8f3b5adb4a08841eae3c8" TO "UQ_d34106f8ec1ebaf66f4f8609dd6"`);
        await queryRunner.query(`ALTER TABLE "noa"."user" RENAME COLUMN "name" TO "user_name"`);
    }

}
