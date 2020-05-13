async function loadMovies() {
    let response = await fetch("http://www.omdbapi.com/?s=Batman&apikey=91b6dc90")

    let movies = await response.json();
    // below 'return' works and loads the poster but provides no console output but not needed once it works
   // return movies.Poster
    // console.log was useful to check if loadMovies() actually fetched anyhing but not for below uri so now deactivated
    //console.log(movies.Search[1].Poster)
    return movies.Search[1].Poster
   //console.log(movies) //this works
    
}

let img1 = document.querySelector('#imageone')
let btn1 = document.querySelector('#btn1')

btn1.addEventListener('click',() => {
    loadMovies().then(uri => img1.src = uri).catch(err => console.log(err.message))
    
})

