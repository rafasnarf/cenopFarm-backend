import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { Jogador } from './Jogador';
import { Quiz } from 'src/modules/quiz/infra/typeorm/entities/Quiz';

@Entity('tblPontuacaoLog')
export class PontuacaoLog {
  @PrimaryColumn()
  @OneToOne(() => Jogador)
  @JoinColumn()
  idMatricula: string;

  @OneToOne(() => Quiz)
  @JoinColumn()
  idPergunta: Quiz;

  @Column({ type: 'int' })
  pontuacaoAnterior: number;

  @Column({ type: 'int' })
  pontuacaoAtual: number;

  @Column()
  acertou: boolean;

  @CreateDateColumn({ type: 'timestamp', default: 'NOW()' })
  createdAt: Date;
}
