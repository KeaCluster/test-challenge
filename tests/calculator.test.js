const { default: expect } = require('expect');

const calculator = require('../calculator');

test('adds a + b', () => {
    expect(calculator.sum(3,4)).toBe(7);
})

test('substracts a - b', () => {
    expect(calculator.substract(5,3)).toBe(2);
})

test('multiplies a * b', () => {
    expect(calculator.multiply(10,3)).toBe(30);
})

test('divides a / b', () => {
    expect(calculator.divide(6,2)).toBe(3);
})

test('Raises to power a ^ b', () => {
    expect(calculator.power(2,4)).toBe(16);
})

