const numderOfFilm = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numderOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оценили его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оценили его?', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
