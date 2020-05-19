async function loadMovies() {
    let response = await fetch("http://www.omdbapi.com/?s=love&apikey=91b6dc90")
    let movies = await response.json();
    // return movies.Poster
    // console.log(movies.Poster) //this works and shows poster url with single return item 
    return movies.Search[0].Poster   // required when multiple results
    //for (var i =0; i< 9 ;i++) {
    //let obj = objArray.find(obj => obj.id == Poster);
    //}

}

//let btn1 = document.querySelector('#btn1')
//btn1.addEventListener('click',() => {

let img1 = document.querySelector('#imageone')
//holy shxt, this works
window.onload = function () {
    loadMovies().then(uri => img1.src = uri).catch(err => console.log(err.message))
}

