import { test, expect } from '@playwright/test';
import { MetasService } from '../../services/metas.service';
import metaValida from '../../fixtures/metas/meta-valida.json';

test.describe('DELETE /metas', () => {
  let metasService;
  let metaCriada;

  test.beforeEach(async ({ request }) => {
    metasService = new MetasService(request);

    const response = await metasService.criar(metaValida);
    metaCriada = await response.json();
  });

  test('deve remover meta existente @smoke', async () => {
    const response = await metasService.remover(metaCriada.id);

    expect(response.status()).toBe(204);
  });

  test('não deve remover meta inexistente @regression', async () => {
    const response = await metasService.remover(999999);

    expect(response.status()).toBe(404);
  });
});