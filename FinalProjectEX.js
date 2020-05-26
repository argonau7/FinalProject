
//function loaditall() {

  async function loadMovies() {
    let response = await fetch("http://www.omdbapi.com/?s=knight&apikey=91b6dc90")
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
    var poster = movie.Poster
    //get the gallery wrapper
    var gallery = document.getElementById('gallery')
  //create img div wrapper
  var outer_element = document.createElement('div')
  //add CSS class so element will look as it is supposed to
  outer_element.classList.add('swiper-slide')
  //create img element
  var image_element = document.createElement('img')
  //set API URL to element above
  image_element.src = poster
  //Append img element to image wrapper
  outer_element.appendChild(image_element)
  //append image wrapper to gallery
  gallery.appendChild(outer_element)
  
  
  }
  }

  window.onload = main()
  
  // async function loadMovies2() {
  //   let response = await fetch("http://www.omdbapi.com/?s=sex&apikey=91b6dc90")
  //   let movies2 = await response.json();
    
  //   // // What's in movies
  //   // console.log("Here's the movies variable: ");
  //   // console.log(JSON.stringify(movies)) //
    
  //   // // Looks like we actually want the `Search` property:
  //   // console.log("This should be the array:")
  //   // console.log(JSON.stringify(movies.Search))
  
  //   // Return the array
  //   return movies2.Search
  // }
  
  
  
  // async function  main2() {
  // // Load movies
  // const movies2Array = await loadMovies2()
  
  // // Iterate through every movie in the array
  // for (var index = 0; index < movies2Array.length; index++) {
  //   // Grab a reference to the movie at `index`
  //   const movie2 = movies2Array[index];
  //   var poster2 = movie2.Poster
  //   //get the gallery wrapper
  //   var gallery2 = document.getElementById('gallery2')
  // //create img div wrapper
  // var outer_element2 = document.createElement('div')
  // //add CSS class so element will look as it is supposed to
  // outer_element2.classList.add('swiper-slide')
  // //create img element
  // var image_element2 = document.createElement('img')
  // //set API URL to element above
  // image_element2.src = poster2
  // //Append img element to image wrapper
  // outer_element2.appendChild(image_element2)
  // //append image wrapper to gallery
  // gallery2.appendChild(outer_element2)
  
  
  //}
 // }
  //}
  //window.onload = loaditall()
  