// function check() {
//     const value = prompt("Write your number")
//     if (value % 2 === 0) {
// console.log("Yes");
//     }
//     else {
//         console.log("Yes");
//     }
// }
// check ()

// function print(str) {
//     console.log(str);
//    }
//    function power(a, b) {
//     console.log(a**b)
//        }
// power(2, 2)
// power(4, 3)
// power(5, 4)
// power(6, 2)
// function getMax(a, b) {
//       console.log(str);
//         }
//         function power(a, b) {
//             if (a > b) {
//             console.log(a);
//             } else {
//                 console.log(b);
//             }           
//         }

// let num = 6
//         function power(a, b) {
//             let result = a**b
//             console.log(result)
//             console.log(num)
//             let num = 8
//             console.log(num);
//         }
//         power(2, 2)
//         console.log(num)

// if (1 === 1) {
//     var a = 123
//     let b = 123
// }
// console.log(`a = ${a}`);
// console.log(`b = ${b}`);

// function power(a, b =2) {
//            let result = a**b
//                 return result
// }
// // const result = power (4, 3)
// // console.log(result);   

// let a = power(3, 2)
// let b = power(4, 2)
// let c = power(a + b, 0.5)
// console.log(c);
// console.log(power(power(3) + power(4), 0.5))

// function check(a) {
//        return a % 2 === 0
// }
// console.log(check(4));
// console.log(check(5));
// function getNewArray(a) {
//     let newArray = []
//     for (let index = 0; index < a; index++) {
//         newArray.push(index)
//             }
//             return newArray
//     }

//     const getArray = getNewArray

//     console.log(getArray(9));
//     console.log(getArray(10));
//     console.log(getArray(50));
//     console.log(getArray(32));


//     console.log(getNewArray(9));
//     console.log(getNewArray(10));
//     console.log(getNewArray(50));
//     console.log(getNewArray(32));

// const power = function(a) {
//     return a**2
//     }

//     console.log(power(4));

function getNewArray(a, b) {
    let newArray = []
    for (let index = a; index <= b; index++) {
        newArray.push(index)
        // newArray[index] = index
            }
    return newArray
}
console.log(getNewArray(9, 15));