'use strict';
let numberOfFilms;
function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
    while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
    }
}
start();
const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };
function remembeberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = +prompt('На сколько его оцените', '');   
        if (a != null && b != null && a != '' && b != '' & a.length < 20) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}
remembeberMyFilms ();
// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = +prompt('На сколько его оцените', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = +prompt('На сколько его оцените', '');
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
function detectPersonalLevel() {
    if (personalMovieDB['count'] < 10) {
    console.log('Мало фильмов');
    } else if (personalMovieDB['count'] >= 10 && personalMovieDB['count'] < 30) {
    console.log('Класический зритель');
    } else if (personalMovieDB['count'] >= 30) {
    console.log('Вы киноман');
    } else {
    console.log('Ошибка чтения');
    };
}
detectPersonalLevel();
function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }
}
showMyDB();
function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любтмый жанр под номером ${i + 1}`, '');
    }
}
writeYourGenres();

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
// fil = fil.slice(8, 10);
// console.log(fil);