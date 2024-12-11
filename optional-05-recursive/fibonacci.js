function fibonacci(n) {
  if (n === 0) {
    return [0]; // Basis rekursi pertama
  }
  if (n === 1) {
    return [0, 1]; // Basis rekursi kedua
  }
    
  const prevFibonacci = fibonacci(n - 1); // Rekursi
  const nextValue = prevFibonacci[prevFibonacci.length - 1] + prevFibonacci[prevFibonacci.length - 2];
  return [...prevFibonacci, nextValue]; // Menggabungkan hasil rekursi
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
