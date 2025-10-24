    //– створити функцію, яка обчислює та повертає площу прямокутника зі сторонами, а і б
let squared = (a, b) => a*b;
console.log(squared(10, 20));

    //– створити функцію, яка обчислює та повертає площу кола з радіусом r
let circle = (radius) => Math.PI * radius * radius;
    console.log(circle(50));

    //– створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r
    let cylinder= (radius, height) => 2 * Math.PI * radius * height;
        console.log(cylinder(50, 100));

        //– створити функцію, яка приймає масив та виводить кожен його елемент
    let users = [
        {name: 'vasya', age: 31, status: false},
        {name: 'petya', age: 30, status: true},
        {name: 'kolya', age: 29, status: true},
        {name: 'olya', age: 28, status: false},
        {name: 'max', age: 30, status: true},
        {name: 'anya', age: 31, status: false},
        {name: 'oleg', age: 28, status: false},
        {name: 'andrey', age: 29, status: true},
        {name: 'masha', age: 30, status: true},
        {name: 'olya', age: 31, status: false},
        {name: 'max', age: 31, status: true}
    ];
    let element = (arr) => arr
            console.log(element(users));

    //– створити функцію, яка створює параграф з текстом. Текст задати через аргумент
    let text = (element) => `<p>${element}</p>`
        document.write(text('Learning new lesson'));

    //– створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
    let list = (message) => `<ul>
                    <li>${message}</li>
                    <li>${message}</li>
                    <li>${message}</li>
                    </ul>`
        document.write(list('hello my friend'));

//– створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
    // Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
    let list2 = (text, count) => {
        document.write(`<ul>`);
        for (let i = 0; i < count; i++) {
        document.write(`<li>${text} ${count}</li>`)
        }
        document.write(`</ul>`);
    }
    (list2('Sale', 5));

    //– створити функцію, яка приймає масив примітивних елементів (числа, стрінги, булеві), та будує для них список
    let listElement = (arrPrimitives) => {
        document.write(`<ul>`);
        for (const item of arrPrimitives) {
            document.write(`<li>${item}</li>`);
        }
        document.write(`</ul>`);
    }
    listElement([1, 'tea',false]);

    //– створити функцію, яка приймає масив об’єктів з наступними полями id, name, age, та виводить їх в документ.
    // Для кожного об’єкту окремий блок.
    let arrusers = (users) => {
        for (const user of users) {
            document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
        }
    }
    arrusers([
        {id:1, name: 'Orest', age:45},
        {id:2, name: 'Ira', age:40},
        {id:3, name: 'Dmutro', age:25},
        {id:4, name: 'Oleg', age:33}
    ])

    //– створити функцію, яка повертає найменше число з масиву
    let minNumbers = (numbers) =>{
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
    let sum = (arr) => {
        let busket = 0;
        for (const item of arr) {
            busket = busket + item;
        }
        return busket;
    }
    console.log(sum([1, 2, 10]))

    //– створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
    let swap = (arr,index1,index2) => {
        if (index1 < arr.length && index2 < arr.length) {
            let number = arr[index1];
            arr[index1]= arr[index2];
            arr[index2] = number;
            return arr;
        }
        return -Infinity;
    }
    console.log(swap([11, 22, 33, 44], 1, 3));