'use strict';

const numderOfFilm = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numderOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оценили его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотренно довольно мало фильимов");
}  else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
    console.log("Вы классный зритель");
} else if (personalMovieDB >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}


console.log(personalMovieDB);



