/**
 * 
 * 66. Plus One
 * You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

 

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
Example 3:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
 

Constraints:

1 <= digits.length <= 100
0 <= digits[i] <= 9
digits does not contain any leading 0's.
 */

digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]
// digits = [4, 3, 2, 1]
// digits = [9]
var plusOne = function (digits) {
    // const string = digits.join("")
    // console.log(`ini string ` + string)
    // if (string.length < 16) {
    //     const nb = Number(string);
    //     const sums = nb + 1;
    //     console.log(sums)
    //     const result = sums.toString().split("").map(Number);
    //     return result
    // } else {
    //     const nb = BigInt(string)
    //     const sums = nb + 1n;
    //     const fix = sums.toString();
    //     console.log(sums)
    //     const result = fix.split("").map(Number);
    //     return result
    // }

    if (digits.length < 16) {
        const process = Number(digits.join(""))
        const sums = process + 1;
        const result = sums.toString().split("").map(Number);
        return result
    }
    const process = BigInt(digits.join(""))
    const sums = process + 1n;
    const result = sums.toString().split("").map(Number)
    return result
};
console.log(plusOne(digits))