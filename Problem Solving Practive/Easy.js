
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




var checkPerfectNumber = function (num) {
    if (num <= 1) {
        return false; 
    }

    let sum = 1; 
    let sqrtN = Math.sqrt(num);

    for (let i = 2; i <= sqrtN; i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) {
                sum += num / i;
            }
        }
    }

    return sum === num;
};
console.log(checkPerfectNumber(28));
