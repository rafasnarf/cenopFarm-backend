import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableJogador1643294548407 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tblJogador',
        columns: [
          {
            name: 'matricula',
            type: 'varchar',
            length: '8',
            isPrimary: true,
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'nome',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'codCargo',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'nomeCargo',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'uorEquipe',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'prefixo',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'administrador',
            type: 'boolean',
            default: false,
            isNullable: false,
          },
          {
            name: 'pontuacao',
            type: 'int',
            default: 0,
            isNullable: false,
          },
          {
            name: 'matriculaGerente',
            type: 'varchar',
            length: '36',
            isNullable: false,
          },
          {
            name: 'quizDiario',
            type: 'boolean',
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
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tblJogador');
  }
}
