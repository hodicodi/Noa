import { MigrationInterface, QueryRunner } from "typeorm";
import dotenv from "dotenv";
import "reflect-metadata";
dotenv.config();

const { DB_SCHEMA = "" } = process.env;

export class addImgUrl1785235864538 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE ${DB_SCHEMA}."album" ADD "img_url" character varying`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE ${DB_SCHEMA}."album" DROP COLUMN "img_url"`);
  }
}
