import { MigrationInterface, QueryRunner } from "typeorm";

export class Generated1782303637521 implements MigrationInterface {
    name = 'Generated1782303637521'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "noa"."artist" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "noa"."artist" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "noa"."user" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "noa"."user" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "noa"."song" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "noa"."song" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "noa"."album" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "noa"."album" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "noa"."artist" ADD "create_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "noa"."artist" ADD "delete_date" TIMESTAMP WITH TIME ZONE`);
        await queryRunner.query(`ALTER TABLE "noa"."user" ADD "create_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "noa"."user" ADD "delete_date" TIMESTAMP WITH TIME ZONE`);
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist" ADD "create_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist" ADD "delete_date" TIMESTAMP WITH TIME ZONE`);
        await queryRunner.query(`ALTER TABLE "noa"."song" ADD "create_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "noa"."song" ADD "delete_date" TIMESTAMP WITH TIME ZONE`);
        await queryRunner.query(`ALTER TABLE "noa"."album" ADD "create_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "noa"."album" ADD "delete_date" TIMESTAMP WITH TIME ZONE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "noa"."album" DROP COLUMN "delete_date"`);
        await queryRunner.query(`ALTER TABLE "noa"."album" DROP COLUMN "create_date"`);
        await queryRunner.query(`ALTER TABLE "noa"."song" DROP COLUMN "delete_date"`);
        await queryRunner.query(`ALTER TABLE "noa"."song" DROP COLUMN "create_date"`);
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist" DROP COLUMN "delete_date"`);
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist" DROP COLUMN "create_date"`);
        await queryRunner.query(`ALTER TABLE "noa"."user" DROP COLUMN "delete_date"`);
        await queryRunner.query(`ALTER TABLE "noa"."user" DROP COLUMN "create_date"`);
        await queryRunner.query(`ALTER TABLE "noa"."artist" DROP COLUMN "delete_date"`);
        await queryRunner.query(`ALTER TABLE "noa"."artist" DROP COLUMN "create_date"`);
        await queryRunner.query(`ALTER TABLE "noa"."album" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "noa"."album" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "noa"."song" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "noa"."song" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "noa"."personal_playlist" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "noa"."user" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "noa"."user" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "noa"."artist" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "noa"."artist" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
