async function loadMovies() {
let response = await fetch("http://www.omdbapi.com?t=joker&apikey=91b6dc90")

let movies = await response.json();
return movies.Poster
//console.log(movies.Poster)
}

//async function showpic() {

//document.getElementById('imageone').src = loadMovies(); 

//}
