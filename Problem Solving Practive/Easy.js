
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
/*

var transpose = function (matrix) {

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = matrix[j][i];

        }
    }
    return matrix;



};
console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))*/

// function repeat(n, action) {
//     for (let i = 0; i < n; i++) {
//       action(i);
//     }
//   }

//   repeat(5, console.log);
// function greaterThan(n) {
//     return m => m > n;
// }
// let greaterThan10 = greaterThan(10);
// console.log(greaterThan10(10));

// //===============
// function unless(test, then) {
//     if (!test) then();
// }

// repeat(7, n => {
//     unless(n % 2 == 1, () => {
//         console.log(n, "is even");
//     });
// });
// ///////////////////////


// const makeNoise = function() {
//     console.log("Pling!");
//   };

//   makeNoise();
//   // → Pling!

//   const roundTo = function(n, step) {
//     let remainder = n % step;
//     return n - remainder + (remainder < step / 2 ? 0 : step);
//   };

//   console.log(roundTo(23, 10));









// const halve = function(n) {
//     return n / 2;
//   };

//   let n = 10;
//   console.log(halve(100));
//   // → 50
//   console.log(n);















// const hummus = function(factor) {
//     const ingredient = function(amount, unit, name) {
//       let ingredientAmount = amount * factor;
//       if (ingredientAmount > 1) {
//         unit += "s";
//       }
//       console.log(`${ingredientAmount} ${unit} ${name}`);
//     };
//     ingredient(1, "can", "chickpeas");
//     ingredient(0.25, "cup", "tahini");
//     ingredient(0.25, "cup", "lemon juice");
//     ingredient(1, "clove", "garlic");
//     ingredient(2, "tablespoon", "olive oil");
//     ingredient(0.5, "teaspoon", "cumin");
//   };






/*
const obj = {
  log: ["example", "test"],
  get latest() {
    return this.log.at(-1);
  },
};
console.log(obj.latest); // "test"*/



// var xorOperation = function(n, start) {
//     let arr = []
//     let i = 0
//     while(arr.length < n){
//         arr.push(start + 2 * i)
//         i++
//     }
//     let xor = 0
//     arr.forEach(num => xor ^= num);
//     return xor
// };
// console.log(xorOperation(4,3))




// var checkPerfectNumber = function (num) {
//     if (num <= 1) {
//         return false; 
//     }

//     let sum = 1; 
//     let sqrtN = Math.sqrt(num);

//     for (let i = 2; i <= sqrtN; i++) {
//         if (num % i === 0) {
//             sum += i;
//             if (i !== num / i) {
//                 sum += num / i;
//             }
//         }
//     }

//     return sum === num;
// };
// console.log(checkPerfectNumber(28));








// var wordPattern = function (pattern, s) {
//     let ss = s.split(' ');
//     if (ss.length !== pattern.length) return false;

//     let charToWord = {};  // Changed variable name for clarity

//     for (let i = 0; i < pattern.length; i++) {
//         if (charToWord.hasOwnProperty(pattern[i])) {
//             if (charToWord[pattern[i]] !== ss[i]) {
//                 return false;  // If pattern mismatch
//             }
//         } else {
//             // Check if the word has already been mapped to another character
//             for (let key in charToWord) {
//                 if (charToWord[key] === ss[i]) {
//                     return false;
//                 }
//             }

//             charToWord[pattern[i]] = ss[i];  // Mapping character to word
//         }
//     }

//     return true;
// };

// console.log(wordPattern("abba", "dog cat cat dog"));  // Output: true
// console.log(wordPattern("abba", "dog cat cat fish")); // Output: false


// var wordPattern = function(pattern, s) {
//     const words = s.split(' ');

//     if (pattern.length !== words.length) {
//         return false;
//     }

//     const patternToWord = {};
//     const wordToPattern = {};

//     for (let i = 0; i < pattern.length; i++) {
//         const char = pattern[i];
//         const word = words[i];

//         if (!patternToWord[char]) {
//             patternToWord[char] = word;
//         } else {
//             if (patternToWord[char] !== word) {
//                 return false; // Conflict found in pattern to word mapping
//             }
//         }

//         if (!wordToPattern[word]) {
//             wordToPattern[word] = char;
//         } else {
//             if (wordToPattern[word] !== char) {
//                 return false; // Conflict found in word to pattern mapping
//             }
//         }
//     }

