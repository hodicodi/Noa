import { MigrationInterface, QueryRunner } from "typeorm";

export class Generated1785498766746 implements MigrationInterface {
    name = 'Generated1785498766746'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "noa"."song" DROP COLUMN "publish_date"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "noa"."song" ADD "publish_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT ('now'::text)::date`);
    }

}
