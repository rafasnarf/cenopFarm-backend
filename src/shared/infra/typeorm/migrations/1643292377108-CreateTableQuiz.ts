import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableQuiz1643292377108 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tblQuiz',
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
            name: 'pergunta',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'respostaCorreta',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'respostaIncorreta1',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'respostaIncorreta2',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'idDificuldade',
            type: 'varchar',
            length: '36',
            isNullable: false,
          },
          {
            name: 'ativo',
            type: 'boolean',
            default: true,
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
    await queryRunner.dropTable('tblQuiz');
  }
}
