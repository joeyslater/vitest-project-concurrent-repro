import { describe, it, expect } from 'vitest';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

describe('Test Suite 2', () => {
  it('test 2.1', async ({ task }) => {
    console.log('Task concurrency:', task.concurrent);
    console.log('Starting test 2.1 - will wait 4 seconds');
    await sleep(4000);
    console.log('Finishing test 2.1');
    expect(10 + 10).toBe(20);
  });

  it('test 2.2', async () => {
    console.log('Starting test 2.2 - will wait 3 seconds');
    await sleep(3000);
    console.log('Finishing test 2.2');
    expect(20 + 20).toBe(40);
  });

  it('test 2.3', async () => {
    console.log('Starting test 2.3 - will wait 1 second');
    await sleep(1000);
    console.log('Finishing test 2.3');
    expect(30 + 30).toBe(60);
  });
});
