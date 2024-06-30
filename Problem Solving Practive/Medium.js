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


// Problem   2
/*
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

console.log(setZeroes([[1, 1, 1], [1, 0, 1], [1, 1, 1]]))*/

/*

var addTwoNumbers = function(l1, l2) {
    let ans = parseInt(l1.reverse().join('')) + parseInt(l2.reverse().join(''))
    let a = ans.toString()
    let arr = []
    for ( i of a) {
        arr.push(parseInt(i))
    }
    return arr.reverse()
};
console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]))*/



var findCenter = function (arr) {
    let ans = 0
    let map = {}
    let frequencyMap = {};

    // Iterate over each row of the array
    for (let row of arr) {
        // Iterate over each element in the row
        for (let num of row) {
            if (frequencyMap[num]) {
                // If the number is already in the map, increment its count
                frequencyMap[num]++;
            } else {
                // If the number is not in the map, initialize its count to 1
                frequencyMap[num] = 1;
            }
            if (frequencyMap[num] > ans) {
                ans = frequencyMap[num];
                ans = num;
            }
        }
    }
    return ans
}
console.log(findCenter([[1, 2], [2, 3], [4, 2]]))