// const arr = [5, 6,  8, -1 ,51, 2, -51, 52]
// let sumOfElements = 0;
// let sumOfElement = 0; //5

// for (let index = 0; index < arr.length; index++) {
    
//     const element = arr[index];
//     sumOfElement += element
//     }
// console.log(sumOfElement);

// for (let index = 0; index < arr.length; index++) {
   
//         if (arr[index] > 0) sumOfElements += arr[index]
// }
//             console.log(sumOfElements);

// const arr = [5, 6,  8, 1 ,51, -2, 51, -52]
// let evenSum = 0
// let oddSum = 0

// for (let index = 0; index < arr.length; index++) {
//     const elem = arr[index]
//     if (elem % 2 == 0) evenSum += elem
//     else oddSum += elem
//     }

//     let diff = 0
//     if (evenSum > oddSum) {
//         diff = evenSum - oddSum
//             }
//             else {
//                 diff = oddSum - evenSum
//             }
// console.log(`oddSum = ${oddSum}`);
// console.log(`evenSum = ${evenSum}`);
// console.log(`diff = ${diff}`);       

// const arr = [1, 34, 52, 4, 9, -5, 6, 59, 52, 9, 20, 12, 65, 13]
// let sum = 0

// for (let index = 0; index < arr.length; index++) {
//     if (index === arr[index]) sum += arr[index]        
//     }
       
// console.log(sum);

// const person = {
//     name: "John",
//     secondName: "Smith",
//     age: 37,
//     height: 175
// }
// console.log(`Name ${person['name']}`);
// console.log(`Second Name ${person['secondName']}`)
// console.log(`Age ${person['age']}`)
// console.log(`Heigt ${person['height']}`)

// console.log(`Name ${person.name}`);
// console.log(`Second Name ${person.secondName}`)
// console.log(`Age ${person.age}`)
// console.log(`Heigt ${person.height}`)
// person.name = "Jake"
// person.profesion = "programmer"
// console.log(person.gender);
// console.log(person);

const products = [ 
    {
    title: "Notebook",
    price: 1500,
    type: "computer"
   },
{
    title: "Pc",
    price: 2000,
    type: "computer"
},
{
    title: "Blender",
    price: 500,
    type: "electronica"
} ]
for (let index = 0; index < products.length; index++) {
    // console.log(products[index].price)
   console.log(`Price of ${products[index].title} is ${products[index].price}`)
   }

   