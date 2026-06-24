import { BaseEntity, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn } from "typeorm";

export abstract class BaseCustomEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  @CreateDateColumn({ type: "timestamptz" })
  createDate: Date;

  @DeleteDateColumn({ type: "timestamptz", nullable: true })
  deleteDate: Date | null;
}
