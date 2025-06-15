// See https://vitest.dev/config/
import {defineConfig} from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/**/*.test.mts'],
    exclude: ['src/**/*.integration.test.mts'],
    coverage: {
      provider: 'v8',
      exclude: ['src/index.mts'],
    },
  },
});
