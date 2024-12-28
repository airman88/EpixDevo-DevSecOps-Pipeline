function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }
  
  function calculator(operation, a, b) {
    switch (operation) {
      case 'add':
        return add(a, b);
      case 'subtract':
        return subtract(a, b);
      case 'multiply':
        return multiply(a, b);
      case 'divide':
        return divide(a, b);
      default:
        throw new Error("Unknown operation");
    }
  }
  
  // Example usage:
  console.log(calculator('add', 3, 4));        // Output: 7
  console.log(calculator('subtract', 10, 4));  // Output: 6
  console.log(calculator('multiply', 3, 4));   // Output: 12
  console.log(calculator('divide', 12, 4));    // Output: 3