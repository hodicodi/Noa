import { MigrationInterface, QueryRunner } from "typeorm";

export class Generated1782138678737 implements MigrationInterface {
    name = 'Generated1782138678737'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "noa"."album" DROP CONSTRAINT "FK_070e009713200ceb35bc61e8a74"`);
        await queryRunner.query(`ALTER TABLE "noa"."album" RENAME COLUMN "artist_artist_uuid" TO "artist_uuid"`);
        await queryRunner.query(`ALTER TABLE "noa"."artist" DROP CONSTRAINT "PK_be0ca13e1f4cad0e0989d9e7b6e"`);
        await queryRunner.query(`ALTER TABLE "noa"."artist" DROP COLUMN "artist_uuid"`);
        await queryRunner.query(`ALTER TABLE "noa"."artist" DROP CONSTRAINT "UQ_4183c13f4e5724bab2e86a21701"`);
        await queryRunner.query(`ALTER TABLE "noa"."artist" DROP COLUMN "artist_name"`);
        await queryRunner.query(`ALTER TABLE "noa"."artist" ADD "uuid" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "noa"."artist" ADD CONSTRAINT "PK_74d7294bff9579a42089ccfd82e" PRIMARY KEY ("uuid")`);
        await queryRunner.query(`ALTER TABLE "noa"."artist" ADD "name" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "noa"."artist" ADD CONSTRAINT "UQ_dd5a88442cd2e068463fa03e496" UNIQUE ("name")`);
        await queryRunner.query(`ALTER TABLE "noa"."album" ADD CONSTRAINT "FK_0189fc8f1e947d330d3bf2618d4" FOREIGN KEY ("artist_uuid") REFERENCES "noa"."artist"("uuid") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "noa"."album" DROP CONSTRAINT "FK_0189fc8f1e947d330d3bf2618d4"`);
        await queryRunner.query(`ALTER TABLE "noa"."artist" DROP CONSTRAINT "UQ_dd5a88442cd2e068463fa03e496"`);
        await queryRunner.query(`ALTER TABLE "noa"."artist" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "noa"."artist" DROP CONSTRAINT "PK_74d7294bff9579a42089ccfd82e"`);
        await queryRunner.query(`ALTER TABLE "noa"."artist" DROP COLUMN "uuid"`);
        await queryRunner.query(`ALTER TABLE "noa"."artist" ADD "artist_name" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "noa"."artist" ADD CONSTRAINT "UQ_4183c13f4e5724bab2e86a21701" UNIQUE ("artist_name")`);
        await queryRunner.query(`ALTER TABLE "noa"."artist" ADD "artist_uuid" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "noa"."artist" ADD CONSTRAINT "PK_be0ca13e1f4cad0e0989d9e7b6e" PRIMARY KEY ("artist_uuid")`);
        await queryRunner.query(`ALTER TABLE "noa"."album" RENAME COLUMN "artist_uuid" TO "artist_artist_uuid"`);
        await queryRunner.query(`ALTER TABLE "noa"."album" ADD CONSTRAINT "FK_070e009713200ceb35bc61e8a74" FOREIGN KEY ("artist_artist_uuid") REFERENCES "noa"."artist"("artist_uuid") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