//     return true; // No conflicts found
// };

// console.log(wordPattern("abba", "dog cat cat dog")); // Output: true
// console.log(wordPattern("abba", "dog cat cat fish")); // Output: false













// var countDigits = function(num) {
//     let count= 0;
//     for(i=0;i<String(num).length;i++){
//        num%String(num)[i] == 0?count++:0
//     }
//     return count
// };
// console.log(countDigits(121));




// var reformat = function (s) {
//     let news = s.split('').sort()
//     for (let i = 0; i < news.length; i++) {
//         if (typeof news[i] !== 'string') {
//             let chararr = news.slice(i)
//              return chararr
//         }
//         break;
//     }
// };
// console.log(reformat("a0b1c2"))



// var kLengthApart = function (nums, k) {
//     let c = 0
//     for (let i = 0; i < nums.length; i++) {
//         if (i !== 0) {
//             if (nums[i] == 1 && c < k) {
//                 return false;
//             }
//         }
//         if (nums[i] == 0) {
//             c++
//         } else c = 0
//     }
//     return true
// };
// //console.log(kLengthApart([1, 0, 0, 0, 1, 0, 0, 1], 2));
// console.log(kLengthApart([0,1, 0,0,1,0,0,1], 2));




// var sortPeople = function (names, heights) {
//     let ob = {}
//     for (let i = 0; i < names.length; i++) {
//         ob[names[i]] = heights[i]
//     }
//     console.log(ob);
// };
// sortPeople(["Mary", "John", "Emma"], [180, 165, 170])

// let s1 = '1.10.00.20'
// let s2 = '1.2'
// let c1 = ''
// let c2 = ''
// let flag = false
// for (let i = 0; i < s1.length; i++) {
//     if (s1[i] == '.') {
//         flag = true
//         continue
//     }
//     // flag = false
//     if (s1[i] == '0' && flag == true) {
//        // c1 += s1[i]
//         continue
//     }
//         c1 += s1[i]
//         flag = false
// }
// console.log(c1)
// for (let i = 0; i < s2.length; i++) {
//     if (s2[i] == '.') {
//         flag = true
//         continue
//     }
//     // flag = false
//     if (s2[i] == '0' && flag == true) {
//        // c2 += s2[i]
//         continue
//     }
//         c2 += s2[i]
//         flag = false
// }
// console.log(c2);

// if(c1 > c2) {
//     return 1
// }
// if(c1 < c2){
//     return -1
// }
// return 0

// var addDigits = function (num) {
//     if (num === 0) return 0;
//     return 1 + (num - 1) % 9;
// };




// var buddyStrings = function (s, goal) {
//     if (s.length !== goal.length) {
//         return false
//     }

//     let arr = s.split('');
//     let stack = []
//     let c = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] != goal[i]) {
//             stack.push(i);
//             c++
//         }
//         if (c > 1) {
//             [arr[stack[0]], arr[stack[1]]] = [arr[stack[1]], arr[stack[0]]]
//             if(arr.join('') === goal){
//                 return true
//             } else return false
//         }

//     }
//     console.log(arr);

//     if (arr.join('') === goal && c > 1) {
//         return true
//     }
//     return false

// };

// console.log(buddyStrings("aa", "aa"));


// var countStudents = function (students, sandwiches) {
//     let flag = false;
//     for (let i = 0; i < sandwiches.length; i++) {
//         for (let j = 0; j < students.length; j++) {
//             if (sandwiches[i] === students[j]) {
//                 sandwiches.push();
//                 students.splice(j, 1);
//                 flag = true
//             }
//             students.push

//         }
//         if (flag === false) {
//             return students.length;
//         }
//     }
//     return students.length;
// };
// console.log(countStudents([1,1,1,0,0,1], [1,0,0,0,1,1]));


// var summaryRanges = function (nums) {
//     let result = []
//     let start = nums[0]
//     for (let i = 1; i <= nums.length; i++) {
//         if (nums[i] - nums[i - 1] == 1) continue
//         if (start == nums[i - 1]) {
//             result.push(`${start}`)
//         } else {
//             result.push(`${start}->${nums[i - 1]}`)
//         }
//         start = nums[i]
//     }
//     return result
// };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
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
