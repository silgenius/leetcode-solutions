/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let x = digits.length - 1
    const res = []
    rem = 1
    while (x >= 0) {
        const y = digits[x]
        if (y + rem == 10) {
            rem = 1;
            res.push(0)
        } else {
            res.push(y + rem)
            rem = 0
        }
        x--
    }
    if (rem) res.push(rem)

    return res.reverse()
};

const digits = [1,2,3]
plusOne(digits)