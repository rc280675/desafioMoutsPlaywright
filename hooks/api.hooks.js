import { test } from '@playwright/test';

test.beforeEach(async ({ request }) => {
  console.log('Iniciando teste de API');
});

test.afterEach(async ({}, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    console.log(`❌ Falha no teste: ${testInfo.title}`);
  }
});