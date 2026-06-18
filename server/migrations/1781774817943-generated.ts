import { MigrationInterface, QueryRunner } from "typeorm";

export class Generated1781774817943 implements MigrationInterface {
    name = 'Generated1781774817943'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "noa"."user" RENAME COLUMN "artist_name" TO "user_name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "noa"."user" RENAME COLUMN "user_name" TO "artist_name"`);
    }

}
