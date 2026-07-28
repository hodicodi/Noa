import { MigrationInterface, QueryRunner } from "typeorm";

export class Generated1785235864538 implements MigrationInterface {
    name = 'Generated1785235864538'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "noa"."album" ADD "img_url" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "noa"."album" DROP COLUMN "img_url"`);
    }

}
