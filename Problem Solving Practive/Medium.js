// Problem 1

/*
var numPairsDivisibleBy60 = function (time) {
    let count = 0
    for (let i = 0; i < time.length; i++) {
        for (let j = i + 1; j < time.length; j++) {
            if ((time[i] + time[j]) % 60 === 0){
                count++
            }
            
        }

    }
    return count
};
console.log(numPairsDivisibleBy60([30, 20, 150, 100, 40]))
console.log(20 % 60)
*/

var setZeroes = function(matrix) {
    let rows = new Set();
    let cols = new Set();

    // First pass to find all zeros
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                rows.add(i);
                cols.add(j);
            }
        }
    }

    // Second pass to set zeros
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (rows.has(i) || cols.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }

    return matrix;
};

console.log(setZeroes([[1, 1, 1], [1, 0, 1], [1, 1, 1]]))