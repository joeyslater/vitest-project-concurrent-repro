# Vitest `sequence.concurrent` Project Config Reproduction

This repository reproduces an issue where `sequence.concurrent` setting does not get passed from the project configuration in Vitest.

## Setup

- **Node.js**: v24.13.0 (latest stable)
- **Yarn**: 4.12.0
- **TypeScript**: 5.9.3
- **Vitest**: 4.0.18
- **Biome**: 1.9.4 (for formatting and linting)

## Structure

```
.
├── vitest.config.ts          # Base config with projects
├── tests/
│   ├── suite1.test.ts        # Assigned to 'suite-1' project (concurrent: true)
│   ├── suite2.test.ts        # Assigned to 'other' project (concurrent: false)
│   └── suite3.test.ts        # Assigned to 'other' project (concurrent: false)
├── package.json
└── biome.json
```

## Issue Description

The `vitest.config.ts` file defines a base configuration with two projects:

1. **suite-1 project**: Includes only `suite1.test.ts` with `sequence.concurrent: true`
2. **other project**: Includes `suite2.test.ts` and `suite3.test.ts` with `sequence.concurrent: false`

```typescript
projects: [
  {
    extends: true,
    ...defineProject({
      test: {
        name: 'suite-1',
        include: ['tests/suite1.test.ts'],
        sequence: {
          concurrent: true, // Should enable concurrent execution
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
          concurrent: false,
        },
      },
    }),
  },
],
```

### Expected Behavior

When running `yarn test`, the `suite-1` project should execute its tests concurrently because `sequence.concurrent` is explicitly set to `true` in that project's configuration.

### Actual Behavior

The `sequence.concurrent: true` setting from the `suite-1` project configuration is not being applied. Tests in suite1 run sequentially instead of concurrently, ignoring the project-level configuration.

## Reproduction Steps

1. Install dependencies:
   ```bash
   yarn install
   ```

2. Run all tests:
   ```bash
   yarn test
   ```

3. Run only the suite-1 project (which should run concurrently):
   ```bash
   yarn vitest run --project suite-1
   ```

4. Observe that suite1 tests run sequentially even though `sequence.concurrent: true` is set for the `suite-1` project.

## How to Verify Concurrent Execution

When `sequence.concurrent` is working correctly:
- Multiple test files within the same suite should run in parallel
- Console logs from different test files should be interleaved
- Total execution time should be shorter

When running sequentially:
- Test files run one after another
- Console logs appear in order by file
- Total execution time is longer

## Additional Commands

- `yarn format` - Format code with Biome
- `yarn lint` - Lint and fix code with Biome
- `yarn check` - Run both formatting and linting
- `yarn test:verbose` - Run tests with verbose output

## Additional Notes

The project uses Vitest's native project configuration with `defineProject` and `extends: true` to inherit base settings. However, the `sequence.concurrent` setting defined at the project level is not being honored during test execution.
