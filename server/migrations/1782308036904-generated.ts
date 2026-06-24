import { MigrationInterface, QueryRunner } from "typeorm";

export class Generated1782308036904 implements MigrationInterface {
    name = 'Generated1782308036904'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "noa"."user" RENAME COLUMN "id" TO "tz"`);
        await queryRunner.query(`ALTER TABLE "noa"."user" RENAME CONSTRAINT "UQ_cace4a159ff9f2512dd42373760" TO "UQ_892a478baf532e4a9b853e4feb8"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "noa"."user" RENAME CONSTRAINT "UQ_892a478baf532e4a9b853e4feb8" TO "UQ_cace4a159ff9f2512dd42373760"`);
        await queryRunner.query(`ALTER TABLE "noa"."user" RENAME COLUMN "tz" TO "id"`);
    }

}
