1. //Знайти та вивести довжину наступних стрінгових значень
//‘hello world’
//‘lorem ipsum’
//javascript is cool’
let A = 'hello world';
let B = 'lorem ipsum';
let C = 'javascript is cool';
let lenghtABC = [A, B, C];
for (const s of lenghtABC) {
    console.log(s.length)
};

2.// Перевести до великого регістру наступні стрінгові значення
//‘hello world’, ‘lorem ipsum’, ‘javascript is cool’
let s1 = 'hello world';
let s2 = 'lorem ipsum';
let s3 = 'javascript is cool';
let lenghtS = [s1, s2, s3];
for (const p of lenghtS) {
    console.log(p.toUpperCase())
}
//const string1 = s1.toUpperCase();
//console.log(string1);

3. // Перевести до нижнього регістру наступні стрінгові значення
//‘HELLO WORLD’, ‘LOREM IPSUM’, ‘JAVASCRIPT IS COOL’
let S1 = 'HELLO WORLD';
let S2 = 'LOREM IPSUM';
let S3 = 'JAVASCRIPT IS COOL';
let stringUp = [S1, S2, S3];
for (const l of stringUp) {
    console.log(l.toLowerCase())
}

4. //Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
// let str = ‘Ревуть воли як ясла повні’;
// let arr = stringToarray(str); // [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]
function arrStr (str) {
    if (str) {
        const split = str.split(' ')
        return split;
    }
    return [' '];
}
console.log(arrStr('Ревуть воли як ясла повні'));

5. //є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об’єкти в масиві на стрінгові.
const numbers = [10,8,-7,55,987,-1011,0,1050,0];
const numToStr = numbers.map(number => number + '');
console.log(numToStr);

6. //створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого,
// або навпаки  – залежно від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,’ascending’) // [3,11,21]
// sortNums(nums,’descending’) // [21,11,3]

function sortNums(arrayOfNums,direction){
        const sorted = [...arrayOfNums].sort((a, b) => a - b);
        if (direction === 'ascending')
            return sorted;

        if (direction === 'descending')
            return sorted.reverse()
       return sorted;
}
console.log(sortNums([11,21,3], 'ascending'));
console.log(sortNums([11,21,3], 'descending'));

7. // є масив
// let coursesAndDurationArray = [
// {title: ‘JavaScript Complex’, monthDuration: 5},
// {title: ‘Java Complex’, monthDuration: 6},
// {title: ‘Python Complex’, monthDuration: 6},
// {title: ‘QA Complex’, monthDuration: 4},
// {title: ‘FullStack’, monthDuration: 7},
// {title: ‘Frontend’, monthDuration: 4}
// ];
// — відсортувати його за спаданням за monthDuration
// — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
// — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
const map1 = coursesAndDurationArray
    .sort((a, b) => b.monthDuration - a.monthDuration)
    .filter(value => value.monthDuration > 5)
    .map((value, index) => ({...value, id: index + 1}));
console.log(map1);