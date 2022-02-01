import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableLogAcessos1643301663497 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tblLogAcessos',
        columns: [
          {
            name: 'quantidade',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'now()',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tblLogAcessos');
  }
}
