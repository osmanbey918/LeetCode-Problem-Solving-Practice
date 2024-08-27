//First Problem solved in Hard DIfficulty
/*
var minKBitFlips = function(nums, k) {
    const n = nums.length;
    let flipCount = 0; // Count the total number of flips
    let currentFlips = 0; // Track the number of flips affecting the current position

    for (let i = 0; i < n; i++) {
        if (i >= k && nums[i - k] > 1) {
            // Remove the effect of the flip that started k positions back
            currentFlips ^= 1;
            nums[i - k] -= 2; // Restore the original value
        }
        
        if ((nums[i] ^ currentFlips) === 0) { // Need to flip if the current value is 0
            if (i + k > n) return -1; // If flipping k elements exceeds array bounds, return -1
            flipCount++;
            currentFlips ^= 1;
            nums[i] += 2; // Mark the start of a flip
        }
    }
    
    return flipCount;
};*/

var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
};
