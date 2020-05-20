async function loadMovies() {
    let response = await fetch("http://www.omdbapi.com/?s=Batman&apikey=91b6dc90")

    let movies = await response.json();
    // below 'return' works and loads the poster but provides no console output but not needed once it works
   return movies.data
    // console.log was useful to check if loadMovies() actually fetched anyhing but not for below uri so now deactivated
    //flexing - this also works and probably better for looping[]
    //return movies.Search[4].Poster
   //console.log(movies) //this works
    
}

let img1 = document.querySelector('#imageone')

window.onload = function() {
    loadMovies().then(uri => img1.src = uri).catch(err => console.log(err.message))
}

