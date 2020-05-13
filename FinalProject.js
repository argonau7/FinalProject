async function loadMovies() {
    let response = await fetch("http://www.omdbapi.com?t=batman&apikey=91b6dc90")

    let movies = await response.json();
    //return "/home/lilu/Ignite/FinalProject/Media/Movie Posters/inception.jpg"
    return movies.Poster
   //console.log(movies.Poster) //this works
    
}

let img1 = document.querySelector('#imageone')
let btn1 = document.querySelector('#btn1')

btn1.addEventListener('click',() => {
    loadMovies().then(uri => img1.src = uri).catch(err => console.log(err.message))
    //below code works on the click but I actually want the result of the function above to fetch this link below dynamically
    //img1.src = "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
   // below is what I thought would work - but evidently doesn't
    //img1.src = loadMovies()
})

//-----------------------------
// async function loadMovies() {
//     fetch("http://www.omdbapi.com?t=joker&apikey=91b6dc90")
// .then(response => response.json())
// .then(data => {
// var div = document.createElement('div')

// div.innerHTML = ''

// for (var prop in data) {
// console.log(data[prop]),
//     div.innerHTML +=
// '<div class="swiper-slide"><img src="'+data[prop]+'"> </div>'
// }

// document.getElementsByClassName('emojiswiper-wrapper').appendChild(div)



// })
//     //return "/home/lilu/Ignite/FinalProject/Media/Movie Posters/inception.jpg"
//     //return movies.Poster
//  } //console.log(movies.Poster) //this works
