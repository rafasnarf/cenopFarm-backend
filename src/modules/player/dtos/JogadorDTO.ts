export class JogadorDTO {
  matricula: string;
  nome: string;
  codCargo: number;
  nomeCargo: string;
  uorEquipe: number;
  prefixo: number;
  administrador: boolean;
  pontuacao?: number;
  matriculaGerente: string;
  createdAt?: Date;
  updatedAt?: Date;
}
