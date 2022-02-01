import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableLogAcessosTotais1643299603414
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tblLogAcessosTotais',
        columns: [
          {
            name: 'matricula',
            type: 'varchar',
            length: '8',
            isNullable: false,
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tblLogAcessosTotais');
  }
}
