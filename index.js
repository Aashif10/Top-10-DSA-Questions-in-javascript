// ! 1. Find Missing Number in Array

// function findMissing(arr) {
//   let arraySum = 0;
//     let n = arr.length;
//     // Sum of Natural Number formula
//   let SumOfNatural = (n * (n + 1) )/ 2;

//   for (let i = 0; i < arr.length; i++) {
//     arraySum += arr[i];
//   }
//   return SumOfNatural- arraySum;
// }
// let array = [0,1, 2, 4, 5];
// let result = findMissing(array);
// console.log("Missing Number is:",result);

// * 2. Reverse  String
// let str1 = '';
// let len = 0;
// let str = "Hello World";
// len = str.length;
// for (let i =len-1; i>=0; i--){
//     str1+=str[i]
// }
// console.log("Reverse String:", str1);


// ! 3. Highest Most Occurring Character in String
// let str = 'aabbbdddd';
// let maxcount = 0;
// let maxChar = '';
// count = [];
// let char;
// for (let i = 0; i < str.length; i++){
// char=str[i]
    // console.log(char)
// }
// if (!count[char]) {
//     count[char] = 1;
// } else {
//     count[char]++;
// }
// if ( count[char]> maxcount) {
//     maxcount = char;
//     maxChar =char;
// }
// console.log("Most Occuring:",maxChar)
