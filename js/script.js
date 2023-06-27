'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', ''),
      personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
        };
const whatFilm = prompt('Один из последних просмотренных фильмов?', ''),
      howMuch = +prompt('На сколько его оцените', ''),
      whatFilm1 = prompt('Один из последних просмотренных фильмов?', ''),
      howMuch1 = +prompt('На сколько его оцените', '');
personalMovieDB.movies[whatFilm] = howMuch;
personalMovieDB.movies[whatFilm1] = howMuch1;
console.log(personalMovieDB);
