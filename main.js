// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

for (let i = 0; i < 11; i++) {
    if (i === 0) console.log(`${i} - это ноль`);
    else if (i % 2 !== 0) console.log(`${i} - это нечетное число`);
    else console.log(`${i} - это четное число`);
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const nums = [1, 2, 3, 4, 5, 6, 7]
nums.splice(3, 2);
console.log(nums);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const generateArray2 = (length, max) => ([...new Array(length)].map(() => Math.round(Math.random() * max)))

const nums2 = generateArray2(5, 9);
console.log(nums2);
let sum = 0;
for (let i = 0; i < nums2.length; i++) {
    sum += nums2[i];  
}
console.log(sum);

let min = nums2[0];
for (let i = 0; i < nums2.length; i++) {
    if (nums2[i] < min) min = nums2[i];  
}
console.log(min);

let count3 = 0;
for (let i = 0; i < nums2.length; i++) {
    if (nums2[i] === 3) {
        count3++;
    }
    else continue;
}
if (count3 > 0) console.log('3 имеется');
else console.log('3 отсутствует');

// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

for (let i = 0; i < 20; i++) {
    let element = '';
    for (let k = 0; k <= i; k++) {
        element +='x'
    }
    console.log(element);
}
