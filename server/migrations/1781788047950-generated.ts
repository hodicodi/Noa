import { MigrationInterface, QueryRunner } from "typeorm";

export class Generated1781788047950 implements MigrationInterface {
    name = 'Generated1781788047950'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "noa"."song" DROP COLUMN "views"`);
        await queryRunner.query(`ALTER TABLE "noa"."song" DROP COLUMN "length"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "noa"."song" ADD "length" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "noa"."song" ADD "views" integer NOT NULL`);
    }

}
