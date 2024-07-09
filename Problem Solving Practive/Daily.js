//      02/07/2024

/*
var intersect = function(nums1, nums2) {
    let arr = []
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if(nums1[i] === nums2[j]){
                arr.push(nums1[i])
                nums2.splice(j, 1)
                //nums1.splice(i, 1)
                break;
            }
            
        }
    }
    return arr
};
console.log(intersect([4,9,5], [9,4,9,8,4]))*/


/*

var passThePillow = function (n, time) {
    let res = 1
    let tar = time
    while (time !== 0) {
        time--
        res++
        if (res == n) {
            while(time !== 0){
                time--
                res--
                if(res == 0)
            }
        }
    }
    return res
};
console.log(passThePillow(4, 5));

// var passThePillow = function(n, time) {
//     let chunks = Math.floor(time / (n - 1));
//     return chunks % 2 === 0 ? (time % (n - 1) + 1) : (n - time % (n - 1));
// };

var numWaterBottles = function (numBottles, numExchange) {
    let totalBottles = numBottles;

    while (numBottles >= numExchange) {
        totalBottles += Math.floor(numBottles / numExchange);
        numBottles = Math.floor(numBottles / numExchange) + (numBottles % numExchange);
    }

    return totalBottles;
};*/


var checkPerfectNumber = function(num) {
    let arr = []
    let o = 0
    while (0 < num){
        o++
    }
    return o
};
console.log(checkPerfectNumber(28));