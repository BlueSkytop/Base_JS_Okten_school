//– створити функцію, яка обчислює та повертає площу прямокутника зі сторонами  а і б
function squuared(a, b) {
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

//

