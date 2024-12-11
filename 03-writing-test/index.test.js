import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';  // Mengimpor fungsi sum dari index.js

// Pengujian untuk fungsi sum
test('sum should correctly add two numbers', () => {
  // Kasus uji: penjumlahan dua angka positif
  assert.strictEqual(sum(2, 3), 5);

  // Kasus uji: penjumlahan dengan angka negatif
  assert.strictEqual(sum(-2, 3), 1);

  // Kasus uji: penjumlahan dua angka negatif
  assert.strictEqual(sum(-2, -3), -5);

  // Kasus uji: penjumlahan dengan nol
  assert.strictEqual(sum(0, 3), 3);
  assert.strictEqual(sum(3, 0), 3);
});
