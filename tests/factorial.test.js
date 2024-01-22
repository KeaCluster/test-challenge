// factorial.test.js

const calcularFactorial = require('../factorial');

// Prueba para el caso base: factorial de 0 debe ser 1
test('Factorial de 0 es 1', () => {
  expect(calcularFactorial(0)).toBe(1);
});

// Prueba para el caso base: factorial de 1 debe ser 1
test('Factorial de 1 es 1', () => {
  expect(calcularFactorial(1)).toBe(1);
});

// Prueba para el factorial de un número mayor
test('Factorial de 5 es 120', () => {
  expect(calcularFactorial(5)).toBe(120);
});

// Prueba para el factorial de un número mayor
test('Factorial de 10 es 3628800', () => {
  expect(calcularFactorial(10)).toBe(3628800);
});
