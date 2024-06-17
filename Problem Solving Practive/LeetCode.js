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
console.log(judgeSquareSum(2))