'use stcrict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

for (let i = 0; i < 2; i++) {
    const oneOfTheLastFilms = prompt('Один из последлних фильмов?', ''),
          rating = prompt('на сколько его оцените ?', '');


    if (oneOfTheLastFilms != null && rating != null && oneOfTheLastFilms != '' && rating != '' && oneOfTheLastFilms.length < 50 && rating.length < 50) {
        personalMovieDB.movies[oneOfTheLastFilms] = rating;
        console.log('done');
    } else {
        alert('сделай все правильно');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    alert('Вы просмотрели очень мало фильмов!');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    alert('Вы бывалый зритель');
} else {
    alert ('Что-то пошло не так!');
}

console.log(personalMovieDB);