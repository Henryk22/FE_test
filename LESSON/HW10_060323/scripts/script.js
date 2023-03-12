
 // 1.Выведите с помощью цикла столбец чисел от 1 до 100. 

for (let i = 1; i <= 100; i++) {
    console.log(i);
  }

// 2. Выведите с помощью цикла столбец чисел от 100 до 1.                                                             
for (let i = 100; i >= 1; i--) {
    console.log(i);
  }
// 3. Выведите с помощью цикла столбец четных чисел от 1 до 100. 
for (let i = 2; i <= 100; i += 2) {
    console.log(i);
  }

// 4. Заполните массив 10-ю иксами с помощью цикла. 

let arr_x = []; // создаем пустой массив

for (let i = 0; i < 10; i++) {
  arr_x.push('x'); // добавляем элемент "x" в массив
}

console.log(arr_x);

// 5. Заполните массив числами от 1 до 10 с помощью цикла. 

let arr_ten = [];

for (let i = 1; i <= 10; i++) {
  arr_ten.push(i);  //на каждой итерации добавляем текущее значение i в конец массива с помощью метода push()
}

console.log(arr_ten);

// 6. Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла. 
//Дроби округляйте до двух знаков в дробной части. 

let arr_fix = [];

for (let i = 0; i < 10; i++) {
  let num = Math.random(); //на каждой итерации генерирует случайное число от 0 до 1 с помощью функции Math.random()
  arr_fix.push(Number(num.toFixed(2))); // Затем полученное число округляется до двух знаков в дробной части с помощью метода .toFixed
}

console.log(arr_fix); 

// 7. Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.

let arr_rand = [];

for (let i = 0; i < 10; i++) {
  arr_rand.push(Math.floor(Math.random() * 10) + 1); //генерируем случайное число от 1 до 10 с помощью метода Math.random()
// умножаем его на 10 и округляем до ближайшего целого с помощью метода Math.floor(). 
// Затем мы добавляем это число в конец массива с помощью метода push().
}

console.log(arr_rand);

// 8. Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти. 
// let arr = [2, 5, 0, 9, 11, -3, 8, -1];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0 && arr[i] < 10) { //является ли текущий элемент массива arr[i] больше 0 и меньше 10. 
    console.log(arr[i]);
  }
}
 
// 9. Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5. 
// Как только будет найден первый такой элемент - выведите 'Есть' и оборвите цикл. 
//Если такого элемента нет - ничего не выводите. 

let arr_five = [9, 5, 12, 9, -11, 3, 6, -7];

for (let i = 0; i < arr_five.length; i++) {
  if (arr_five[i] === 5) { // равен ли текущий элемент массива arr[i] значению 5. 
    console.log("Is There");
    break;
  }
}


// 10. Дан массив с числами. С помощью цикла найдите сумму элементов этого массива. 

let arr_sum = [9, 5, 12, 9, -11, 3, 6, -7];
let sumElem = 0;

for (let i = 0; i < arr_sum.length; i++) { //перебираем элементы массива с помощью цикла for 
 
  sum += arr_sum[i]; // при каждой итерации добавляем значение текущего элемента arr[i] к переменной sum.
}

console.log("Summe der Array-Elemente: " + sumElem);

// 11. Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива. 

let arr = [9, 5, 12, 9, -11, 3, 6, -7];
let sumSquares = 0;

for (let i = 0; i < arr.length; i++) { //перебираем элементы массива с помощью цикла for 
  
   sumSquares += arr[i] ** 2; //и при каждой итерации добавляем к переменной sumSquares значение текущего элемента arr[i], 
  // возведенное в квадрат с помощью оператора **. 
}

console.log("Sum of squares of array elements: " + sumSquares);


// 12. Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).

let arr_mean = [9, 5, 12, 9, -11, 3, 6, -7];
let sum = 0;

for (let i = 0; i < arr_mean.length; i++) {
  sum += arr_mean[i]; //при каждой итерации добавляем значение  arr_mean[i] к переменной sum.
}

let average = sum / arr_mean.length; //находим среднее арифметическое элементов массива, разделив сумму элементов на их 
//количество с помощью оператора деления /

console.log("Arithmetic mean of array elements: " + average);
