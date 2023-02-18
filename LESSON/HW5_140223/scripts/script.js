/* Написать программу, которая через prompt считывает число и выводит в консоль число равное 10% от введенного числа */
const usersNumber = +prompt("Enter your number");
console.log("10% of your number is equal: "+ (0.1 * usersNumber));



/* Написать программу, которая получает два числа и выводит наименьшее */
// const usersNumber2 = +prompt("Enter your 1st number");
// const usersNumber3 = +prompt("Enter your 2nd number");
// console.log("Minimal number is: " + Math.min(usersNumber2,usersNumber3));

//Написать программу, которая получает два числа и выводит наименьшее
let number1 = +prompt('Enter first number:');
let number2 = +prompt('Enter second number:');

if (number1 > number2) {
    console.log('The first number is greater than the second');
} else if (number1 < number2) {
    console.log('The second number is greater than the first');
} else {
    console.log('The two numbers are equal');
}


/* Написать программу, которая считывает через prompt число и выводит одно из следующих сообщений: ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’ */
const usersNumber4 = +prompt("Enter your number");
if (usersNumber4>100){
    console.log("Number is biger than 100");
} else if (usersNumber4<100){
    console.log("Number is less than 100");
} else {
    console.log("Number is equal 100");
}



/* Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) и выводит в консоль сообщение ‘Hello, ’, если пользователь совершеннолетний, или ‘Hi, ’, если пользователь несовершеннолетний. */
const usersName = prompt("Enter your name");
const usersAge = +prompt("Enter your age");
if (usersAge>=18){
    console.log("Hello, "+usersName);
} else {
    console.log("Hi, "+usersName);
}



//==========================================

//  Дополнительные задания
//  Создайте массив из строк, чисел, NaN и объектов. Пример: ['hello', 1, { name: 'John' }, 'world', 2, { name: 'Jane' }, NaN]
//  Задача 1
//  Пройдитесь по массиву циклом for и выведите в консоли, чем является каждый элемент массива: строкой, числом или ни тем, ни другим (используя функции isNaN и typeof). 

// Просуммируйте все числа в массиве и выведите результат в консоли. 
// Игнорируйте нечисловые элементы


const arr = ['hello', 1, { name: 'John' }, 'world', 2, { name: 'Jane' }, NaN];

for (let i = 0; i < arr.length; i++) {
    const type = typeof arr[i];
    if (type === 'number') {
        console.log(`Элемент с индексом ${i} является числом`);
    } else if (type === 'string') {
        console.log(`Элемент с индексом ${i} является строкой`);
    } else {
        console.log(`Элемент с индексом ${i} является ни тем, ни другим`);
    }
}


