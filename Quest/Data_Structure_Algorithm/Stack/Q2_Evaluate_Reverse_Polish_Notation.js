/**
 * Evaluates an arithmetic expression written in Reverse Polish Notation (RPN).
 *
 * Reverse Polish Notation places operators after their operands, eliminating
 * the need for parentheses. The expression is evaluated from left to right
 * using a stack-based approach.
 *
 * Rules:
 * - Valid operators are "+", "-", "*", and "/".
 * - Operands are integers or results of previous operations.
 * - Each operator applies to the two most recent operands.
 * - Division between two integers truncates toward zero.
 * - There is no division by zero.
 * - The input is guaranteed to be a valid RPN expression.
 * - All intermediate and final results fit within a 32-bit signed integer.
 *
 * Example:
 *   Input: ["2", "1", "+", "3", "*"]
 *   Output: 9
 *
 *   Explanation:
 *   (2 + 1) * 3 = 9
 *
 * Time Complexity: O(n), where n is the number of tokens.
 * Space Complexity: O(n), due to stack usage.
 *
 * @param {string[]} tokens - The RPN expression tokens.
 * @return {number} The evaluated result.
 */
var evalRPN = function (tokens) {
  const stack = [];
  const getOperator = (operator) => (a, b) => {
    switch (operator) {
      case "*":
        return a * b;
      case "+":
        return a + b;
      case "/":
        return (a / b) | 0;
      case "-":
        return a - b;
    }
  };
  for (let token of tokens) {
    if (token >= -200 && token <= 200) {
      stack.push(+token);
    } else {
      const a = stack.pop();
      const b = stack.pop();
      stack.push(getOperator(token)(b, a));
    }
  }
  return stack[0];
};
