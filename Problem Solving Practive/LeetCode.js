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

//day 1
//10th june

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
