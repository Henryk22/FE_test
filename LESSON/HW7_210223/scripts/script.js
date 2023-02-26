//  HW7 210223

// Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.

function minNum(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

console.log(minNum(7, 10));

//  Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.

function evenMaxToMin(n, m) {
  let a1;
  let a2;
  if (n > m) {
    a1 = n;
    a2 = m;
  } else {
    a1 = m;
    a2 = n;
  }

  for (let i = a1; i >= a2; i--) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

evenMaxToMin(41, 55);

//  Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.

function power(a, b) {
  return a ** b;
}

console.log(power(3, 2));

// Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.

function sumToN(n) {
  let a = 0,
    i = 1;
  while (i <= n) {
    a = a + i;
    i++;
  }
  return a;
}

//  Напишите функцию, которая принимает два числовых аргумента n и m
// и считает сумму четных чисел и нечетных чисел от n до m.
// Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).

function sumEvenOdd(n, m) {
  let arr = [];
  for (let index = n; index <= m; index++) {
    arr.push(index);
  }
  let sumEven = 0;
  let sumOdd = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] % 2 == 0) {
      sumEven = sumEven + arr[index];
    } else {
      sumOdd = sumOdd + arr[index];
    }
  }

  console.log(arr);
  console.log(" The sum of even numbers = " + sumEven);
  console.log(" The sum of odd numbers =  " + sumOdd);
}
