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
        }
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