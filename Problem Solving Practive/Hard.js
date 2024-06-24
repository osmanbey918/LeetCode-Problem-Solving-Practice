var minKBitFlips = function (nums, k) {
    let flip = 0;
    if(nums.length < k && nums.indexOf(0)){
        return -1
        
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            let p = i
            flip++
            for (let j = 0; j < k; j++) {
                if (nums[p] == 0) {
                    nums[p] = 1
                } else {
                    nums[p] = 0
                }
                p++

            }
        }
        
    }
    for(let n of nums){
        if (n == 0){
            return -1
        }
    }
    return flip
};
console.log(minKBitFlips([1, 1, 0], 2))