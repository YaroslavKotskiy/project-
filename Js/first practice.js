const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const oneOfTheLastFilms = prompt('Один из последлних фильмов?', '');
const rating = prompt('на сколько его оцените ?', '');

personalMovieDB.movies[oneOfTheLastFilms] = rating; 
console.log(personalMovieDB);