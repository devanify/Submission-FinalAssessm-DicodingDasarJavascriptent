import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        ecmaVersion: 2020,    // Mendukung fitur ES6 dan lebih baru
        sourceType: 'module', // Menyediakan dukungan untuk `import/export`
      },
    },
  },
  pluginJs.configs.recommended,
  {
    rules: {
      // Menambahkan aturan gaya penulisan
      'semi': ['error', 'always'], // Wajib ada semicolon di akhir setiap statement
      'indent': ['error', 2],       // Indentasi harus 2 spasi
      'prefer-const': 'error',      // Gunakan `const` jika variabel tidak diubah
      'object-curly-spacing': ['error', 'always'], // Spasi antara tanda kurung kurawal dan nama properti objek
    },
  },
];
