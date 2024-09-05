/*function fun(s) {

   for (let i = 0; i <= s.length; i++) {
       if(s[i] == '(' || s[i] == '{' || s[i] == '[') {
           if (s[i + 1] == ')'  || s[i + 1] == '{' || s[i + 1] == '[') {
               
           }
           else {
               return false;
           }
       }
   }
   return true;
};
const sun = '(){}';
console.log(fun(sun));*//*
function fun(s) {
    let x = s.split(" ");
     xx = x.filter(element => element.trim() !== '');
    console.log(xx.length);
    return xx;
};
console.log(fun(", , , ,      a, eaefa "));
*/
/*
function fn(digits) {
    const mum = (Number(digits.join('')) + 1).toString().split('').map(Number);

};
console.log(fn([6,1,4,5,3,9,0,1,9,5,1,8]));*/
/*function bbb(para) {
    const map = new Map([
        [bis, 99],
        [us, 89]
    ])

}
console.log(map(bbb))*/
/*
let person = {
    name : 'usman',
    age : 19,
    weigth: 60
}
console.log(Object.keys(person))
*/

/*
let stack = []
let score = 0
while(score < 100){
    score++
    stack.push(score)
    if(score % 2  == 0){
        stack.pop()
    }
}
console.log(stack)*/
/*
let myhash = {}
myhash.name = 'usman'
myhash.age = 20
myhash.height = 20+'inch'
delete myhash.name
let arr = []

console.log(typeof arr)
console.log(Object.keys(myhash))
console.log(Object.entries(myhash))*/
/*
var commonChars = function(words) {
    let sorted = []
    let res = []
    for (let i = 0; i < words.length; i++) {
        sorted.push(words[i].split('').sort().join(''))
    }
    
    return sorted
};
console.log(commonChars(["bella","label","roller"]))
*/
/*var Words = function(dictionary, sentence) {
    let res = [];
    let sen = sentence.split(' ');

    for (let i = 0; i < sen.length; i++) {
        let matched = false;
        for (let j = 0; j < dictionary.length; j++) {
            if (sen[i].includes(dictionary[j])) {
                res.push(dictionary[j]);
                matched = true;
                break; // Break to avoid multiple matches for the same `sen[i]`
            }
        }
        if (!matched) {
            res.push(sen[i]);
        }
    }

    return res.join(' ');
};

console.log(Words(["a", "b", "c"], "aadsfasf absbs bbab cadsfafs"));
// Expected output: "a a b c"*/

/*
var Words = function(dictionary, sentence) {
    let res = [];
    let sen = sentence.split(' ');

    for (let i = 0; i < sen.length; i++) {
        let matchedWord = sen[i];
        for (let j = 0; j < dictionary.length; j++) {
            if (sen[i].indexOf(dictionary[j]) === 0) {
                matchedWord = dictionary[j];
                 // Break to use the first matching dictionary word
            }
        }
        res.push(matchedWord);
    }

    return res.join(' ');
};
console.log(Words(["catt","cat","bat","rat"], "the cattle was rattled by the battery"));
*/


/*
//day 1 ------------------------------------------------------------------------------------------------------------------------------------------
//10th june ------------------------------------------------------------------------------------------------------------------------------------

var heightChecker = function(heights) {

    let count = 0
    let sorted = heights.slice().sort((a, b) => a - b);
    
    for (let i = 0; i < heights.length; i++){
        if(heights[i] !== sorted[i]){
            count++
        }
    }
    return count
};
console.log(heightChecker([1,1,4,2,1,3]))
*/

//                          -------------------------------------------------------------------------------------------------------

//  2259. Remove Digit From Number to Maximize Result
/*
var removeDigit = function(number, digit) {
    let maxNumber = ""; // Initialize an empty string to keep track of the maximum number

    for (let i = 0; i < number.length; i++) {
        if (number[i] === digit) {
            // Create a new string with the current occurrence of digit removed
            let newNumber = number.slice(0, i) + number.slice(i + 1);
            // Update maxNumber if the new string is greater than the current maxNumber
            if (maxNumber === "" || newNumber > maxNumber) {
                maxNumber = newNumber;
            }
        }
    }

    return maxNumber;
};
console.log(removeDigit("1231", "1"))*/




//day 2 ------------------------------------------------------------------------------------------------------------------------------------------
//11th june ------------------------------------------------------------------------------------------------------------------------------------
/*

var countCharacters = function(words, chars) {
    let res = []
    let sortc = chars.split('').sort().join('');
    let c = 0
    for (let i = 0; i < words.length; i++){
        let sortedWord = words[i].split('').sort().join('');
        let s = sortc
        if(s.includes(sortedWord)){
          res.push(words[i])
          c++
        }
    }
    return c
};
console.log(countCharacters(["cat","bt","hat","tree"], "atach"))*/


