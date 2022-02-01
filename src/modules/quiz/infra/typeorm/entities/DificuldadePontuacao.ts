import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('tblDificuldadePontuacao')
export class DificuldadePontuacao {
  @PrimaryColumn()
  id: string;

  @Column({ type: 'int' })
  pontuacao: number;

  @Column()
  dificuldade: string;

  @CreateDateColumn({ type: 'timestamp', default: '0' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', default: 'NOW()' })
  updatedAt: Date;
}
