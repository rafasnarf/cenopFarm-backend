import { Column, CreateDateColumn, Entity } from 'typeorm';

@Entity('tblLogAcessosTotais')
export class LogAcessosTotais {
  @Column({ type: 'varchar', length: '8', nullable: false })
  matricula: string;

  @CreateDateColumn({ type: 'timestamp', default: 'NOW()' })
  createdAt: Date;
}
