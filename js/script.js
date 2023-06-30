'use strict';
// let numberOfFilms;
// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '').trim();
//     while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
//     }
// }
// start();
// const personalMovieDB = {
//         count: numberOfFilms,
//         movies: {},
//         actors: {},
//         genres: [],
//         privat: false
//     };
// function remembeberMyFilms () {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
//               b = +prompt('На сколько его оцените', '').trim();   
//         if (a != null && b != null && a != '' && b != '' & a.length < 20 && !isNaN(b)) {
//             personalMovieDB.movies[a] = b;
//         } else {
//             i--;
//         }
//     }
// }
// remembeberMyFilms ();
// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = +prompt('На сколько его оцените', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = +prompt('На сколько его оцените', '');
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// function detectPersonalLevel() {
//     if (personalMovieDB['count'] < 10) {
//     console.log('Мало фильмов');
//     } else if (personalMovieDB['count'] >= 10 && personalMovieDB['count'] < 30) {
//     console.log('Класический зритель');
//     } else if (personalMovieDB['count'] >= 30) {
//     console.log('Вы киноман');
//     } else {
//     console.log('Ошибка чтения');
//     };
// }
// detectPersonalLevel();
// function showMyDB() {
//     if (personalMovieDB.privat === false) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB();
// function writeYourGenres() {
//     for (let i = 0; i < 3; i++) {
//         personalMovieDB.genres[i] = prompt(`Ваш любтмый жанр под номером ${i + 1}`, '');
//     }
// }
// writeYourGenres();

// let i = 0;
// while (i < 2) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = +prompt('На сколько его оцените', '');
//     if (a != null && b != null && a != '' && b != '' & a.length < 20) {
//         personalMovieDB.movies[a] = b;
//         } else {
//             i--;
//             }
//          i++;   
// }
// let i = 0;
// do {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = +prompt('На сколько его оцените', '');
//     if (a != null && b != null && a != '' && b != '' & a.length < 20) {
//         personalMovieDB.movies[a] = b;
//         } else {
//             i--;
//             }
//          i++;
// } while ( i < 2);
// if (personalMovieDB['count'] < 10) {
//     console.log('Мало фильмов');
// } else if (personalMovieDB['count'] >= 10 && personalMovieDB['count'] < 30) {
//     console.log('Класический зритель');
// } else if (personalMovieDB['count'] >= 30) {
//     console.log('Вы киноман');
// } else {
//     console.log('Ошибка чтения');
// };





// console.log( NaN || 2 || undefined );
// console.log( NaN && 2 && undefined );
// console.log( 1 && 2 && 3 );
// console.log( !1 && 2 || !3 );
// console.log( 25 || null && !3 );
// console.log( NaN || null || !3 || undefined || 5);
// console.log( NaN || null && !3 && undefined || 5);
// console.log( 5 === 5 && 3 > 1 || 5);


// let j = 5;
// do {
//         console.log(j);
//         j++;
// } while (j <=10);
// for (let i = 20; i > 10;  i--) {
//     if (i === 13) break;
//     console.log(i);
        
// };
// let op = 20;
// while (op > 0) {
//     if (op === 13) break;
//     console.log(op);
//     op--;        
// };
// for (let i = 2; i <= 10; i++) {
//         if (i % 2 === 0) {
//                 console.log(i);
//         } else {
//                 continue;
//         }
// }
// for (let i = 2; i <= 16; i++) {
//         if (i % 2 === 0) {
//             continue;
//         } else {
//             console.log(i);
//         }
    // }
// let k = 2;
// while (k <= 16) {
//         if (k % 2 !== 0) {
//             console.log(k);
            
//         } else {
//             k++;
//             continue;  
//         }   
//         k++;     
// }
// let k = 2;
// do {
//     if (k % 2 === 0) {
//         console.log(k);
//     } else {
//         k++;
//         continue;
//     }
//     k++;    
// } while (k <= 16);
// const arrayOfNumbers = [];

// for ( let i = 5; i < 11; i++) {
//     arrayOfNumbers[i - 5] = i;  
// };
// console.log(arrayOfNumbers); 


// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// // console.log(arr.length);
// for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
// };
// console.log(result);

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];
// // for (let i = 0; i < data.length; i++) {
// //     if (typeof(data[i]) === 'number') {
// //         data[i] *= 2; 
// //     } if (typeof(data[i]) === 'string') {
// //         data[i] = `${data[i]} - done`;
// //     }
// // }
// for (let i = 1; i <= data.length; i++) {
//     result[i - 1] = data[data.length - i];
// }
// console.log(result);

// const lines = 5;
// let result = '';
// for (let i = 1; i <= lines; i++) {
//     for (let j = 0; j < i; j++) {
//             result += '*';
//         }
//         result += '\n';
// };
// console.log(result);

// const lines = 5;
// let result = '';
// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += '\n';
// };
//  console.log(result);

// Практика з функціями

// let myName = 'Anton';
// function sayHello(name) {
//     return `Привет, ${name}!`;
//  }
// console.log(sayHello(myName));

// function free(num) {
//     let arr = [];
//     if (Number.isInteger(num)) {
//         for (let i = -1; i < 2; i++) {
//             arr[i + 1] = num + i;
//         }}
//     return arr[2];
// }
// console.log(free(5));

// function free(a, b) {
//     if (b <= 0 || typeof(b) !== 'number') return a;
//     let str = '';
//     for (let i = 1; i <= b; i++) {
//         if (i < b) {
//             str += `${a * i}---`} else {
//                 str+= `${a * i}`
//             }
//     }
//     return str;
// }
// console.log(free(3, '6'));
//  const fil = 'My name is-Jenny';
// //  console.log(fil.indexOf('is'));
// //  console.log(fil.slice(8, 10));

// Практичні завдання №29
// №1
// function calculateVolumeAndArea(a) {
//     if (!Number.isInteger(a) || a <= 0 || isNaN(a)) {
//         return 'При вычислении произошла ошибка'
//     } else {
//         const Area = a * a *6,
//               Volume = a * a * a;
//         return `'Объем куба: ${Volume}, площадь всей поверхности: ${Area}'`;
//     }
// }
// // calculateVolumeAndArea(5);
// console.log(calculateVolumeAndArea(5));
// №2
// function getCoupeNumber(a) {
//     if (!Number.isInteger(a) || a < 0 || isNaN(a)) {
//         return "Ошибка. Проверьте правильность введенного номера места"
//     } else if (a > 36 || a === 0) {
//         return "Таких мест в вагоне не существует"
//     }
//      for (let i = 1; i <= 9; i++) {
//         let b = a / 4;
//         if (b <= i) {return `${i}`} else continue
//     }  
//     // return Math.ceil(a / 4);  
// }
// console.log(getCoupeNumber(1));
// №3
// function getTimeFromMinutes(a) {
//     if (typeof (a) !== 'number' || a < 0 || !Number.isInteger(a)) {
//         return "Ошибка, проверьте данные";
//     }
//     let b = parseInt(a / 60);
//     let c = a % 60; 
//     if (b === 1) {
//         return `Это ${b} час и ${c} минут`
//     } else if (b > 1 && b < 5) {
//         return `Это ${b} часа и ${c} минут`
//     } else if (b >= 5 || b === 0) {
//         return `Это ${b} часов и ${c} минут`
//     }
// }
// console.log(getTimeFromMinutes(20));
//  №4
// function findMaxNumber(a, b, c, d) {
//     if (typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number' || typeof(d) !== 'number' || a ===undefined || b === undefined || c ===undefined || d ===undefined) {
//         return 0
//     }
//     return Math.max(a, b, c, d);
// }   
// console.log(findMaxNumber(1, 5, '6', '10'));

// function fib(num) {
//     if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//         return "";
//     }
//     let result = '';
//     let first = 0;
//     let second = 1;

//     for (let i = 0; i < num; i++) {
//         if (i + 1 === num) {
//             result += `${first}`;
//         } else {
//             result += `${first} `;
//         }

//         let third = first + second;
//         first = second;
//         second = third;
//     }
//     return result;
// }

