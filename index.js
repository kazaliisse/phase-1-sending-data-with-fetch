function addmovies(movie){
  console.log(movie)
  let row = document.getElementById("card")
  let div = document.createElement("div")
  div.classList.add("col-3")
  div.innerHTML=`<div class="card" style="width: 18rem;">
  <img src="${movie.poster}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${movie.poster}</h5>
    <p class="card-text">${movie.poster}</p>
    <a href="#" class="btn btn-outline-danger">Delete</a>
  </div>
</div>`

}


function getMovies(){
fetch("http://localhost:3000/movies")
.then(res => res.json())
.then(movies=>{
  movies.forEach(addmovies)
})
};



document.addEventListener("DOMcontentloaded", function(){
  getMovies();

})