//Function that calculates the factorial of a give number:
//First methoed
// function factorial(n){
//     let result = n;
//     while(n > 1){
//         n--;
//         result = result * n;
//     }
//     return result;
// }
//Second Method
// function factorial(n){
//     let result = 1;
//     if(n === 0){
//         return 1;
//     } else if(n < 0){
//         return -1;
//     } else {
//         for(let i = n; i >= 1; i--){
//             result *= i;
//         }
//     }
//     return result;
// }

// console.log(factorial(4))


//Given a string, replace every letter with its position in the alphabet

// function factorial(n) {
// 	let result = 1;
// 	if(n === 0){
// 		return 1;
// 	} else if(n < 0){
// 		return -1;
// 	} else {
// 	    for(i = n; i >= 1; i--){
          
// 		result *= i
// 			}
// 	}
//    return result;
// }

// console.log(factorial(5))


// const years = [1991, 1993, 1987, 1999, 2004];
// const full = [];

// for(i = 0; i < years.length; i++){
// 	full.push(2037 - years[i])
// }

// console.log(full)

//continue and break statement!
//continue is used to exit the current iteration of the loop and proceeds to the next statment

// const kavi = [
// 	'kavinesh',
// 	'divyesh',
// 	2004,
// 	'santhosh',
// 	 ['naresh', 'dayum']
// ]


// for(i=0; i < kavi.length; i++){
// 	if(typeof kavi[i] !== 'string') continue;
// 	console.log(typeof kavi[i], kavi[i])
// }



console.log('=====================PROBLEMS=====================')


//Array Intersection
// function concat(arr){
// 	return arr.flat()
// }

// console.log(concat([1,2], [3,4]))

//Convenience store find the changeamount value:
function changeEnough(arr, myValue){
    let quarter = arr[0] * 0.25;
    let dimes = arr[1] * 0.10;
    let nickles = arr[2] * 0.05;
    let pennies = arr[3] * 0.02;
    
    let total = quarter + dimes + nickles + pennies;
    
    if(total > myValue){
        return true;
    } else {
        return false;
    }
}


























