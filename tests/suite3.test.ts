import { describe, it, expect } from 'vitest';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

describe('Test Suite 3', { concurrent: true }, () => {
  it('test 3.1', async ({ task }) => {
    console.log('Task concurrency:', task.concurrent);
    console.log('Starting test 3.1 - will wait 4 seconds');
    await sleep(4000);
    console.log('Finishing test 3.1');
    expect(100 + 100).toBe(200);
  });

  it('test 3.2', async () => {
    console.log('Starting test 3.2 - will wait 3 seconds');
    await sleep(3000);
    console.log('Finishing test 3.2');
    expect(200 + 200).toBe(400);
  });

  it('test 3.3', async () => {
    console.log('Starting test 3.3 - will wait 1 second');
    await sleep(1000);
    console.log('Finishing test 3.3');
    expect(300 + 300).toBe(600);
  });
});
