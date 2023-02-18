// Task1.
//Напишите цикл for, который выводит консоль каждое второе число от 0 до 10
console.log("Task 1 == Print every second number from 0 to 10 ");
for (let index = 1; index <= 10; index+=2) {
    console.log(index);
}

// Task2. Напишите цикл for, который выводит в консоль  все числа от 55 до 20
console.log("Task2 == Print all numbers from 55 to 20 ");
for (let index = 55; index >=20; index--) {
    console.log(index);
}

// Task3. Дан массив numbers. Вывести в консоль все числа из массива const numbers = [3, 5, 11, 2, 8, 1, 6]
console.log("Task3 == Output all the numbers in the array to the console");
const numbers = [3, 5, 11, 2, 8, 1, 6];
for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
}

// Task3_1 Сформировать новый массив numberssquared и передать в него все элементы из массива numbers, возведенные в квадрат
const numberssquared = [];
for (let index = 0; index < numbers.length; index++) {
    numberssquared[index] = numbers[index]**2;
}
console.log(numberssquared);

// Task3_2 Создать переменную lastElem и передать в нее последний элемент из сформированного массива numbers_squared (обратиться к элементу массива по индексу)
const lastElement = numberssquared[numberssquared.length-1];
console.log("Last element in numbers squared is "+lastElement);

// Task4 Дан объект user. Используя данные из объекта, сформировать строку в формате: ‘User’s name is  . He is  years old’");
/* 
Дан объект user. Используя данные из объекта, сформировать строку в формате: ‘User’s name is  . He is  years old’
const user = {
firstname: 'Ivan', 
lastname: 'Ivanov', 
age: 20, 
salary: 500
} */
console.log("Task4 ==============");
const user = {
    firstname: 'Ivan', 
    lastname: 'Ivanov', 
    age: 20, 
    salary: 500
    } 
const ourString = `User's name is ${user.firstname}. He is ${user.age} years old.`
console.log(ourString);