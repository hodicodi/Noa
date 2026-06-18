import { MigrationInterface, QueryRunner } from "typeorm";

export class Generated1781787070650 implements MigrationInterface {
    name = 'Generated1781787070650'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "noa"."album" DROP COLUMN "length"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "noa"."album" ADD "length" integer NOT NULL`);
    }

}
