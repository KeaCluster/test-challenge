# Jest Testing Workshop

<!--toc:start-->

- [About](#about)
- [Requirements](#requirements)
- [Project Structure](#project-structure)
  - [Files](#files)
- [Practical Tasks](#practical-tasks)
  - [API Call Simulation](#api-call-simulation)
  - [DNA String Validator](#dna-string-validator)
  - [Factorial Calculator](#factorial-calculator)

<!--toc:end-->

## About

This repository was made to help you improve your proficiency with Jest
through a hands-on workshop.
You'll tackle real-world coding challenges and learn to write comprehensive tests,
robust and reliable code.

## Requirements

- Node.js
- Jest
- Jest-related dependencies in the project
  - Check `package.json`
- Run to install locally after cloning:

```sh
npm install
```

## Project Structure

### Files

- `users.js` to implement functions that will be tested.
- `data.js` contains an array of user data.
- `index.js` is a file to be used in case you'd like to write custom functions.
- All test cases should be written inside `tests/` directory.

## Practical Tasks

### API Call Simulation

- Develop a function in `users.js` to simulate fetching user data.
  - The function should accept a user `ID`.
  - Return a promise that resolved user data. You can mock this inside tests.
  - You can include error handling for cases where the `ID` is invalid or unavailable.

### DNA String Validator

- Create a function to validate DNA strings as canonical DNA structure (e.g., `'CTAGGGTA'`).
  - Allow only canonical DNA bases `('C', 'T', 'A', 'G')`.
  - The function should be case-sensitive. Only accept uppercase bases.
  - Return empty string for invalid or empty inputs.
  - Return true if the string is a valid DNA sequence.

```js
isValidDNA("CTAG"); // should return true
isValidDNA("CTXG"); // should return false due to 'X'
isValidDNA("ctag"); // should return false due to lowercase
isValidDNA(""); // should return false for empty string
```

### Factorial Calculator

- Implement a function to calculate the factorial of a number using recursion.
  - Ensure it handles edge cases: negative numbers or non-integer inputs.

For each tasks, develop a suite of tests inside the `tests directory`.
Thoroughly validate functionality.
Include positive and negative test cases to cover various scenarios and edge cases.
This approach will ensure your functions behave as expected under different conditions
