const numbers = [2, 4, 8, 10, 12];

function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = doubleItOld(number);
        output.push(doubled);
    }
    return output;
}
function doubleItOld(number) {
    return number * 2;
}
const doubleIt = num => num * 2
const result = getDoubles(numbers);
console.log(result);

const makeDouble = numbers.map(doubleIt);
console.log(makeDouble);
//Array map to do one line loop magic part-1
const makeDoubleDirect = numbers.map(num => num * 2);
console.log(makeDoubleDirect);
//Array map to do one line loop magic part-2
const makeDouble2 = numbers.map(x => x * 2);
console.log(makeDouble2);
// Array map to do one line loop magic part-3 most powerful use is

const fiveTimes = [1, 2, 3, 4, 5, 6].map(x => x * 5);
console.log(fiveTimes);