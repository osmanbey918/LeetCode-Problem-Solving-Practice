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


// var finalString = function(s) {
//     let res = ''
//     let r = ''
//     for(let ss of s){
//        // r = res
//         if(ss == 'i'){
//             r = res.split('').reverse().join('')
//             res = r
//             continue;
//         }
//         res += ss
//     }
//     return res
// };
// console.log(finalString("string"));


// var prisonAfterNDays = function (cells, n) {
//     for (let i = 0; i < n; i++) {
//         for (let j = 1; j < cells.length - 1; j++) {
//             if (cells[i + 1] == cells[i - 1]) {
//                 cells[i] = 1
//             }
//         }
//     }
//     return cells
// };
// console.log(prisonAfterNDays([0, 1, 0, 1, 1, 0, 0, 1], 7));


// console.log(Math.max(3,4,5,6,8,9,6,4,3));

// var maxDistance = function (arrays) {

//     let minarr = []
//     let maxarr = []
//     for (let i = 0; i < arrays.length; i++) {
//         minarr.push(arrays[i][0])
//         maxarr.push(arrays[i][arrays[i].length - 1])
//     }
//     let distances = []
//     for (let i = 0; i < minarr.length; i++) {
//         // Iterate over each element in the second array
//         for (let j = 0; j < maxarr.length; j++) {
//           // Skip if indices are the same
//           if (i !== j) {
//             // Calculate the distance between minarr[i] and maxarr[j]
//             const distance = Math.abs(minarr[i] - maxarr[j]);

//             // Push the distance to the distances array
//             distances.push(distance);
//           }
//         }
//     }
//     return Math.max(...distances);

// };
// console.log(maxDistance([[1, 2, 3], [4, 5], [1, 2, 3]]));



// /**
//  * @param {number} n
//  * @return {number}
//  */
// var nthUglyNumber = function (n) {
//     let ugly = new Array(n);
//     ugly[0] = 1;
//     let i2 = 0, i3 = 0, i5 = 0;
//     let next2 = 2, next3 = 3, next5 = 5;

//     for (let i = 1; i < n; i++) {
//         let nextUgly = Math.min(next2, Math.min(next3, next5));
//         ugly[i] = nextUgly;

//         if (nextUgly === next2) {
//             i2++;
//             next2 = ugly[i2] * 2;
//         }
//         if (nextUgly === next3) {
//             i3++;
//             next3 = ugly[i3] * 3;
//         }
//         if (nextUgly === next5) {
//             i5++;
//             next5 = ugly[i5] * 5;
//         }
//     }

//     return ugly[n - 1];
// };



// function fn(num) {
//     return num + 1
// }
// var minSteps = function (n) {
//     let r = 1;
//     let o = 0;
//     let fn = num => num + num;
//     if (n > 1) {
//         while (r < n) {
//             r = fn(r)
//             o++
//         }
//     }
//     return o
// };
// console.log(minSteps(3));


// let add = num => num + num;
// let sq = num => num * num;
// let r = 0
// while (r <  100) {
//     if (r === 0) r++
//     else if (r < 50) r = add(r);
//     else r = sq(r)
// }
// console.log(r);


var longestIdealString = function (s, k) {
    let ideal = '';
    ideal += s[0]; 
    for (let i = 0; i < s.length; i++) {
        let added = false;
        for (let j = i + 1; j < s.length; j++) {
            if (Math.abs(s.charCodeAt(i) - s.charCodeAt(j)) <= k) {
                ideal += s[j];
                i = j - 1; 
                added = true; 
                break; 
            }
        }
        
        if (!added) break;
    }
    
    return ideal;
};

console.log(longestIdealString("pvjcci", 4)); // Example output

