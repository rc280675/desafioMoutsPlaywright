import { test, expect } from '@playwright/test';
import { AtingimentoService } from '../../services/atingimento.service';
import { buildAtingimentoPayload } from '../../builders/atingimento.builder';
import { AtingimentoSchema } from '../../../utils/schema/atingimento.schema';

test.describe('POST /atingimentos @regression', () => {

  let atingimentoService;

  test.beforeEach(async ({ request }) => {
    atingimentoService = new AtingimentoService(request);
  });

  test('Deve definir atingimento válido entre 0% e 100%', async () => {

    const payload = buildAtingimentoPayload(1, [
      { metaId: 10, percentual: 80 },
      { metaId: 11, percentual: 90 },
      { metaId: 12, percentual: 100 }
    ]);

    const response = await atingimentoService.definir(payload);
    const body = await response.json();

    expect(response.status()).toBe(200);

    // Validação de contrato
    AtingimentoSchema.parse(body);

    expect(body.atingimentoTotal).toBeGreaterThanOrEqual(0);
    expect(body.atingimentoTotal).toBeLessThanOrEqual(100);
  });

  test('Não deve permitir percentual menor que 0%', async () => {

    const payload = buildAtingimentoPayload(1, [
      { metaId: 10, percentual: -10 }
    ]);

    const response = await atingimentoService.definir(payload);

    expect(response.status()).toBe(400);
  });

  test('Não deve permitir percentual maior que 100%', async () => {

    const payload = buildAtingimentoPayload(1, [
      { metaId: 10, percentual: 120 }
    ]);

    const response = await atingimentoService.definir(payload);

    expect(response.status()).toBe(400);
  });

  test('Não deve permitir meta não atribuída ao funcionário', async () => {

    const payload = buildAtingimentoPayload(2, [
      { metaId: 9999, percentual: 50 }
    ]);

    const response = await atingimentoService.definir(payload);

    expect(response.status()).toBe(400);
  });

  test('Deve calcular corretamente o atingimento total', async () => {

    const payload = buildAtingimentoPayload(3, [
      { metaId: 20, percentual: 50 },
      { metaId: 21, percentual: 100 }
    ]);

    const response = await atingimentoService.definir(payload);
    const body = await response.json();

    expect(response.status()).toBe(200);

    // (50 + 100) / 2 = 75
    expect(body.atingimentoTotal).toBe(75);
  });

});
