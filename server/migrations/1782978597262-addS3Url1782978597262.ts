import { MigrationInterface, QueryRunner } from "typeorm";

export class AddS3Url1782978597262 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "noa"."song" ADD CONSTRAINT "UQ_15609e2859f066a3d2d8e44daf2" UNIQUE ("s3_url")`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "noa"."song" DROP CONSTRAINT "UQ_15609e2859f066a3d2d8e44daf2"`);
  }
}
