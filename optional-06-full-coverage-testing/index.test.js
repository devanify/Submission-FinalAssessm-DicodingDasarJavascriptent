import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

// Pengujian skenario lengkap untuk fungsi `sum`
test('sum should return correct sum for positive numbers', () => {
  assert.strictEqual(sum(2, 3), 5, '2 + 3 should equal 5');
});

test('sum should return 0 if any parameter is not a number', () => {
  assert.strictEqual(sum('2', 3), 0, "'2' + 3 should return 0");
  assert.strictEqual(sum(2, '3'), 0, "2 + '3' should return 0");
  assert.strictEqual(sum(null, 3), 0, "null + 3 should return 0");
  assert.strictEqual(sum(2, undefined), 0, "2 + undefined should return 0");
});

test('sum should return 0 if any parameter is a negative number', () => {
  assert.strictEqual(sum(-1, 3), 0, '-1 + 3 should return 0');
  assert.strictEqual(sum(2, -3), 0, '2 + -3 should return 0');
  assert.strictEqual(sum(-2, -3), 0, '-2 + -3 should return 0');
});

test('sum should handle edge cases correctly', () => {
  assert.strictEqual(sum(0, 0), 0, '0 + 0 should equal 0');
  assert.strictEqual(sum(0, 5), 5, '0 + 5 should equal 5');
  assert.strictEqual(sum(5, 0), 5, '5 + 0 should equal 5');
});
