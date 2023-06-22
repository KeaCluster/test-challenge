function fizzBuzz(num){
    if(num%3===0 && num%5===0){
        return 'FizzBuzz';
    } else if(num%3===0){
        return 'Fizz';
    } else if(num%5===0){
        return 'Buzz';
    } else{
        return num + 'no es divisible entre 3 ni entre 5';
    }
}
module.exports = fizzBuzz;