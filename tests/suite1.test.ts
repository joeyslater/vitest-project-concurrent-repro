import { describe, it, expect } from 'vitest';

describe('Test Suite 1', () => {
  it('test 1.1', ({ task }) => {
    console.log('Task concurrency:', task.concurrent);
    console.log('Running test 1.1');
    expect(1 + 1).toBe(2);
  });

  it('test 1.2', () => {
    console.log('Running test 1.2');
    expect(2 + 2).toBe(4);
  });

  it('test 1.3', () => {
    console.log('Running test 1.3');
    expect(3 + 3).toBe(6);
  });
});
