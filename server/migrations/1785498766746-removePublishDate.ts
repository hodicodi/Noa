import { MigrationInterface, QueryRunner } from "typeorm";
import dotenv from "dotenv";
import "reflect-metadata";
dotenv.config();

const { DB_SCHEMA = "" } = process.env;

export class removePublishDate1785498766746 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE ${DB_SCHEMA}."song" DROP COLUMN "publish_date"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE ${DB_SCHEMA}."song" ADD "publish_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT ('now'::text)::date`);
  }
}
