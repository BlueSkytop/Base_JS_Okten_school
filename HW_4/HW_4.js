//– створити функцію, яка обчислює та повертає площу прямокутника зі сторонами  а і б
function squared(a, b) {
    const result = a*b;
    console.log(result)
    return result
}
squuared(10, 30);

//– створити функцію, яка обчислює та повертає площу кола з радіусом r
function circle(radius) {
    const resultRound = Math.PI * radius * radius
    console.log(resultRound)
    return resultRound
}
circle(50);

//– створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r
function cylinder(radius, height) {
    const resultCylinder = 2 * Math.PI * radius * height
    console.log(resultCylinder)
    return resultCylinder
}
cylinder(10, 20);

//– створити функцію, яка приймає масив та виводить кожен його елемент
function element (arr) {
    for (const arrElement of arr) {
        console.log(arrElement)
    }
}

//– створити функцію, яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
function text (element) {
    document.write(`<p>${element}</p>`)
}
text('Learning');

//– створити функцію, яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий
function list (message) {
    document.write(`<ul>
                    <li>${message}</li>
                    <li>${message}</li>
                    <li>${message}</li>
                    </ul>`)
}
list('jskfgiewr')


//– створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// та виводить його через document.write
function list2 (text) {
    document.write(`<ul>`);
    for (let i = 0; i < text; i++) {
        document.write(`<li>Action</li>`);
    }
    document.write(`</ul>`);
}
list2(5);

//– створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write
function listElement (arrPrimitives) {
    document.write(`<ul>`);
    for (const item of arrPrimitives) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}
listElement([1, 'tea',false]);

//– створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. 
// Для кожного об’єкту окремий блок.
function arrUsers(users) {
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
    }
}
arrUsers([
    {id:1, name: 'Orest', age:45},
    {id:2, name: 'Ira', age:40},
    {id:3, name: 'Dmutro', age:25},
    {id:4, name: 'Oleg', age:33}
])
//– створити функцію яка повертає найменьше число з масиву
function minNumbers(numbers) {
    let min = numbers[0]
    for (let i=1; i<numbers.length; i++) {
        let number = numbers[i];
        if (number < min) {
            min = number
        }
    }
    return min;
}
console.log(minNumbers([22, 56, -15, 10, 59, 65]))

//– створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10])
function sum (arr) {
    let busket = 0;
    for (const item of arr) {
        busket = busket + item;
    }
    return busket;
}
console.log(sum([1, 2, 10]))

//– створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
function swap(arr,index1,index2) {
    if (index1 < arr.length && index2 < arr.length) {
        let number = arr[index1];
        arr[index1]= arr[index2];
        arr[index2] = number;
        return arr;
    }
    return -Infinity;
}
console.log(swap([11, 22, 33, 44], 1, 3));
