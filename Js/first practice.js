'use stcrict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFlims: function () {
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
    },
    showMyDB: function () {
        if (personalMovieDB.privat === false) {
            console.log(personalMovieDB);
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert('Вы просмотрели очень мало фильмов!');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            alert('Вы бывалый зритель');
        } else if (personalMovieDB.count >= 30) {
            alert('Вы настоящий киноман!');
        } else {
            alert('Что-то пошло не так!');
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр подномером ${i}`, '');

            if(genre === '' || genre == null) {
                console.log('Wrong Data or Empty'); 
                    i--;
                
            } else {
                personalMovieDB.genres.push(genre);
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};