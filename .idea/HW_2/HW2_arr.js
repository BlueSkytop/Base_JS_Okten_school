//– Створити масив, наповнити його 10 елементами будь-якого типу,
// вивести кожен елемент в консоль
let arr = [55, true, null, 'Hello', 3.14, [1, 2, 3], {name:'Станіслав'},
    ['Розпорядок дня', 'Меню на день','Графік продуктивності'],
        {
               menuMonday:[
                {breakfast: ['coffee','oamlet'], lunch: ['soup', 'bread', 'salad'], dinner: ['grilled fish', 'rice', 'souce', 'tea']}
                       ],
               menuTuesday:[
                {breakfast: ['milk','pancakes'], lunch: ['pasta', 'vegetable salad'], dinner: ['stew', 'mashed potatoes', 'cucumbers']},
                {breakfast: ['tea with milk'], lunch: ['fish'], dinner: ['mashed potatoes', 'apples']}
                       ]
        },
];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[8].menuMonday[0].lunch);
console.log(arr[8].menuMonday[0].dinner[3]);
console.log(arr[8].menuTuesday[0].dinner[0]);
console.log(arr[8].menuTuesday[1].dinner[1]);

//– Створити 3 об’єкти які описують книги. Поля об’єкту : title ,pageCount, genre.
let book1 = {title:'Тіні забутих предків', pageCounte:120, gerne:'повість'};
let book2 = {title:1984, pageCounte:328, gerne:'антиутопія'};
let book3 = {title:'Гаррі Поттер і філософський камінь', pageCounte:320, gerne:'фентезі'};

//– Створити 3 об’єкти, які описують книги. Поля об’єкту : title ,pageCount, genre, authors.
// Поле “автори” – являється  масивом. Кожен автор має поля name та age.
let book4 = {title:'Тіні забутих предків', pageCounte:120, gerne:'повість', autors:[{name:'Коцюбинський', age:45}, {name:'Коцюбинський 2', age:40}]};
let book5 = {title:1984, pageCounte:328, gerne:'антиутопія', autor:[{name:'Орвел', age:36}]};
let book6 = {title:'Гаррі Поттер і філософський камінь', pageCounte:320, gerne:'фентезі', autor:[{name:'Ролінг', age:32}]};

//– Створити масив з 10 об’єктами, які описують сутніть “користувач”. Поля: name, username,password.
// Вивести в консоль пароль кожного користувача
let users = [
    {name:'Anna', username:'dhrsh', password:'123456789'},
    {name:'Oleg', username:'sawarfav', password:'987654321'},
    {name:'Ira', username:'hjgfh', password:'147852369'},
    {name:'Ostap', username:'safre', password:'963258741'},
    {name:'Ksenja', username:'gtrjtu', password:'FR25846'},
    {name:'Olja', username:'aweae', password:'fh2548S'},
    {name:'Lesja', username:'etry6', password:'ghrtr88965rt'},
    {name:'Wolodumyr', username:'azsdaw', password:'dhgtrsh4565'},
    {name:'Stepan', username:'wtr5yhjk', password:'4587ftKIL'},
    {name:'Katja', username:'safdrgty', password:'KIOL5585'},
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

//– описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
let arrTemps = [
    {day:'Monday', MorningTemps:12, DayTemps:18, EveningTemps:14},
    {day:'Tuesday', MorningTemps:18, DayTemps:22, EveningTemps:14},
    {day:'Wednesday', MorningTemps:10, DayTemps:25, EveningTemps:20},
    {day:'Thursday', MorningTemps:16, DayTemps:26, EveningTemps:22},
    {day:'Friday', MorningTemps:9, DayTemps:12, EveningTemps:9},
    {day:'Saturday', MorningTemps:16, DayTemps:16, EveningTemps:10},
    {day:'Sunday', MorningTemps:12, DayTemps:19, EveningTemps:11},
]

//– Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть ‘Вірно’, інакше виведіть ‘Невірно’. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = +prompt('Enter number 1, 0 or -3');
if (x !== 0) {
    console.log('right')
} else {
    console.log('wrong')
};

//– Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
let time = +prompt('Введіть число 0-59 ');
if (time >=0 && time <= 15) {
    console.log('Це перша чверть години')
} else if (time >=16 && time <=30) {
    console.log('Це друга чверть години')
} else if (time >=31 && time <=45) {
    console.log('Це третя чверть години ')
} else if (time >=46 && time <=59) {
    console.log('Це четверта чверть години')
};

//– У змінній day дано якесь число від 1 до 31. Потрібно визначити,
// у яку половину (декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = +prompt('Введіть число 1-31');
if (day >=1 && day <=10) {
    console.log('Це перша декада місяця')
} else  if (day >=11 && day <=20) {
    console.log('Це друга декада місяця')
} else if (day >= 21 && day <= 31) {
     console.log('Це третя декада місяця')
};

//– Скласти розклад на тиждень за домопогою switch. Користувач вводить порядковий номер дня тижня
// і на екрані відображається інфа, що заплановано на цей день
switch ('Monday') {
    case 'Monday':
        console.log('aaa', 'bbb', 'cccc', 'hhhh')
        break;
    case 'Tuesday':
        console.log('kjgl', 'ilgddg')
        break;
    case 'Wednesday':
        console.log('fdgeas', 'fsgthht', 'drehthbb', 'dhbreshesr')
        break;
    case 'Thursday':
        console.log('dvegeht', 'dfgerg', 'dsgvr', 'adsfdgvb')
        break;
    case 'Friday':
        console.log('cdgers', 'dfger')
        break;
    case 'Saturday':
        console.log('dgerghthg')
        break;
    case 'Sunday':
        console.log('dgthtrh', 'dfgerhg')
        break;
    default:
        console.log('????')
}

//– Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати, коли введені рівні числа.

let number1 = +prompt('Введіть перше довільних число');
let number2 = +prompt('Введіть друге довільних число');
if (number1 > number2) {
    console.log('Більше число' +number1)
} else  if (number1 < number2) {
    console.log('Більше число' +number2)
} else  if (number1 = number2) {
    console.log('Число'  +number1+  'дорівнює'  +number2)
};

// – є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код, який
//
//  буде присвоювати змінній х значення “default”,  якщо ви намагаєтесь присвоїти в неї falsy-значення
//  (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
let x1 = 0;
if (!x1) {
    x1 = 'default'
};