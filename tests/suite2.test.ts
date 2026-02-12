import { describe, it, expect } from 'vitest';

describe('Test Suite 2', () => {
  it('test 2.1', ({ task }) => {
    console.log('Task concurrency:', task.concurrent);
    console.log('Running test 2.1');
    expect(10 + 10).toBe(20);
  });

  it('test 2.2', () => {
    console.log('Running test 2.2');
    expect(20 + 20).toBe(40);
  });

  it('test 2.3', () => {
    console.log('Running test 2.3');
    expect(30 + 30).toBe(60);
  });
});
