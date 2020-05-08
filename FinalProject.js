async function loadMovies() {
let response = await fetch("http://www.omdbapi.com?t=joker&apikey=91b6dc90")

let movies = await response.json();
return movies.poster

}

