import { test, expect } from '@playwright/test';
import { MetasService } from '../../services/metas.service';
import metaValida from '../../fixtures/metas/meta-valida.json';


test.describe('PUT /metas  @regression', () => {
  let metasService;
  let metaCriada;

  test.beforeEach(async ({ request }) => {
    metasService = new MetasService(request);

    const response = await metasService.criar(metaValida);
    metaCriada = await response.json();
  });


  test('Editar meta existente @smoke', async ({ request }) => {
    const metasService = new MetasService(request);

    const criar = await metasService.criar(metaValida);
    const meta = await criar.json();

    const response = await metasService.editar(meta.id, {
      nome: 'Meta Atualizada'
    });

    expect(response.status()).toBe(200);
  });

  test('Não deve editar meta inexistente', async ({ request }) => {
    const metasService = new MetasService(request);

    const response = await metasService.editar(999999, {
      nome: 'Meta Fake'
    });

    expect(response.status()).toBe(404);
  });

});