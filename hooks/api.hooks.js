import { test } from '@playwright/test';

test.beforeEach(async ({ request }) => {
  console.log('Iniciando teste de API');
});

test.afterEach(async ({}, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    await testInfo.attach('failure-log', {
      body: `Teste falhou: ${testInfo.title}`,
      contentType: 'text/plain'
    });
  }
});