// day3
/*

var minIncrementForUnique = function(nums) {

    nums.sort((a, b) => a - b);

       let move = 0;
       let n = 1
       for ( n in nums){
           if(nums[n] <= nums[n - 1]){
               move += nums[n - 1] - nums[n] +1
               nums[n] = nums[n - 1] + 1
           }
       }
       return move
   };
   console.log(minIncrementForUnique([1,1,2,2,3,4,4,7]))*/


//day 4
/*
var reverseParentheses = function(s) {
 let stack = []
 for (let i = 0; i < s.length; i++) {
     if(s[i] === ')'){
         let t = ''
         while(stack.length && stack[stack.length - 1] !== '('){
             t += stack.pop()
         }
         stack.pop()
         for (let c of t) {
             stack.push(c);
         }
     }else{
         stack.push(s[i])
     }
     
 }
 return stack.join('');
};
console.log(reverseParentheses('(abcd)'))*/


//day 5
/*
var checkRecord = function(s) {
    let aa = 0;
    let h = ''
    for (let i = 0; i < s.length; i++) {
        if(s[i] === 'A'){
            aa++
        }else if(s[i] === 'L' && s[i + 1] === 'L' && s[i + 2] === 'L' ){
            return false
        }
        
    }
    return aa > 1 ? false : true;
};
console.log(checkRecord("LALl"))*/

// Day 6
/*
var predictTheWinner = function (nums) {
    let ply1 = 0;
    let ply2 = 0;
    let end = nums.length - 1
    let start = 0;
    while (start <= end ) {

        ply1 = Math.max(nums[start], nums[end])
        if(end > start ){
            end--
        }else{
            start++
        }

        if(start >= end){
            ply2 = Math.max(nums[start], nums[end])
            start++
        }else{
            end--
        }
    }
    return ply1 > ply2
};
console.log(predictTheWinner([1, 5,233, 7, 21]))*/
/*
var judgeSquareSum = function(c) {

    for (let i = 0; i * i <= c; i++) {
        for (let j = 0; j * j <= c; j++) {
            if (i * i + j * j === c) {
                return true;
            }
        }
    }
    return false;
};
console.log(judgeSquareSum(2))*/

/*

var dailyTemperatures = function (temperatures) {
    let res = []
    let start = 0, end = temperatures.length - 1, c = 1;
    while (temperatures[start] < temperatures[end]) {
        if (temperatures[start] >= temperatures[c]) {
            
            start++
        }
        res.push()

    }

    return res
};
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))*/
/*

var prefixesDivBy5 = function (nums) {

    let current = 0;
    let ans = ''
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        ans += current
        current = (current * 2 + nums[i]);
        res.push(current);
    }
    return res + ans;
};
console.log(prefixesDivBy5([0, 1, 1, 0, 1]))*/
/*
let set = new Set([1,2,3,4])
set.delete(3)
console.log(set[0])*/
/*

var backspaceCompare = function(s, t) {
    let stack = []
    for(let ss of s){
        stack.push(ss)
        if(ss == '#'){
            stack.pop()
        }
    }
    let s2 = []
        for(let tt of t){
        s2.push(tt)
        if(tt == '#'){
            s2.pop()
        }
    }
    return stack.length == s2.length
};
console.log(backspaceCompare("xywrrmp", "xywrrmu#p"))*/

/*

var minInsertions = function (s) {

    let arr = s.split('').sort().join('')
    let stack = []
    let ans = 0, c = 0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == '('){
            ans++
        }else {
            c++
        }
        
    }
    if(ans < c && c > 0){
        

    }
    return ans
};
console.log(minInsertions("))())("))*/

/*
var nextGreaterElement = function(n) {
    let s = n.toString()
    return Number(s.split('').sort().join(''))
    
};


console.log(nextGreaterElement(21))*/


/*
var maxSatisfied = function (customers, grumpy, minutes) {
    let initial = 0
    let max = 0
    let extra = 0
    for (let i = 0; i < grumpy.length; i++) {
        if (grumpy[i] == 0) {
            initial += customers[i]
        } else if (i < minutes) {
            extra += customers[i]
        }
    }
    max = extra
    for (let i = minutes; i < grumpy.length; i++) {

        extra += customers[i] * grumpy[i];
        extra -= customers[i - minutes] * grumpy[i - minutes];
        max = Math.max(max, extra);
    }
    return max + initial
};
console.log(maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3))*/

/**
 * @param {string} text
 * @return {number}
 *//*
var maxNumberOfBalloons = function (text) {
let a = 0
let b = 0
let n = 0
let l = 0
let o = 0
let cl = 0
let ol = 0
for (let i = 0; i < text.length; i++) {
switch (text[i]) {
case 'b':
b++;
break;
case 'a':
a++;
break;
case 'n':
n++;
break;
case 'l':
cl++;
if (cl == 2) {
    l++;
    cl = 0
}
break;
case 'o':
ol++;
if (ol == 2) {
    o++;
    ol = 0
}
break;
default:
break;
}
}

return Math.min(a, b, l, o, n)
};*/



