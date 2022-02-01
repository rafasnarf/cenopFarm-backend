import { query } from 'express';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTablePontuacaoLog1643302482709
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tblPontuacaoLog',
        columns: [
          {
            name: 'idMatricula',
            type: 'varchar',
            isNullable: false,
            length: '8',
          },
          {
            name: 'idPergunta',
            type: 'varchar',
            length: '36',
            isNullable: false,
          },
          {
            name: 'pontuacaoAnterior',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'pontuacaoAtual',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'acertou',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            isNullable: false,
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tblPontuacaoLog');
  }
}
