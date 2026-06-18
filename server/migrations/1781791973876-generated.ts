import { MigrationInterface, QueryRunner } from "typeorm";

export class Generated1781791973876 implements MigrationInterface {
    name = 'Generated1781791973876'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "noa"."album" ADD "album_name" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "noa"."album" ADD CONSTRAINT "UQ_a9bae191d9c84ffdbe1aace3f46" UNIQUE ("album_name")`);
        await queryRunner.query(`ALTER TABLE "noa"."user" ADD CONSTRAINT "UQ_d34106f8ec1ebaf66f4f8609dd6" UNIQUE ("user_name")`);
        await queryRunner.query(`ALTER TABLE "noa"."artist" ADD CONSTRAINT "UQ_4183c13f4e5724bab2e86a21701" UNIQUE ("artist_name")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "noa"."artist" DROP CONSTRAINT "UQ_4183c13f4e5724bab2e86a21701"`);
        await queryRunner.query(`ALTER TABLE "noa"."user" DROP CONSTRAINT "UQ_d34106f8ec1ebaf66f4f8609dd6"`);
        await queryRunner.query(`ALTER TABLE "noa"."album" DROP CONSTRAINT "UQ_a9bae191d9c84ffdbe1aace3f46"`);
        await queryRunner.query(`ALTER TABLE "noa"."album" DROP COLUMN "album_name"`);
    }

}
