// @ts-check

/**
 * @typedef {import("../generated/api").RunInput} RunInput
 * @typedef {import("../generated/api").FunctionRunResult} FunctionRunResult
 */

/**
 * @param {RunInput} input
 * @returns {FunctionRunResult}
 */
export function run(input) {
  const totalQuantity = input.cart.lines.reduce((sum, { quantity }) => sum + quantity, 0);

  const errors = [];
  
  if (totalQuantity > 10) {
    errors.push({
      localizedMessage: "Orders with a total purchase quantity greater than 10 cannot be checked out.",
      target: "cart",
    });
  }

  return {
    errors
  };
}
