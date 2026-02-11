import { test, expect } from '@playwright/test';
import { MetasService } from '../../../services/metas.service';


test.describe('POST /atribuicoes @regression', () => {

test('Não permitir atribuir menos de 3 metas ao funcionário @smoke', async ({ request }) => {
  const response = await request.post('/atribuicoes', {
    data: {
      funcionarioId: 1,
      metas: [1, 2] // menos de 3
    }
  });

  expect(response.status()).toBe(400);
});

test('Não permitir atribuir meta de função diferente', async ({ request }) => {
  const response = await request.post('/atribuicoes', {
    data: {
      funcionarioId: 2, // marketing
      metas: [10]       // meta finance
    }
  });

  expect(response.status()).toBe(400);
});
});