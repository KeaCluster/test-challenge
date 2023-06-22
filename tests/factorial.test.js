const factorial =require('../factorial');

test('Calculate the factorial of a number using recursion', ()=>{
    expect(factorial(5)).toBe(120);
})