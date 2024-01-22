// fizzbuzz.test.js

const fizzBuzz = require('../fizzBuzz');

// Prueba para un número divisible por 3
test('Número divisible por 3 retorna Fizz', () => {
  expect(fizzBuzz(9)).toBe('Fizz');
});

// Prueba para un número divisible por 5
test('Número divisible por 5 retorna Buzz', () => {
  expect(fizzBuzz(10)).toBe('Buzz');
});

// Prueba para un número divisible por 3 y 5
test('Número divisible por 3 y 5 retorna FizzBuzz', () => {
  expect(fizzBuzz(15)).toBe('FizzBuzz');
});

// Prueba para un número no divisible por 3 ni 5
test('Número no divisible por 3 ni 5 retorna el número original', () => {
  expect(fizzBuzz(7)).toBe(7);
});