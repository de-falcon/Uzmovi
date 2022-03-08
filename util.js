

function filmsHTML(film) {
    return `
        <div class="movie">
            <img src=${`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt=${film.title}>

            <div class="movie-info">
            <h3>${film.title}</h3>
            <span class="orange">${film.vote_average}</span>
            </div>
            <span class="date">${film.release_date}</span>
        </div>
    `
}