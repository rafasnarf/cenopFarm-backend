import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import AppError from '../../../shared/errors/AppError';
import { FakePlayerRepository } from '../repositories/fakes/FakePlayerRepository';
import { Jogador } from '../infra/typeorm/entities/Jogador';

import { SaveNewPlayerService } from './SaveNewPlayer.service';
import { GetPlayerByMatriculaService } from './GetPlayerByMatricula.service';
import { JogadorDTO } from '../dtos/JogadorDTO';

describe('GetPlayerByMatriculaService', () => {
  let saveNewPlayerService: SaveNewPlayerService;
  let getPlayerByMatriculaService: GetPlayerByMatriculaService;
  let playerRepository: FakePlayerRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SaveNewPlayerService,
        GetPlayerByMatriculaService,
        {
          provide: getRepositoryToken(Jogador),
          useClass: FakePlayerRepository,
        },
      ],
    }).compile();

    saveNewPlayerService = await module.resolve(SaveNewPlayerService);
    getPlayerByMatriculaService = await module.resolve(
      GetPlayerByMatriculaService,
    );
    playerRepository = await module.resolve(getRepositoryToken(Jogador));
  });

  it('deve retornar erro por falta de matricula', async () => {
    const matricula = '';

    const result = await getPlayerByMatriculaService.execute(matricula);

    expect(result).toBeInstanceOf(AppError);
  });

  it('deve retornar o usuario cadastrado', async () => {
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

    const matricula = 'teste1';

    const result = await getPlayerByMatriculaService.execute(matricula);

    expect(result).toHaveProperty('matricula', 'TESTE1');
  });

  it('deve retornar apenas um usuario cadastrado', async () => {
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

    const data2: JogadorDTO = {
      administrador: false,
      uorEquipe: 1234,
      nomeCargo: 'teste2',
      matriculaGerente: 'teste2',
      codCargo: 1234,
      prefixo: 1234,
      nome: 'teste2',
      matricula: 'teste2',
    };

    await saveNewPlayerService.execute(data);
    await saveNewPlayerService.execute(data2);

    const matricula = 'teste1';

    const result = await getPlayerByMatriculaService.execute(matricula);

    expect(result).toHaveProperty('matricula', 'TESTE1');
  });
});
