import { describe, it, expect } from 'vitest';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

describe('Test Suite 1', () => {
  it('test 1.1', async ({ task }) => {
    console.log('Task concurrency:', task.concurrent);
    console.log('Starting test 1.1 - will wait 4 seconds');
    await sleep(4000);
    console.log('Finishing test 1.1');
    expect(1 + 1).toBe(2);
  });

  it('test 1.2', async () => {
    console.log('Starting test 1.2 - will wait 3 seconds');
    await sleep(3000);
    console.log('Finishing test 1.2');
    expect(2 + 2).toBe(4);
  });

  it('test 1.3', async () => {
    console.log('Starting test 1.3 - will wait 1 second');
    await sleep(1000);
    console.log('Finishing test 1.3');
    expect(3 + 3).toBe(6);
  });
});
