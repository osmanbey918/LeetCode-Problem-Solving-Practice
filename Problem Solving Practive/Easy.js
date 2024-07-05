
/*
function zero(num) {
    let c = 0
    for (let i = 0; i < num.length; i++) {
        if(num[i] == 0){
            let temp = num[i]
        }

    }

return num
}
console.log(zero([0,1,2,3,0,2,3,40,12]))

function moveZeroes(nums) {
    let nonZeroIdx = 0; // Pointer to track the position to place non-zero elements
    
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            // Swap non-zero element with the position indicated by nonZeroIdx
            [nums[nonZeroIdx], nums[i]] = [nums[i], nums[nonZeroIdx]];
            nonZeroIdx++;
        }
    }
    
    return nums;
}
let nums = [0, 1, 0,0,0, 3, 12];
console.log(moveZeroes(nums)); // Output: [1, 3, 12, 0, 0]

function checkword(word) {
    const allUppercase = word === word.toUpperCase();
    const allLowercase = word === word.toLowerCase();
    const firstLetterUppercase =
        word[0] === word[0].toUpperCase() &&
        word.slice(1) === word.slice(1).toLowerCase();

    return allUppercase || allLowercase || firstLetterUppercase;
};
console.log(checkword('GOGLDJ'));*/
/*
var timeRequiredToBuy = function(tickets, k) {
    let total = 0;

   for (let i = 0; i < tickets.length; i++) {
       if (i <= k) {
           total += Math.min(tickets[i], tickets[k]);
       } else {
           total += Math.min(tickets[i], tickets[k] - 1);
       }
   }

   return total;
};
console.assertlog(timeRequiredToBuy([2,3,2], 2))*/
/*
var singleNumber = function (nums) {
    let single = 0;
    for (let num of nums) {
        single ^= num;
    }
    return single;
};
console.log(singleNumber([2,3,4,5,5,4,3]))*/

/*
var intersection = function (nums1, nums2) {
    let arr = [...new Set(nums1)];
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (nums2.includes(arr[i])) res.push(arr[i]);
    }
    return res;
};
console.log(intersection([1, 2, 2, 1], [2, 2]))*/


var transpose = function (matrix) {

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = matrix[j][i];

        }
    }
    return matrix;



};
console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))