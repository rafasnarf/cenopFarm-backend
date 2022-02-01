import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('tblJogador')
export class Jogador {
  @PrimaryColumn({
    type: 'varchar',
    length: '36',
    nullable: false,
    unique: true,
  })
  matricula: string;

  @Column({ nullable: false })
  nome: string;

  @Column({ type: 'int', nullable: false })
  codCargo: number;

  @Column({ nullable: false })
  nomeCargo: string;

  @Column({ type: 'int', nullable: false })
  uorEquipe: number;

  @Column({ type: 'int', nullable: false })
  prefixo: number;

  @Column({ default: false, nullable: false })
  administrador: boolean;

  @Column({ type: 'int', default: 0, nullable: false })
  pontuacao: number;

  @Column({ type: 'varchar', length: '36', nullable: false })
  matriculaGerente: string;

  @CreateDateColumn({ type: 'timestamp', default: '0' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', default: 'NOW()' })
  updatedAt: Date;
}
