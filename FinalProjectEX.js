async function loadMovies() {
  let response = await fetch("http://www.omdbapi.com/?s=love&apikey=91b6dc90")
  let movies = await response.json();
  
  // // What's in movies
  // console.log("Here's the movies variable: ");
  // console.log(JSON.stringify(movies)) //
  
  // // Looks like we actually want the `Search` property:
  // console.log("This should be the array:")
  // console.log(JSON.stringify(movies.Search))

  // Return the array
  return movies.Search
}

async function  main() {
// Load movies
const moviesArray = await loadMovies()

// Iterate through every movie in the array
for (var index = 0; index < moviesArray.length; index++) {
  // Grab a reference to the movie at `index`
  const movie = moviesArray[index];
  const poster = movie.Poster
  console.log(poster)

  // Print it for fun.
  //console.log("The movie object at index " + index + " is:");
  //console.log(JSON.stringify(movie))
}
}