/*
var findMaxK = function(nums) {
    let res = -1;
    let numSet = new Set(nums);
    for (let num of numSet) {
        if (numSet.has(-num)) {
            res = Math.max(res, num);
        }
    }
    return res;
};
console.log(findMaxK([-10, 8, 6, 7, -2, -7, -3]))*/

/*
var kidsWithCandies = function (candies, extraCandies) {
    let res = []
    let max = Math.max(...candies);
    let t = 0
    for (let i = 0; i < candies.length; i++) {
        t = candies[i] + extraCandies
        if (t >= max) {
            res.push(true)
        } else {
            res.push(false)
        }
    }
    return res
};
console.log(kidsWithCandies([2, 3, 5, 1, 3], 3))*/
/*
var distributeCandies = function(candyType) {
    let unique = new Set(candyType)
    let uniquelength = unique.size
    let max = candyType.length / 2
    return Math.min(uniquelength, max)
};
console.log(distributeCandies([1,1,2,3]))
*/
/*
var plusOne = function (digits) {
    
    let last = digits.slice([digits.length - 1])
    /*   if (last == 9) {
        digits.push(1, 0)
        } else {
            last++
        digits.push(last)
        
        }*/
/*
return last
};
console.log(plusOne([1, 2, 9]))*/



// var arrayPairSum = function (nums) {
//     nums.sort((a, b) => a - b)
//     let i = 0;

//     let max = 0
//     while (i < nums.length) {
//         max += Math.min(nums[i], nums[i + 1])
//         i++
//         i++
//     }
//     return max
// };
// console.log(arrayPairSum([1, 4, 3, 2]))


// var sortPeople = function (names, heights) {
//     let obj = {}
//     for (let i = 0; i < names.length; i++) {
//         obj[heights[i]] = names[i]
//     }
//    // let array = Object.values(obj).reverse()
//   //  array.reverse()
//     return Object.values(obj).reverse()
// };
// console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));



// var maxSubArray = function (nums) {
//    // nums.sort((a,b) => a - b)
//    let arr = []
//    let res = 0
//     for (const n of nums) {
//         if(n > 0){
//             arr.push(n)
//             res += n
//         }
//     }
//     return res
// }
// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));

// var findMaxAverage = function(nums, k) {
//     let avg = 0;
//     let i;
//     for(i=0; i<k; i++) {
//         avg += nums[i];
//     }
//     let maks = avg/k;
//     // console.log(max);
//     for(let x=i; x<nums.length; x++) {
//         avg+=nums[x];
//         avg-=nums[x-i];
//         maks = Math.max(maks, avg/k);
//     }
//     return maks;
// };


// var numDifferentIntegers = function(word) {
//     word = word.replaceAll(/[a-z]/g, " ").split(" ");
//  const nums = new Set();
//  for(const w of word) {
//      if(w !== "" && !nums.has(BigInt(w))) nums.add(BigInt(w));
//  }
//  return nums.size;
// };

// var chalkReplacer = function (chalk, k) {

// const totalChalk = chalk.reduce((sum, c) => sum + c, 0);

// // Find the remaining chalk after completing as many full cycles as possible
// let remainingChalk = k % totalChalk;

// // Determine which student will replace the chalk
// for (let i = 0; i < chalk.length; i++) {
//     if (remainingChalk < chalk[i]) {
//         return i;
//     }
//     remainingChalk -= chalk[i];
// }

// s
// return -1;


//     let totals = chalk.reduce((total, sum) => total + sum, 0);
//     let remaining = k % totals;
//     for (let i = 0; i < chalk.length; i++) {
//         if (remaining < chalk[i]) return i;
//          remaining -= chalk[i];

//     }
//     console.log(i)
//     return -1
// };
// console.log(chalkReplacer([3,4,1,2], 25));
// let s = 'abodj'
// let sn = ''
// let k = 2
// for (let i = 0; i < s.length; i++) {
//     sn += s.charCodeAt(i) - 96
// }
// let sum = 0
// while (k > 0) {
//     for (let char of sn) {
//         sum += parseInt(char, 10); 
//     }
//     sn = sum.toString()
//     sum = 0;
//     k--
// }

// console.log(sum);
// console.log(sn);
// console.log(s.charAt('a'));
let num = 11891;
let numArr = Array.from(String(num), Number);

let max = Math.max(...numArr);
let min = Math.min(...numArr);

console.log(max);

var missingRolls = function(rolls, mean, n) {
    let m = rolls.length;
   let totalSum = mean * (n + m);
   let observedSum = rolls.reduce((a, b) => a + b, 0);
   
   let missingSum = totalSum - observedSum;
   
   if (missingSum < n || missingSum > 6 * n) {
       return [];
   }
   
   let base = Math.floor(missingSum / n);
   let remainder = missingSum % n;
   
   let result = new Array(n).fill(base);
   for (let i = 0; i < remainder; i++) {
       result[i] += 1;
   }
   
   return result;
};