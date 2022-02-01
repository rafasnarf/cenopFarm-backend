import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

import { DificuldadePontuacao } from './DificuldadePontuacao';

@Entity('tblQuiz')
export class Quiz {
  @PrimaryColumn()
  id: string;

  @Column({ type: 'text' })
  pergunta: string;

  @Column({ type: 'text' })
  respostaCorreta: string;

  @Column({ type: 'text' })
  respostaIncorreta1: string;

  @Column({ type: 'text' })
  respostaIncorreta2: string;

  @Column()
  idDificuldade: string;

  @Column({ type: 'boolean' })
  ativo: boolean;

  @CreateDateColumn({ type: 'timestamp', default: '0' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', default: 'NOW()' })
  updatedAt: Date;
}
