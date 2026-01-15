/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < prices.length) {
    j = i + 1;
    while (j < prices.length) {
      if (prices[j] <= prices[i]) {
        result[i] = prices[i] - prices[j];
        break;
      }
      j++;
    }
    result[i] = result[i] ?? prices[i];
    i++;
  }
  return result;
};
