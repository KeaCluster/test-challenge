// factorial.js

/**
 * Función para calcular el factorial de un número usando recursividad.
 * @param {number} n - El número para el cual se calculará el factorial.
 * @returns {number} - El factorial de n.
 */
function calcularFactorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * calcularFactorial(n - 1);
    }
  }
  
  module.exports = calcularFactorial;