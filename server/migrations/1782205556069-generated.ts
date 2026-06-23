import { MigrationInterface, QueryRunner } from "typeorm";

export class Generated1782205556069 implements MigrationInterface {
    name = 'Generated1782205556069'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist" ADD CONSTRAINT "UQ_80ab51259c3cc3a0bf573e58c3b" UNIQUE ("name")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist" DROP CONSTRAINT "UQ_80ab51259c3cc3a0bf573e58c3b"`);
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist" DROP COLUMN "name"`);
    }

}
