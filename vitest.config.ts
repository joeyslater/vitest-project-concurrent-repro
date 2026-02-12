import { defineConfig, defineProject } from 'vitest/config';

export default defineConfig({
  test: {
    name: 'default',
    // Base configuration
    globals: true,
    environment: 'node',
    // Note: sequence.concurrent is NOT set in base config
    reporters: ['verbose'],
    sequence: {
      concurrent: false, // Default to non-concurrent execution
    },
    projects: [
      {
        extends: true,
        ...defineProject({
          test: {
            name: 'suite-1',
            include: ['tests/suite1.test.ts'],
            exclude: ['tests/suite2.test.ts', 'tests/suite3.test.ts'],
            sequence: {
              concurrent: true, // Enable concurrency for this suite
            },
          },
        }),
      },
            {
        extends: true,
        ...defineProject({
          test: {
            name: 'other',
            include: ['tests/*.test.ts'],
            exclude: ['tests/suite1.test.ts'],
            sequence: {
              concurrent: true, // Enable concurrency for this suite
            },
          },
        }),
      },
    ],
  },
});
