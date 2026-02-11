import { test, expect } from '@playwright/test';
import { MetasService } from '../../services/metas.service';
import metaValida from '../../fixtures/metas/meta-valida.json';
import metaInvalida from '../../fixtures/metas/meta-invalida.json';
import { MetaSchema } from '../../utils/schema/metas.schema';


test.describe('POST /metas', () => {
  let metasService;
  let metaCriada;

  test.beforeEach(async ({ request }) => {
    metasService = new MetasService(request);
  });

  test('deve criar meta válida @smoke', async () => {
    const response = await metasService.criar(metaValida);
    metaCriada = await response.json();

    expect(response.status()).toBe(201);
    expect(metaCriada).toHaveProperty('id');
  });

  test('não deve criar meta inválida @regression', async () => {
    const response = await metasService.criar({});

    expect(response.status()).toBe(400);
  });

  test.afterEach(async () => {
    if (metaCriada?.id) {
      await metasService.remover(metaCriada.id);
    }
  });
});