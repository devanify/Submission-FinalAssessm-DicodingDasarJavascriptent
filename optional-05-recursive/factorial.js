function factorial(n) {
  if (n === 0 || n === 1) {
    return 1; // Basis rekursi
  }
  return n * factorial(n - 1); // Rekursi
}

// Jangan hapus kode di bawah ini!
export default factorial;
