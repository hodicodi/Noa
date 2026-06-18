import { MigrationInterface, QueryRunner } from "typeorm";

export class Generated1781786887722 implements MigrationInterface {
    name = 'Generated1781786887722'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "noa"."album" DROP COLUMN "views"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "noa"."album" ADD "views" integer NOT NULL`);
    }

}
