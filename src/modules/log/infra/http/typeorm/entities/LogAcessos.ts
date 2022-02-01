import { Column, Entity, UpdateDateColumn } from 'typeorm';

@Entity('tblLogAcessos')
export class LogAcessos {
  @Column()
  quantidade: number;

  @UpdateDateColumn()
  updatedAt: Date;
}
