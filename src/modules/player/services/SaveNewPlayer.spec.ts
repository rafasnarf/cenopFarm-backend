import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import AppError from '../../../shared/errors/AppError';
import { FakePlayerRepository } from '../repositories/fakes/FakePlayerRepository';
import { Jogador } from '../infra/typeorm/entities/Jogador';
import { JogadorDTO } from '../dtos/JogadorDTO';
import { SaveNewPlayerService } from './SaveNewPlayer.service';

describe('SaveNewPlayerService', () => {
  let saveNewPlayerService: SaveNewPlayerService;
  let playerRepository: FakePlayerRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SaveNewPlayerService,
        {
          provide: getRepositoryToken(Jogador),
          useClass: FakePlayerRepository,
        },
      ],
    }).compile();

    saveNewPlayerService = await module.resolve(SaveNewPlayerService);
    playerRepository = await module.resolve(getRepositoryToken(Jogador));
  });

  it('deve retornar erro por falta de matricula', async () => {
    const data: JogadorDTO = {
      administrador: false,
      uorEquipe: 1234,
      nomeCargo: 'teste1',
      matriculaGerente: 'teste1',
      codCargo: 1234,
      prefixo: 1234,
      nome: 'teste1',
      matricula: '',
    };

    const result = await saveNewPlayerService.execute(data);

    expect(result).toBeInstanceOf(AppError);
  });

  it('deve retornar erro por falta de nome do funcionario', async () => {
    const data: JogadorDTO = {
      administrador: false,
      uorEquipe: 1234,
      nomeCargo: 'teste1',
      matriculaGerente: 'teste1',
      codCargo: 1234,
      prefixo: 1234,
      nome: '',
      matricula: 'teste1',
    };

    const result = await saveNewPlayerService.execute(data);

    expect(result).toBeInstanceOf(AppError);
  });

  it('deve retornar erro por falta de prefixo', async () => {
    const data: JogadorDTO = {
      administrador: false,
      uorEquipe: 1234,
      nomeCargo: 'teste1',
      matriculaGerente: 'teste1',
      codCargo: 1234,
      prefixo: 0,
      nome: 'teste1',
      matricula: 'teste1',
    };

    const result = await saveNewPlayerService.execute(data);

    expect(result).toBeInstanceOf(AppError);
  });

  it('deve retornar erro por falta de código do cargo', async () => {
    const data: JogadorDTO = {
      administrador: false,
      uorEquipe: 1234,
      nomeCargo: 'teste1',
      matriculaGerente: 'teste1',
      codCargo: 0,
      prefixo: 1234,
      nome: 'teste1',
      matricula: 'teste1',
    };

    const result = await saveNewPlayerService.execute(data);

    expect(result).toBeInstanceOf(AppError);
  });

  it('deve retornar erro por falta de matricula do gerente', async () => {
    const data: JogadorDTO = {
      administrador: false,
      uorEquipe: 1234,
      nomeCargo: 'teste1',
      matriculaGerente: '',
      codCargo: 1234,
      prefixo: 1234,
      nome: 'teste1',
      matricula: 'teste1',
    };

    const result = await saveNewPlayerService.execute(data);

    expect(result).toBeInstanceOf(AppError);
  });

  it('deve retornar erro por falta de nome do cargo', async () => {
    const data: JogadorDTO = {
      administrador: false,
      uorEquipe: 1234,
      nomeCargo: '',
      matriculaGerente: 'teste1',
      codCargo: 1234,
      prefixo: 1234,
      nome: 'teste1',
      matricula: 'teste1',
    };

    const result = await saveNewPlayerService.execute(data);

    expect(result).toBeInstanceOf(AppError);
  });

  it('deve retornar erro por falta de código da uor da equipe', async () => {
    const data: JogadorDTO = {
      administrador: false,
      uorEquipe: 0,
      nomeCargo: 'teste1',
      matriculaGerente: 'teste1',
      codCargo: 1234,
      prefixo: 1234,
      nome: 'teste1',
      matricula: 'teste1',
    };

    const result = await saveNewPlayerService.execute(data);

    expect(result).toBeInstanceOf(AppError);
  });

  it('deve retornar o registro do jogador cadastrado', async () => {
    const data: JogadorDTO = {
      administrador: false,
      uorEquipe: 1234,
      nomeCargo: 'teste1',
      matriculaGerente: 'teste1',
      codCargo: 1234,
      prefixo: 1234,
      nome: 'teste1',
      matricula: 'teste1',
    };

    const result = await saveNewPlayerService.execute(data);

    expect(result).toHaveProperty('createdAt');
  });

  it('deve retornar erro por já existir esse jogador cadastrado', async () => {
    const data: JogadorDTO = {
      administrador: false,
      uorEquipe: 1234,
      nomeCargo: 'teste1',
      matriculaGerente: 'teste1',
      codCargo: 1234,
      prefixo: 1234,
      nome: 'teste1',
      matricula: 'teste1',
    };

    await saveNewPlayerService.execute(data);

    const data2: JogadorDTO = {
      administrador: false,
      uorEquipe: 1234,
      nomeCargo: 'teste2',
      matriculaGerente: 'teste2',
      codCargo: 1234,
      prefixo: 1234,
      nome: 'teste2',
      matricula: 'teste1',
    };

    const result = await saveNewPlayerService.execute(data2);

    expect(result).toBeInstanceOf(AppError);
  });
});
