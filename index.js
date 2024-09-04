
// for (let i = 5; i <= 1; i++){
//     let row = '';
//     for (let j = i; j >=1; j--){
//         row += '*';
//     }
//     console.log(row);
// }
// let array = [1, 2, 3, 4, 5,4,5,3];
// console.log(array)
// for (let i = 0; i < array.length; i++){
//     for (let j = i + 1; j < array.length; j++)
//     {
//         if (array[i]== array[j]) {
            
//             console.log("Duplicate Number:",array[j]);
//         }
        
//     }
// }

// let array = [10,20,30,40,50];
// let max =0;
// for (let i = 0; i < array.length; i++){
    //     if (array[i] > max) {
        //         max = array[i];
        //     }
        // }
        // console.log("Largest Number:", max)
        
// let array = [10, 20, 30, 40, 45,55];
// let max = 0;
// let secondMax = 0;
// for (let i = 0; i < array.length; i++){
//         if (array[i] > max) {
//             secondMax = max;
//             max = array[i];
//         }
//         else if (array[i] > secondMax && array[i] !== max) {
//             secondMax= array[i];
        
//     }
// }
// console.log("Maximum:", max);
// console.log("SecondMax:", secondMax);


let a = 40;
let b = 30;
console.log("Old Value A:",a ," value B:",b);
a = a - b;
b = a + b;
a = b - a;
console.log("New Value A:",a ," value B:",b);
