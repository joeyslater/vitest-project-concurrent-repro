# Vitest `sequence.concurrent` Project Config Reproduction

This repository reproduces an issue where `sequence.concurrent` setting does not get passed from the project configuration to Vitest.

## Setup

- **Node.js**: v24.13.0 (latest stable)
- **Yarn**: 4.12.0
- **TypeScript**: ^5.7.3
- **Vitest**: ^2.1.8

## Structure

```
.
├── vitest.config.ts          # Base configuration (no sequence.concurrent)
├── vitest.project.config.ts  # Project config with sequence.concurrent: true
├── tests/
│   ├── suite1.test.ts
│   ├── suite2.test.ts
│   └── suite3.test.ts
└── package.json
```

## Issue Description

The `vitest.project.config.ts` file extends the base configuration and sets `sequence.concurrent: true`:

```typescript
export default mergeConfig(
  baseConfig,
  defineConfig({
    test: {
      sequence: {
        concurrent: true,
      },
    },
  })
);
```

### Expected Behavior

When running tests with the project configuration, test files should execute concurrently because `sequence.concurrent` is set to `true` in the project config.

### Actual Behavior

The `sequence.concurrent` setting from the project configuration is not being applied. Tests run sequentially instead of concurrently.

## Reproduction Steps

1. Install dependencies:
   ```bash
   yarn install
   ```

2. Run tests with base config (sequential execution expected):
   ```bash
   yarn test --config=vitest.config.ts
   ```

3. Run tests with project config (concurrent execution expected):
   ```bash
   yarn test --config=vitest.project.config.ts
   ```

4. Observe that both commands run tests sequentially, even though the project config explicitly sets `sequence.concurrent: true`.

## How to Verify Concurrent Execution

When `sequence.concurrent` is working correctly:
- Multiple test files should run in parallel
- Console logs from different test files should be interleaved
- Total execution time should be shorter

When running sequentially:
- Test files run one after another
- Console logs appear in order by file
- Total execution time is longer

## Additional Notes

The project uses `mergeConfig` from Vitest to properly merge the base and project configurations, but the `sequence.concurrent` setting is not being honored in the merged result.
