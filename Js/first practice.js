'use stcrict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFlims() {
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
}

rememberMyFlims();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Вы просмотрели очень мало фильмов!');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        alert('Вы бывалый зритель');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы настоящий киноман!');
    } else {
        alert('Что-то пошло не так!');
    }
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres.push(prompt(`Ваш любимый жанр подномером ${i}`, ''));
    }
}

writeYourGenres();