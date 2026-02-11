import { test, expect } from '@playwright/test';
import { MetasService } from '../../services/metas.service';
import metaValida from '../../fixtures/metas/meta-valida.json';

test.describe('GET /metas', () => {
  let metasService;
  let metaCriada;

  test.beforeEach(async ({ request }) => {
    metasService = new MetasService(request);

    const response = await metasService.criar(metaValida);
    metaCriada = await response.json();
  });

  test('deve listar metas cadastradas @smoke', async () => {
    const response = await metasService.listar();
    const body = await response.json();

    expect(response.status()).toBe(200);
    expect(body.length).toBeGreaterThan(0);
  });

  test.afterEach(async () => {
    await metasService.remover(metaCriada.id);
  });
});