// console.log(fib(5));
// const rep = 1;
// const opt = {
//     do: 'help',
//     re: 12,
//     me: 'prvat',
//     fa: function() {
//         console.log(rep);
//     }
// };
// console.log(opt.fa());
// console.log(Object.keys(opt.fa));
// for (let key in opt) {
//     if (typeof(opt[key]) === 'object') {
//         for (let i in opt[key]) {
//             console.log(` Значення ${i} в обэкті ${opt[key][i]}`);
//     }
//     }else {
//         console.log(` Значення ${key} в обєкті ${opt[key]}`);
//     }  
// } 
// let A = [5, 12, 56, 3, 20, 38, 21, 49],
//     t = 57;
// function LinearSearch(t,A)      // t - искомый элемент,
// {                               // A - массив, в котором ищем.
//     let n = A.length; 
//     // let i = 0;
//     // A[n] = t;
//     for (let i = 0; i < n; i++) {
//         if (A[i] === t) return i;
//         else if (A[i] !== t && i === n - 1) return -1;
//     }
//     // while (A[ i ] !== t) i++;
//     // console.log(i)                            
//     // if (i < n) return i;          // На выходе индекс искомого элемента.
//     // else return -1;               // Если искомого элемента нет в массиве, то -1.
// }
// console.log(LinearSearch(t,A));
// let A = [5, 12, 56, 3, 20, 38, 21, 49];
// A = A.sort((a, b) => {return a - b;});
// console.log(A);
// function BinarySearch(t, A)         // t - искомый элемент, // A - упорядоченный массив, в котором ищем.
// {   let j = A.length - 1,
//         k;
//     for (let i = 0; i <= j;) {
//         k = Math.floor((i + j) / 2);
//         if (A[k] === t) return k;
//         if (A[k] > t) {j = k - 1} else {i = k + 1}; 
//     } 
//     return -1;                        
    // let i = 0, j = A.length-1, k;   

    // while (i <= j)
    // {  k = Math.floor((i+j)/2);
    //    if (t === A[k]) return k;
    //    else if (t < A[k]) j = k-1;
    //    else i = k+1;
    // }
    //                                На выходе индекс искомого элемента.
    // return -1;                     // Если искомого элемента нет в массиве, то -1.
// }
// console.log(BinarySearch(-141, A));
// let A = [5, 12, 56, 3, 20, 38, 21, 49];
// A = A.sort((a, b) => {return a - b;});
// function BinarySearch(t,A)       // t - искомый элемент,
// {                                // A - упорядоченный массив, в котором ищем.
//     let i = 0, j = A.length, k; 
                                 
//     while (i < j)                
//     {  k = Math.floor((i+j)/2);
//        if (t <= A[k]) j = k;
//        else i = k+1;
//     }
   
//     if (A[ i ] === t) return i;     // На выходе индекс искомого элемента.
//     else return -1;                 // Если искомого элемента нет в массиве, то -1.
// }
// console.log(BinarySearch(21, A));

// Робота з об'єктами
// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             // js: '20%',
//             // php: '10%'
//         },
//         exp: '1 month'
//     }
    // showAgeAndLangs: function(plan) {
        // const {age} = plan;
        // const {languages} = plan.skills;
        // let str = `Мне ${age} и я владею языками: `;

        // languages.forEach(function(lang) {
        //     str += `${lang.toUpperCase()} `;
        // });

        // return str;
        // let {languages} = plan['skills'];
        // let lang = languages.join(' ').toUpperCase();
        // return `Мне ${plan.age} и я владею языками: ${lang}` 

//     }    
// };
// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));
// function showExperience(plan) {
//     let {exp} = plan['skills'];
//     return `${exp}`;
// }
// function showProgrammingLangs(plan) {
//     let {programmingLangs} = plan['skills'];
//     // let langProgr = Object.keys(programmingLangs);
//     let str = '';
//     for (let key in programmingLangs) {
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//     }
//     if (langProgr.length === 0) return str;
//     for (let i = 0; i < langProgr.length; i++ ) {
//         str += `Язык ${langProgr[i]} изучен на ${programmingLangs[langProgr[i]]}`;
//         str += '\n';
//     }
//     return str;
// }
// console.log(showProgrammingLangs(personalPlanPeter));
