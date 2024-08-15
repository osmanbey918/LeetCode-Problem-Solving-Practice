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

/*

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
console.log(findCenter([[1, 2], [2, 3], [4, 2]]))*/




/*
var maxSubArray = function (nums) {
    if(nums.length == 1) return nums[0]
    let max = 0
    for (let start = 0; start < nums.length; start++) {
        let result = [];
        for (let end = start + 1; end <= nums.length; end++) {
            result.push(nums.slice(start, end));
            const sum = result.reduce((total, num) => total + num, 0);
            max = Math.max(sum, max)
        }
    }
    return max;
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSubArray([5, 4, -1, 7, 8]))
console.log(maxSubArray([-1]))
console.log(maxSubArray([-1, -2]))
*/


// var averageWaitingTime = function (customers) {
//     let aver = 0
//     let fc = customers[0][0]
//     for (let n of customers) {
//         if (fc < n[0]) {
//             fc = n[0] + n[1]
//             aver += fc - n[0]
//             continue
//         }
//         fc += n[1]
//         aver += fc - n[0]
//     }
//     return customers.length > 1? aver / customers.length : 0
// };
// console.log(averageWaitingTime([[]]));


// var sumOfSquares = function(nums) {
//    // nums.unshift(10);
//     let newarr = [0, ...nums];
//     let l = newarr.length;
//     let arr = []
//     let c = 0
//     for(let i = 1; i < l; i++){
//         if (l % i === 0) {
//             c++
//         }
//         c++
//     }
//     return c
// };
// console.log(sumOfSquares([2,7,1,19,18,3]));


var finalString = function(s) {
    let res = ''
    let r = ''
    for(let ss of s){
       // r = res
        if(ss == 'i'){
            r = res.split('').reverse().join('')
            res = r
            continue;
        }
        res += ss
    }
    return res
};
console.log(finalString("string"));


var prisonAfterNDays = function (cells, n) {
    for (let i = 0; i < n; i++) {
        for (let j = 1; j < cells.length - 1; j++) {
            if (cells[i + 1] == cells[i - 1]) {
                cells[i] = 1
            }
        }
    }
    return cells
};
console.log(prisonAfterNDays([0, 1, 0, 1, 1, 0, 0, 1], 7));
