import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableDificuldadePontuacao1643290242317
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tblDificuldadePontuacao',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            length: '36',
            isPrimary: true,
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'dificuldade',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'pontuacao',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 0,
            isNullable: false,
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tblDificuldadePontuacao');
  }
}
