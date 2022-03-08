// let API_KEY = 'b971c2f0de8767f08d2bb84160ba24b7'
let app = document.querySelector('.append')
let search = document.querySelector('#search')
let b1 = document.querySelector('#b1')
let b2 = document.querySelector('#b2')
let b3 = document.querySelector('#b3')


let API_KEY = 'dcea1fd7b3e65d34387ad6de7ef9cc5e'

let tokenTop = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=1`
let tokenPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`
let tokenUpComing = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&page=1`
class Uzmovi {
    page = 1
	limit = 20
	buttonsLength
	active
	search

    async renderTop() {
        let token_Top = await fetch(`${tokenTop}`)
        let popular = await fetch(`${tokenPopular}`)
        let upcoming = await fetch(`${tokenUpComing}`)
        token_Top = await token_Top.json()
        popular = await popular.json()
        upcoming = await upcoming.json()
        let films = token_Top.results
        let populars = popular.results
        let upcomings = upcoming.results


        min.onkeyup = () => {
            app.innerHTML = null
            btn.onclick = () => {
                for (let film of films) {
                    let date = film.release_date.split('').splice(0, 4).join('')
                    if (min.value <= date) {
                        app.innerHTML += filmsHTML(film)
                    }
                }
            }
        }
        max.onkeyup = () => {
            app.innerHTML = null
            btn.onclick = () => {
                for (let film of films) {
                    let date = film.release_date.split('').splice(0, 4).join('')
                    if (max.value >= date && min.value <= date) {
                        app.innerHTML += filmsHTML(film)
                    }
                }
            }
        }

        b1.onclick = () => {
            app.innerHTML = null
            if (b1.value == 'top_rated') {
                for (const film of films) {
                    app.innerHTML += filmsHTML(film)
                }
            }
            search.onkeyup = () => {
                app.innerHTML = null
                btn.onclick = () => {
                    for (let film of films) {
                        if (search.value == film.title) {
                            app.innerHTML += filmsHTML(film)
                        }
                    }
                }
            }
            score.onkeyup = () => {
                app.innerHTML = null
                btn.onclick = () => {
                    for (let film of films) {
                        if (score.value <= film.vote_average) {
                            app.innerHTML += filmsHTML(film)
                        }
                    }
                }
            }


        }
        b2.onclick = () => {
            app.innerHTML = null
            if (b2.value == "popular") {
                for (const film of populars) {
                    app.innerHTML += filmsHTML(film)
                }
            }
            search.onkeyup = () => {
                app.innerHTML = null
                btn.onclick = () => {
                    for (let film of populars) {
                        if (search.value == film.title) {
                            app.innerHTML += filmsHTML(film)
                        }
                    }
                }
            }
            score.onkeyup = () => {
                app.innerHTML = null
                btn.onclick = () => {
                    for (let film of populars) {
                        if (score.value <= film.vote_average) {
                            app.innerHTML += filmsHTML(film)
                        }
                    }
                }
            }

        }
        b3.onclick = () => {
            app.innerHTML = null
            if (b3.value == 'upcoming') {
                app.innerHTML = null
                for (const film of upcomings) {
                    app.innerHTML += filmsHTML(film)
                }

            }
            search.onkeyup = () => {
                app.innerHTML = null
                btn.onclick = () => {
                    for (let film of upcomings) {
                        if (search.value == film.title) {
                            app.innerHTML += filmsHTML(film)
                        }
                    }
                }
            }
            score.onkeyup = () => {
                app.innerHTML = null
                btn.onclick = () => {
                    for (let film of upcomings) {
                        if (score.value <= film.vote_average) {
                            app.innerHTML += filmsHTML(film)
                        }
                    }
                }
            }
        }


    }
  
}
let render = new Uzmovi()
render.renderTop()
// render.renderPaginateButtons()



