const fizzBuzz = require('../fizzBuzz');

test('If the number is divisible by 3, return "Fizz"', ()=>{
    expect(fizzBuzz(9)).toBe('Fizz');
})

test('If the number is divisible by 5, return "Buzz"', ()=>{
    expect(fizzBuzz(25)).toBe('Buzz');
})

test('If the number is divisible by 3 and 5, return "FizzBuzz"', ()=>{
    expect(fizzBuzz(30)).toBe('FizzBuzz');
});

