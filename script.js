async function searchMovie(){

let movieName = document.getElementById("movieInput").value

let url = `https://www.omdbapi.com/?s=${movieName}&apikey=a6f22c18`

let response = await fetch(url)

let data = await response.json()

let moviesDiv = document.getElementById("movies")

moviesDiv.innerHTML = ""

data.Search.forEach(movie => {

moviesDiv.innerHTML += `
<div class="movie">
<img src="${movie.Poster}">
<h3>${movie.Title}</h3>
<p>${movie.Year}</p>
</div>
`

})

}
