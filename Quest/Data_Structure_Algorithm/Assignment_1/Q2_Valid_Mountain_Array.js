/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
    let x = 1;
    let peak = arr[0];

    // Finding the peak
    while (arr[x] !== undefined && arr[x] > peak) {
        peak = arr[x];
        x++;
    }

    if (arr[0] === peak || arr[arr.length - 1] === peak) return false

    while (arr[x] !== undefined) {
        if (arr[x] >= peak) return false;
        if (arr[x + 1] && arr[x] <= arr[x + 1]) return false;
        x++;
    }

    return true;
};

const digit = [5,4,1]
console.log(validMountainArray(digit))