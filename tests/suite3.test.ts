import { describe, it, expect } from 'vitest';

describe('Test Suite 3', { concurrent: true }, () => {
  it('test 3.1', ({ task }) => {
    console.log('Task concurrency:', task.concurrent);
    console.log('Running test 3.1');
    expect(100 + 100).toBe(200);
  });

  it('test 3.2', () => {
    console.log('Running test 3.2');
    expect(200 + 200).toBe(400);
  });

  it('test 3.3', () => {
    console.log('Running test 3.3');
    expect(300 + 300).toBe(600);
  });
});
