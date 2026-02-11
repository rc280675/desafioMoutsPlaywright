import { test, expect } from '@playwright/test';
import { AtingimentoSchema } from '../../../utils/schema/atingimento.schema';
                                   



test.describe('POST /atingimentos @regression', () => {

test('Definir atingimento válido entre 0% e 100%', async ({ request }) => {
  const response = await request.post('/atingimentos', {
    data: {
      funcionarioId: 1,
      metas: [
        { metaId: 10, percentual: 80 },
        { metaId: 11, percentual: 90 },
        { metaId: 12, percentual: 100 }
      ]
    }
  });

  const body = await response.json();

  expect(response.status()).toBe(200);
  expect(body.atingimentoTotal).toBeGreaterThanOrEqual(0);
  expect(body.atingimentoTotal).toBeLessThanOrEqual(100);
});

test('Não permitir atingimento menor que 0%', async ({ request }) => {
  const response = await request.post('/atingimentos', {
    data: {
      funcionarioId: 1,
      metas: [
        { metaId: 10, percentual: -10 }
      ]
    }
  });

  expect(response.status()).toBe(400);
});

test('Não permitir atingimento maior que 100%', async ({ request }) => {
  const response = await request.post('/atingimentos', {
    data: {
      funcionarioId: 1,
      metas: [
        { metaId: 10, percentual: 120 }
      ]
    }
  });

  expect(response.status()).toBe(400);
});

test('Não permitir definir atingimento para meta não atribuída', async ({ request }) => {
  const response = await request.post('/atingimentos', {
    data: {
      funcionarioId: 2,
      metas: [
        { metaId: 99, percentual: 50 } // meta não atribuída
      ]
    }
  });

  expect(response.status()).toBe(400);
});

test('Calcular corretamente o atingimento total das metas', async ({ request }) => {
  const response = await request.post('/atingimentos', {
    data: {
      funcionarioId: 3,
      metas: [
        { metaId: 20, percentual: 50 },
        { metaId: 21, percentual: 100 }
      ]
    }
  });

  const body = await response.json();

  // (50 + 100) / 2 = 75
  expect(body.atingimentoTotal).toBe(75);
});
  });