import { MigrationInterface, QueryRunner } from "typeorm";

export class Generated1781784709832 implements MigrationInterface {
    name = 'Generated1781784709832'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "noa"."song" ADD "song_name" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "noa"."song" DROP COLUMN "song_name"`);
    }

}
