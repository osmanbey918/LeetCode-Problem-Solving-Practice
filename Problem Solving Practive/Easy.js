
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
console.log(zero([0,1,2,3,0,2,3,40,12]))*/
/*
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
console.log(moveZeroes(nums)); // Output: [1, 3, 12, 0, 0]*/

function checkword(word) {
    const allUppercase = word === word.toUpperCase();
    const allLowercase = word === word.toLowerCase();
    const firstLetterUppercase =
        word[0] === word[0].toUpperCase() &&
        word.slice(1) === word.slice(1).toLowerCase();

    return allUppercase || allLowercase || firstLetterUppercase;
};
console.log(checkword('GOGLDJ'));