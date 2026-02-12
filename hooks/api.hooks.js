import { test } from '@playwright/test';

test.beforeEach(async ({ request }) => {
  console.log('Iniciando teste de API');
});

test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    await page.screenshot({
      path: `screenshots/${testInfo.title}.png`
    });
  }
});