import { MigrationInterface, QueryRunner } from 'typeorm';

export class CriaTabelas1695922158296 implements MigrationInterface {
  name = 'CriaTabelas1695922158296';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "produtos" RENAME COLUMN "quantidade" TO "quantidade_disponivel"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "produtos" RENAME COLUMN "quantidade_disponivel" TO "quantidade"`,
    );
  }
}
